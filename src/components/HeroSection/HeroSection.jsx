import styles from "./HeroSection.module.css";
import SearchBar from "../SearchBar/SearchBar";
import  doctorImage from "../../assests/images/NicePng_doctor-png_336282 1.png";
const HeroSection=()=>{
    return(
        <div>
            <section className={styles.hero}>
            <div className={styles.left}>
                <p className={styles.subtitle}> Skip the travel! Find Online Doctors</p>
                <h1>Medical  <span>Centers</span></h1>
                <p className={styles.description}>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
                <button className={styles.primaryBtn}>Find Centers</button>
            </div>
            
            <div className={styles.right}>
                <img 
                    src={doctorImage}
                    alt="Doctor"
                />
            </div>
        </section>
         <SearchBar />
        </div>
        
    )
}
export default HeroSection;