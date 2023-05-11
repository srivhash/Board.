import styles from "./Home2.leftSide.module.css"
import styles2 from "./Home2.rightSide.module.css";
import { PieChart } from "react-minimal-pie-chart";
import React from 'react';
import { Charts } from "./Chart.js";
import transactionImage from "../src/tags.png";
import scheduleImage from "../src/calendar.png";
import settingImage from "../src/settings.png";
import userImage from "../src/profile.png";
import bellImage from "../src/bell.png";
import myImage from "../src/myImage.png";
import searchImage from "../src/Search.png";

const Dashboard = () => {
    let pie_data = [
        { title: "One", value: 1, color: "#FFC074" },
        { title: "Two", value: 2, color: "#A2D2FF" },
        { title: "Three", value: 3, color: "#FF9292" },
    ];

    return (<>
        <div>
            <div className={styles2.totalTransactions}>
                <div className={styles2.card}>
                    <div className={styles2.card1} />
                </div>
                <img
                    className={styles.Icon21}
                    alt=""
                    src={scheduleImage}
                />
                <div className={styles2.smallnum}>Total Transactions</div>
                <b className={styles2.lrgnum}>1,520</b>
            </div>
            <div className={styles2.totalRevenues}>
                <div className={styles2.card}>
                    <div className={styles2.card3} />
                </div>
                <img
                    className={styles.Icon21}
                    alt=""
                    src={settingImage}
                />
                <div className={styles2.smallnum}>Total Revenues</div>
                <b className={styles2.lrgnum}>$2,129,430</b>
                <img className={styles2.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles2.totalLikes}>
                <div className={styles2.card}>
                    <div className={styles2.card5} />
                </div>
                <img
                    className={styles.Icon21}
                    alt=""
                    src={bellImage}
                />
                <div className={styles2.smallnum}>Total Likes</div>
                <b className={styles2.lrgnum}>9,721</b>
                <img className={styles2.vectorIcon1} alt="" src="/vector1.svg" />
            </div>
            <div className={styles2.totalUsers}>
                <div className={styles2.card}>
                    <div className={styles2.card7} />
                </div>
                <img
                    className={styles.Icon21}
                    alt=""
                    src={userImage}
                />
                <img className={styles2.vectorIcon2} alt="" src="/vector2.svg" />
                <div className={styles2.smallnum}>Total Users</div>
                <b className={styles2.lrgnum}>892</b>
            </div>
        </div>

        <div>
            <div className={styles2.card11}>

                <div className={styles2.mayJune1}>May - June 2021</div>
                <PieChart className={styles2.pieChartIcon}
                    center={[50, 50]}
                    data={pie_data}
                    lengthAngle={360}
                    paddingAngle={0}
                    radius={47}
                    startAngle={-90}
                    viewBoxSize={[100, 100]}
                />

                <div className={styles2.l}>
                    {/* <img className={styles2.child} alt="" src="/ellipse-6.svg" /> */}
                    <span className={styles2.graphl}>Basic Tees</span>
                    <div className={styles2.graphnum}>55%</div>
                </div>

                {/* <img className={styles2.vectorIcon4} alt="" src="/vector3.svg" /> */}
                <div className={styles2.l2}>
                    {/* <img className={styles2.child} alt="" src="/ellipse-61.svg" /> */}
                    <span className={styles2.graphl}>Custom Short Pants</span>
                    <div className={styles2.graphnum}>31%</div>
                </div>
                <div className={styles2.l3}>
                    {/* <img className={styles2.child} alt="" src="/ellipse-62.svg" /> */}
                    <span className={styles2.graphl}>Super Hoodies</span>
                    <div className={styles2.graphnum}>14%</div>
                </div>
                <span className={styles2.topProducts}>Top products</span>

            </div>
        </div>

        <div>
            <div className={styles2.activitiesCard}>

                <div className={styles2.activities}>Activities</div>
                <div className={styles2.actlabels}>Guest</div>
                <div className={styles2.actlabels}>User</div>
                {/* <div > */}
                <div className={styles2.mayJune2}>May - June 2021</div>
                {/* <Line options={options} data={line_data} /> */}
                <div className={styles2.linegraph}>
                    <Charts />
                </div>
                {/* <img className={styles2.vectorIcon3} alt="" src="/vector3.svg" /> */}
                {/* </div> */}

            </div>


        </div>

        <div >
            <div className={styles2.card12}>
                <div className={styles2.relpos}>

                    <span className={styles2.todaysSchedule}>Today's schedule</span>
                    <div className={styles2.seeall}>See All</div>
                    <p></p>

                    <div className={styles2.task}>
                        <span className={styles2.heading}>
                            Meeting with suppliers from Kuta Bali
                        </span>
                        <div className={styles2.time}>14.00-15.00</div>
                        <div
                            className={styles2.location}
                        >{`at Sunset Road, Kuta, Bali `}</div>
                        {/* <div className={styles2.groupChild3} /> */}
                    </div>

                    {/* <span className={styles2.todaysSchedule}>Today's schedule</span> */}
                    <div className={styles2.task}>
                        <span className={styles2.heading}>
                            Check operation at Giga Factory 1
                        </span>
                        <div className={styles2.time}>18.00-20.00</div>
                        <div
                            className={styles2.location}
                        >{`at Central Jakarta `}</div>
                        {/* <div className={styles2.groupChild3} /> */}
                    </div>
                </div>


                {/* <img className={styles2.vectorIcon5} alt="" src="/vector4.svg" /> */}

            </div>
        </div>

    </>)
};
export { Dashboard };