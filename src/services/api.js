import axios from "axios";

//  ------ Base URL ::::::::
const  BASE_URL="https://meddata-backend.onrender.com";


// ----------- get  states:::::
 export const getStates=async()=>{

    /*___________ USING  AXIOS __________________________ */
    const response=await axios.get(`${BASE_URL}/states`);
    return response.data;
 }


// ----------- get  cities:::::
export const getCities=async(state)=>{
    const response=await axios.get(`${BASE_URL}/cities/${encodeURIComponent(state)}`);
    return response.data;
}
// ----------- get  hospitals:::::
export const getHospitals=async(state,city)=>{
    const params= new URLSearchParams({state,city});
    const response=await  axios.get( `${BASE_URL}/data?${params.toString()}`
    );
    return response.data;
}

