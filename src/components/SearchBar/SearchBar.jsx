import styles from './SearchBar.module.css'
import { useState } from 'react';
const SearchBar=()=>{
    const[states,setStates]=useState([]);
    const[cities,setCities]=useState([]);
    const[selectedState,setSelectedState]=useState("");
    const[selectedCity,setSelectedCity]=useState("");
    return(
        <form className={styles.searchBox}>
            <div id='state'>
                <select>
                    <option>Select State</option>
                </select>
            </div>

            <div id="city">
                <select>
                    <option>Select City</option>
                </select>
            </div>
            <button id="searchBtn" type="submit">Search</button>
        </form>
    )
}
export default SearchBar