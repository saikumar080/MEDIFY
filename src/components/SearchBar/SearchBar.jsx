import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStates, getCities } from "../../services/api";
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { InputAdornment, OutlinedInput, Typography } from "@mui/material";
import CategoryCard from "../CategoryCard/CategoryCard";
import  doctorIcon from "../../assests/icons/doctors-icon.png";
import labIcon from "../../assests/icons/labs-icon.png";
import hospitalIcon from "../../assests/icons/hospital-icon.png";
import medicineIcon from "../../assests/icons/medical-icon.png";
import ambulanceIcon from "../../assests/icons/ambulance-icon.png"

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
    <>
     <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{position:{xs:"static",lg:"absolute"}, left:{md:"50%"}, bottom:-40, transform:{lg: "translateX(-50%)"}, width:{xs:"100%",lg:"86%"},mx:"auto",mt:{xs:1.5,sm:2, md:0}, p:3, borderRadius:4, zIndex:10}}
        elevation={4}
      >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems={{ xs: "stretch", md: "flex-end" }}
      >
        <Box id="state" sx={{flex:0.5}}>
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
              {loading ? (
                <MenuItem disabled> Loading ...</MenuItem>
              ):(
                states.map((state) => (
                <MenuItem key={state} value={state} sx={{ fontSize: { xs: 12, sm: 13, md: 14 }, fontWeight: 500 }}>
                  {state}
                </MenuItem>
              ))
              )}
            </Select>
          </FormControl>
        </Box>

        <Box id="city" sx={{flex:0.5}}>
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
              {loading ?(
                <MenuItem disabled>Loading...</MenuItem>
              ):(
                cities.map((city) => (
                <MenuItem key={city} value={city} sx={{ fontSize: { xs: 12, sm: 13, md: 14 }, fontWeight: 500 }}>
                  {city}
                </MenuItem>
              ))
              )}
            </Select>
          </FormControl>
        </Box>
        <Button
          id="searchBtn"
          variant="contained"
          size="large"
          type="submit"

          disabled={
            loadingCities ||
            !selectedState ||
            !selectedCity
          }
          startIcon={<SearchIcon/>}
          sx={{
            minWidth:{xs:"100%", md:160,lg:180},
            height: 56,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Search
        </Button>
      </Stack>
      <Box sx={{mt:5}}>
       <Typography align="center" variant="h4" color="text.primary" sx={{mb:4}}>You may be looking  for</Typography>

       <Box sx={{display:"grid",gap:2, mt:4, gridTemplateColumns:{xs:"repeat(2,1fr)", sm:"repeat(3,1fr)",md:"repeat(5, 1fr)"},}}> 
          {/* Doctors Icon */}
          <CategoryCard icon={doctorIcon} title="Doctors" />
          {/* Lab ICon */}
          <CategoryCard  icon={labIcon} title="Labs" />
          {/* Hospital  ICon  */}
          <CategoryCard  icon={hospitalIcon} title="Hospitals" active />
          {/* Medical Store Icon */}
          <CategoryCard  icon={medicineIcon} title="Medical Store"/>
          {/* Ambulance  Icon */}
          <CategoryCard icon={ambulanceIcon} title="Ambulance" />
       </Box>
      </Box>
  </Paper>
</>
  );
};

export default SearchBar;