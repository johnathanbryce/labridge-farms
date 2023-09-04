'use client'
import {useState, useRef} from 'react'
import styles from './HeaderLabs.module.css'
// External Libraries
import { Link } from 'react-scroll';

export default function HeaderLabs() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  // dropdown navbar menu on smaller screens:
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  // toggle dropdown navbar menu on smaller screens:
  const toggleDropdown = () => {
      setIsDropdownActive((prev) => !prev); /* relies on prior state so dont change it to just !isDropdownActive */
  }

  // closes dropdown menu on nav item click
  const onNavItemClickCloseDropdown = () =>{
      setIsDropdownActive(false)
  }

  return (
    <header className={styles.header} ref={dropdownRef}>
      <h6> LABRIDGE FARMS </h6>

      <div className={`${styles.hamburger} ${isDropdownActive ? styles.hamburger_active : '' }`} onClick={toggleDropdown}>
          <div className={styles.bar} ></div>
          <div className={styles.bar} ></div>
          <div className={styles.bar} ></div>
      </div>

      <nav className={styles.navbar}>
        <ul>
            <li className={styles.link}><Link to="labs" spy={true} smooth={true} duration={500}  offset={-100}> Our Labs</Link></li>  
            <li className={styles.link}><Link to="litters" spy={true} smooth={true} duration={500}  offset={-100}> Litters </Link></li>   
            <li className={styles.link}><Link to="photos" spy={true} smooth={true} duration={500} offset={-100} > Photo Gallery</Link></li>
            <li className={styles.link}><Link to="contact" spy={true} smooth={true} duration={500} offset={10} > Contact</Link></li>
        </ul>
      </nav>

      { isDropdownActive && 
        <nav className={styles.navbar_dropdown}>
        <ul>
            <li className={styles.link}><Link to="labs" onClick={onNavItemClickCloseDropdown}spy={true} smooth={true} duration={500} offset={10} > Our Labs </Link></li> 
            <li className={styles.link}><Link to="litters" onClick={onNavItemClickCloseDropdown} spy={true} smooth={true} duration={500} offset={10} > Litters </Link></li>
            <li className={styles.link}><Link to="photos" onClick={onNavItemClickCloseDropdown} spy={true} smooth={true} duration={500}  offset={10}> Photo Gallery </Link></li>  
            <li className={styles.link}><Link to="contact" onClick={onNavItemClickCloseDropdown} spy={true} smooth={true} duration={500} offset={10} > Contact </Link></li>     
        </ul>
      </nav>
      }


    </header>
  )
}
