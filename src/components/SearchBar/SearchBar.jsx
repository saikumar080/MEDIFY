import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStates, getCities } from "../../services/api";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const navigate = useNavigate();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      setLoading(true);
      const data = await getStates();
      setStates(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStateChange = async (event) => {
    const state = event.target.value;

    setSelectedState(state);
    setSelectedCity("");
    setCities([]);

    if (!state) return;

    try {
      setLoadingCities(true);
      const data = await getCities(state);
      setCities(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingCities(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedState || !selectedCity) return;

    navigate(
      `/search?state=${encodeURIComponent(
        selectedState
      )}&city=${encodeURIComponent(selectedCity)}`
    );
  };

  return (
     <Paper
    component="form"
    onSubmit={handleSubmit}
    className={styles.searchBox}
    elevation={4}
  >
    <Stack
  direction={{ xs: "column", md: "row" }}
  spacing={2}
  alignItems={{ xs: "stretch", md: "flex-end" }}
>
  <FormControl fullWidth>
    <InputLabel>State</InputLabel>

    <Select
      value={selectedState}
      label="State"
      onChange={handleStateChange}
    >
      {states.map((state) => (
        <MenuItem key={state} value={state}>
          {state}
        </MenuItem>
      ))}
    </Select>
  </FormControl>

  <FormControl
    fullWidth
    disabled={!selectedState || loadingCities}
  >
    <InputLabel>City</InputLabel>

    <Select
      value={selectedCity}
      label="City"
      onChange={(e) => setSelectedCity(e.target.value)}
    >
      {cities.map((city) => (
        <MenuItem key={city} value={city}>
          {city}
        </MenuItem>
      ))}
    </Select>
  </FormControl>

  <Button
    variant="contained"
    size="large"
    type="submit"
    disabled={
      loading ||
      loadingCities ||
      !selectedState ||
      !selectedCity
    }
    startIcon={
      loading ? (
        <CircularProgress size={20} color="inherit" />
      ) : (
        <SearchIcon />
      )
    }
    sx={{
      minWidth: 170,
      height: 56,
      borderRadius: 2,
      textTransform: "none",
      fontWeight: 600,
    }}
  >
    {loading ? "Loading..." : "Search"}
  </Button>
</Stack>
</Paper>
  );
};

export default SearchBar;