import styles from "./Home2.leftSide.module.css";
import styles2 from "./Home2.rightSide.module.css";
import { useState } from "react";
import { Dashboard } from "./Dashboard.js";
import { Transactions } from "./Transactions.js";
import { Schedules } from "./Schedules.js";
import { Users } from "./Users.js";
import { Settings } from "./Settings.js";
import { Help } from "./Help.js";
import { ContactUs } from "./ContactUs.js";
import { NavBar } from "./NavBar.js";
import dashboardImage from "../src/pie-chart.png"; // Import the image file
//import other images
import transactionImage from "../src/tags.png";
import scheduleImage from "../src/calendar.png";
import settingImage from "../src/settings.png";
import userImage from "../src/profile.png";
import bellImage from "../src/bell.png";
import myImage from "../src/myImage.png";
import searchImage from "../src/Search.png";
const Home2 = () => {
    const [rightPage, setRightPage] = useState('dashboard')
    const [search, setSearch] = useState('')
    const handleSearch=(e)=>{
        e.preventDefault();
        console.log(search);
    }
    return (
        <>
            <div className={styles.background}>
                <div className={styles.leftSide}>
                    <b className={styles.board}>Board.</b>

                    <div
                        className={`${styles.dashboard1} ${rightPage === 'dashboard' ? styles.bold : ''
                            }`}
                        onClick={() => setRightPage('dashboard')}
                    >
                        <img
                            className={styles.Icon}
                            alt=""
                            src={dashboardImage}
                        />
                        Dashboard
                    </div>
                    <div
                        className={`${styles.transactions} ${rightPage === 'transactions' ? styles.bold : ''
                            }`}
                        onClick={() => setRightPage('transactions')}
                    >
                        <img
                            className={styles.Icon}
                            alt=""
                            src={transactionImage}
                        />
                        Transactions
                    </div>
                    <div
                        className={`${styles.schedules} ${rightPage === 'schedules' ? styles.bold : ''
                            }`}
                        onClick={() => setRightPage('schedules')}
                    >
                        <img
                            className={styles.Icon}
                            alt=""
                            src={scheduleImage}
                        />
                        Schedules
                    </div>
                    <div
                        className={`${styles.users} ${rightPage === 'users' ? styles.bold : ''
                            }`}
                        onClick={() => setRightPage('users')}
                    ><img
                            className={styles.Icon}
                            alt=""
                            src={userImage}
                        />
                        Users
                    </div>
                    <div
                        className={`${styles.settings} ${rightPage === 'settings' ? styles.bold : ''
                            }`}
                        onClick={() => setRightPage('settings')}
                    ><img
                            className={styles.Icon}
                            alt=""
                            src={settingImage}
                        />
                        Settings
                    </div>

                    <div
                        className={`${styles.help} ${rightPage === 'help' ? styles.bold : ''
                            }`}
                        onClick={() => setRightPage('help')}
                    >
                        Help
                    </div>
                    <div
                        className={`${styles.contactUs} ${rightPage === 'contact us' ? styles.bold : ''
                            }`}
                        onClick={() => setRightPage('contact us')}
                    >
                        Contact Us
                    </div>

                </div>

                <div className={styles2.rightSide}>

                    <div className={styles2.header}>
                        <b className={styles2.dashboard2}>{rightPage}</b>
                        <input
                            className={styles2.searchBar}
                            type="text"
                            placeholder="Search..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <img
                            className={styles.Icon2}
                            alt=""
                            src={searchImage}
                            onClick={handleSearch}
                        />
                        <img
                            className={styles.Icon2}
                            alt=""
                            src={bellImage}
                        />
                        <img
                            className={styles.Icon3}
                            alt=""
                            src={myImage}
                        />
                        {/* <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
                         <img className={styles.vectorIcon6} alt="" src="/vector5.svg" /> */}
                    </div>

                    {rightPage === 'dashboard' && <Dashboard />}
                    {rightPage === 'transactions' && <Transactions />}
                    {rightPage === 'schedules' && <Schedules />}
                    {rightPage === 'users' && <Users />}
                    {rightPage === 'settings' && <Settings />}
                    {rightPage === 'help' && <Help />}
                    {rightPage === 'contact us' && <ContactUs />}


                </div>
                {/* <div className={styles.RightExtra}></div> */}
            </div>
        </>
    )
}
export { Home2 };