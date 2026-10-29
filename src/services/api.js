import axios from "axios";

//  ------ Base URL ::::::::
const  BASE_URL="https://meddata-backend.onrender.com";


// ----------- get  states:::::
 export const getStates=async()=>{

    /*___________ USING  AXIOS __________________________ */
    const response=await axios.get(`${BASE_URL}/states`);
    return response.data;
 }



// /**__________________USING ASNYC && AWAIT */
//     // const  response= await fetch(`${BASE_URL}/states`)
//     // console.log("Before  JSON::::::::",response);
//     // const data=await response.json();
//     // console.log("AFTER JSON::::::::::   ",data);sz
//     // return data;
// }


/*_____________USING  FETCH___________________________ */
// export const getStates=()=>{
//     const url=`${BASE_URL}/states`
//     return  fetch(url)
//         .then((res)=>{
//             if(!res.ok){
//                 throw new Error(`HTTP error! status: ${res.status}`);
//             }
//             return res.json();
//         })
//         .then((data)=>{
//             return data;
//         })
//         .catch((err)=>{
//             console.error("Error Fatching  states mawa ::", err);
//         })

//     }


// ----------- get  cities:::::
export const getCities=async(state)=>{
    const response=await axios.get(`${BASE_URL}/cities/${state}`);
    return response.data;
}
// ----------- get  hospitals:::::
export const getHospitals=async(state,city)=>{
    const params= new URLSearchParams({state,city});
    const response=await  axios.get( `${BASE_URL}/data?${params.toString()}`
    );
    return response.data;
}

