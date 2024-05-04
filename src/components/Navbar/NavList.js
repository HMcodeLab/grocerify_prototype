import React, { useState } from 'react'
import styles from './Navlist.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as HamBurger } from '../../Assets/Icons/hamburger.svg'
import Sidebar from '../Sidebar/sidebar'

const NavList = () => {

    const [isOpenSidebar, setisOpenSidebar] = useState(false)
    return (
        <>
            <div className={styles.nav_list_main}>

                <ul className={styles.nav_list}>
                    <li onClick={() => setisOpenSidebar(true)}>   <HamBurger /> <p>All</p> </li>
                    <Link to={'/products?category=Grocery&subcategory=fruits'}> <li>Fruits</li></Link>
                    <Link to={'/products?category=Grocery&subcategory=vegetables'}> <li>Vegetables</li></Link>
                    <Link to={'/products?category=Grocery&subcategory=dairy'}> <li>Dairy</li></Link>
                    <Link to={'/products?category=Grocery&subcategory=meat&egg'}> <li>Meat and Egg</li> </Link>
                    <Link to={'/products?category=Grocery&subcategory=herbs&spices'}>  <li>Herbs and spices</li></Link>
                    <Link to={'/products?category=Grocery&subcategory=snack&drinks'}>  <li>Snacks and Drinks</li></Link>
                    {/* <Link to={'/stores'}>  <li>Stores</li></Link> */}
                </ul>

            </div>
            {
                isOpenSidebar &&
                <div className={styles.sidebar_container}>
                    <div className={styles.top_div} onClick={() => setisOpenSidebar(false)}></div>
                    <div style={{ display: "flex" }}>
                        <div className={styles.main_sidebar}> <Sidebar category={""} />
                        </div>
                        <div className={styles.overlay} onClick={() => setisOpenSidebar(false)}></div>
                    </div>
                </div>
            }
        </>
    )
}

export default NavList