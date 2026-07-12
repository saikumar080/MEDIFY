import axios from "axios";

//  ------ Base URL ::::::::
const  BASE_URL="https://meddata-backend.onrender.com";


// ----------- get  states:::::
export const getStates=async()=>{
    const response=await axios.get(`${BASE_URL}/states`);
    return response.data;
}

// ----------- get  cities:::::
export const getCities=async(state)=>{
    const response=await axios.get(`${BASE_URL}/cities/${state}`);
    return response.data;
}
// ----------- get  hospitals:::::
export const getHospitals=async(state,city)=>{
    const response=await axios.get(
        `${BASE_URL}/data?state=${state}&city=${city}`
    );
    return response.data;
}
