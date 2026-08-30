import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Stack,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { getStates, getCities } from "../../services/api";

const SearchBar = ({ searchPage = false }) => {
  const navigate = useNavigate();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  // =========================
  // FETCH STATES
  // =========================

  useEffect(() => {
    const fetchStates = async () => {
      try {
        setLoading(true);

        const data = await getStates();

        setStates(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching states:", error);
        setStates([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStates();
  }, []);

  // =========================
  // STATE CHANGE
  // =========================

  const handleStateChange = async (event) => {
    const state = event.target.value;

    setSelectedState(state);
    setSelectedCity("");
    setCities([]);

    if (!state) {
      return;
    }

    try {
      setLoadingCities(true);

      const data = await getCities(state);

      setCities(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching cities:", error);
      setCities([]);
    } finally {
      setLoadingCities(false);
    }
  };

  // =========================
  // SEARCH
  // =========================

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedState || !selectedCity) {
      return;
    }

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
      elevation={4}
      sx={{
        position: searchPage
          ? "static"
          : {
              xs: "static",
              lg: "absolute",
            },

        left: searchPage ? "auto" : { md: "50%" },

        bottom: searchPage ? "auto" : -45,

        transform: searchPage
          ? "none"
          : {
              lg: "translateX(-50%)",
            },

        width: searchPage
          ? "100%"
          : {
              xs: "100%",
              lg: "86%",
            },

        mx: "auto",

        mt: searchPage
          ? 0
          : {
              xs: 1.5,
              sm: 2,
              md: 0,
            },

        p: {
          xs: 2,
          sm: 3,
        },

        borderRadius: 4,

        zIndex: 10,
      }}
    >
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        spacing={2}
        alignItems={{
          xs: "stretch",
          md: "flex-end",
        }}
      >
        {/* =========================
            STATE
        ========================= */}

        <Box
          id="state"
          sx={{
            flex: 1,
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="state-label">State</InputLabel>

            <Select
              labelId="state-label"
              value={selectedState}
              label="State"
              onChange={handleStateChange}
              input={
                <OutlinedInput
                  label="State"
                  startAdornment={
                    <InputAdornment position="start">
                      <LocationOnOutlinedIcon color="action" />
                    </InputAdornment>
                  }
                />
              }
            >
              {loading ? (
                <MenuItem disabled>
                  Loading...
                </MenuItem>
              ) : states.length > 0 ? (
                states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>
                  No states available
                </MenuItem>
              )}
            </Select>
          </FormControl>
        </Box>

        {/* =========================
            CITY
        ========================= */}

        <Box
          id="city"
          sx={{
            flex: 1,
          }}
        >
          <FormControl
            fullWidth
            disabled={!selectedState || loadingCities}
          >
            <InputLabel id="city-label">
              City
            </InputLabel>

            <Select
              labelId="city-label"
              value={selectedCity}
              label="City"
              onChange={(event) =>
                setSelectedCity(event.target.value)
              }
              input={
                <OutlinedInput
                  label="City"
                  startAdornment={
                    <InputAdornment position="start">
                      <LocationOnOutlinedIcon color="action" />
                    </InputAdornment>
                  }
                />
              }
            >
              {loadingCities ? (
                <MenuItem disabled>
                  Loading...
                </MenuItem>
              ) : cities.length > 0 ? (
                cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>
                  {selectedState
                    ? "No cities available"
                    : "Select a state first"}
                </MenuItem>
              )}
            </Select>
          </FormControl>
        </Box>

        {/* =========================
            SEARCH BUTTON
        ========================= */}

        <Button
          id="searchBtn"
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          disabled={
            loadingCities ||
            !selectedState ||
            !selectedCity
          }
          sx={{
            minWidth: {
              xs: "100%",
              md: 160,
              lg: 180,
            },

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