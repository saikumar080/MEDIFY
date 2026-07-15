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
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import styles from "./SearchBar.module.css";
import { InputAdornment, OutlinedInput } from "@mui/material";

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
    sx={{position:{xs:"static",md:"absolute"}, left:{md:"50%"}, bottom:-45, transform:{md: "translateX(-50%)"}, width:{xs:"100%",md:"86%"},mx:"auto",mt:{xs:1.5,sm:2, md:0}, p:3, borderRadius:4, zIndex:10}}
    elevation={4}
  >
    <Stack
  direction={{ xs: "column", md: "row" }}
  spacing={2}
  alignItems={{ xs: "stretch", md: "flex-end" }}
>
  <FormControl fullWidth>
    <InputLabel> State</InputLabel>

    <Select
      value={selectedState}
      label="State"
      onChange={handleStateChange}
      input={
        <OutlinedInput 
          startAdornment={
            <InputAdornment position="start">
              <LocationOnOutlinedIcon color="action" />
            </InputAdornment>
          }
         label="State"/>
      }
      
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
      input={
        <OutlinedInput 
          startAdornment={
            <InputAdornment position="start">
              <LocationOnOutlinedIcon color="action" />
            </InputAdornment>
          }
         label="City"/>
      }
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
    startIcon={<SearchIcon/>}
    sx={{
      minWidth: 170,
      height: 56,
      borderRadius: 2,
      textTransform: "none",
      fontWeight: 600,
    }}
  >
    Search
  </Button>
</Stack>
</Paper>
  );
};

export default SearchBar;