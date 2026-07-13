import styles from './SearchBar.module.css'
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { getStates, getCities } from '../../services/api';
import { FiSearch } from 'react-icons/fi';
const SearchBar=()=>{
    const navigate=useNavigate();

    const[states,setStates]=useState([]);
    const[cities,setCities]=useState([]);

    const[selectedState,setSelectedState]=useState("");
    const[selectedCity,setSelectedCity]=useState("");

    const[loading,setLoading]=useState(false);
    const[loadingCities,setLoadingCities]=useState(false);

    // ___________fetch states on component mount:::::
    useEffect(()=>{
        fetchStates();
    },[]);

    // ___________fetch states and cities from api:::::
    const fetchStates=async()=>{
        try{
            setLoading(true);
            // API call to fetch states
            const data=await getStates(); 
            setStates(data);
        }catch(err){
            console.error("Error fetching states:", err);
        }finally{
            setLoading(false);
        }
    }

    // ___________Handle state selection change:::::
    const handleStateChange=async(e)=>{
        const state=e.target.value;
        setSelectedState(state);
        setSelectedCity(""); // Reset selected city when state changes
        setCities([]); // Clear cities when state changes
        // Fetch cities for the selected state

        if(!state)return; // If no state is selected, do not fetch cities
        try{
            setLoadingCities(true);
            const data=await getCities(state);
            setCities(data);
        }catch(err){
            console.error("Error fetching cities:", err);
        }finally{
            setLoadingCities(false);
        }
    };

    // ___________Handle form submission:::::
    const handleSubmit=(e)=>{
        e.preventDefault();
        // Perform search action with selectedState and selectedCity
        if(!selectedState || !selectedCity)return;
        navigate(`/search?state=${encodeURIComponent(selectedState)}&city=${encodeURIComponent(selectedCity)}`);
    }
    
    return(
        <form className={styles.searchBox} onSubmit={handleSubmit}>
            <div  className={styles.inputGroup}>
                <label htmlFor="stateSelect">State</label>
                <select id="stateSelect" value={selectedState} onChange={handleStateChange}>
                    <option value="">Select State</option>
                    {states.map((state)=>(
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}
                </select>
                
            </div>

            <div  className={styles.inputGroup}>
                <label htmlFor="citySelect">City</label>
                <select id="citySelect" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} disabled={!selectedState || loadingCities}>
                    <option value="">{loadingCities ? "Loading..." : "Select City"}</option>
                    {cities.map((city)=>(
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                className={styles.searchBtn}
                disabled={loading || loadingCities || !selectedState || !selectedCity}
                >
                {loading ? (
                    <>
                    <span className={styles.spinner}></span>
                    Loading...
                    </>
                ) : (
                    <>
                    <FiSearch />
                    Search
                    </>
                )}
                </button>
        </form>
    );
}
export default SearchBar