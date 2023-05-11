import styles from "./NavBar.css"
const NavBar = () => {
    return (
        <>
            {/* <div className={styles.dashboard}>
                <div className={styles.navigation}> */}
                    <div className={styles.header}>
                        {/* <b className={styles.dashboard2}>Dashboard</b> */}
                        <input
                            className={styles.searchBar}
                            type="text"
                            placeholder="Search..."
                        />
                    </div>
                        {/* <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
                        <img className={styles.vectorIcon6} alt="" src="/vector5.svg" />
                    </div>
                </div>
            </div> */}
        </>
    )
};
export { NavBar };