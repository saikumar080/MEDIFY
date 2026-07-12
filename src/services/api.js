import axios from "axios";

//  ------ Base URL ::::::::
const  BASE_URL="https://meddata-backend.onrender.com";


// ----------- get  states:::::
export const getStates=()=>{
    return axios.get(`${BASE_URL}/states`);
}

// ----------- get  cities:::::
export const getCities=(state)=>{
    return axios.get(`${BASE_URL}/cities/${state}`);
}
// ----------- get  hospitals:::::
export const getHospitals=(state,city)=>{
    return axios.get(
        `${BASE_URL}/data?state=${state}&city=${city}`
    );
}
