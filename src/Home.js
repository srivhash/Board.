import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.navigation}>
        <div className={styles.leftSide} />
        <div className={styles.help}>Help</div>
        <div className={styles.contactUs}>Contact Us</div>
        <div className={styles.settings}>Settings</div>
        <div className={styles.users}>Users</div>
        <div className={styles.schedules}>Schedules</div>
        <div className={styles.transactions}>Transactions</div>
        <b className={styles.dashboard1}>Dashboard</b>
        <img
          className={styles.transactionIcon}
          alt=""
          src="/transaction-icon.svg"
        />
        <img className={styles.scheduleIcon} alt="" src="/schedule-icon.svg" />
        <img
          className={styles.dashboardIcon}
          alt=""
          src="/dashboard-icon.svg"
        />
        <img className={styles.settingIcon} alt="" src="/setting-icon.svg" />
        <img className={styles.userIcon} alt="" src="/user-icon.svg" />
        <b className={styles.board}>Board.</b>
      </div>
      <div className={styles.totalTransactions}>
        <div className={styles.card}>
          <div className={styles.card1} />
        </div>
        <div className={styles.totalTransactions1}>Total Transactions</div>
        <b className={styles.b}>1,520</b>
      </div>
      <div className={styles.totalRevenues}>
        <div className={styles.card}>
          <div className={styles.card3} />
        </div>
        <div className={styles.totalRevenues1}>Total Revenues</div>
        <b className={styles.b1}>$2,129,430</b>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.totalLikes}>
        <div className={styles.card}>
          <div className={styles.card5} />
        </div>
        <div className={styles.totalLikes1}>Total Likes</div>
        <b className={styles.b2}>9,721</b>
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      </div>
      <div className={styles.totalUsers}>
        <div className={styles.card}>
          <div className={styles.card7} />
        </div>
        <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        <div className={styles.totalUsers1}>Total Users</div>
        <b className={styles.b3}>892</b>
      </div>
      <div className={styles.activitiesCard}>
        <div className={styles.card8}>
          <div className={styles.card9} />
        </div>
        <div className={styles.guest}>Guest</div>
        <div className={styles.user}>User</div>
        <b className={styles.activities}>Activities</b>
        <div className={styles.mayJune2021Parent}>
          <div className={styles.mayJune}>May - June 2021</div>
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
        </div>
        <div className={styles.chart}>
          <div className={styles.parent}>
            <div className={styles.div}>500</div>
            <div className={styles.groupChild} />
          </div>
          <div className={styles.group}>
            <div className={styles.div}>300</div>
            <div className={styles.groupChild} />
          </div>
          <div className={styles.container}>
            <div className={styles.div}>400</div>
            <div className={styles.groupChild} />
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.div}>200</div>
            <div className={styles.groupChild} />
          </div>
          <div className={styles.parent1}>
            <div className={styles.div}>100</div>
            <div className={styles.groupChild} />
          </div>
          <div className={styles.parent2}>
            <div className={styles.div5}>0</div>
            <div className={styles.groupChild2} />
          </div>
        </div>
        <img
          className={styles.activitiesCardChild}
          alt=""
          src="/ellipse-3.svg"
        />
        <img
          className={styles.activitiesCardItem}
          alt=""
          src="/ellipse-4.svg"
        />
      </div>
      <div className={styles.topProductsCard}>
        <div className={styles.card10}>
          <div className={styles.card9} />
        </div>
        <div className={styles.div6}>
          <img className={styles.child} alt="" src="/ellipse-6.svg" />
          <b className={styles.basicTees}>Basic Tees</b>
          <div className={styles.div7}>55%</div>
        </div>
        <div className={styles.mayJune2021Wrapper}>
          <div className={styles.mayJune1}>May - June 2021</div>
        </div>
        <img className={styles.vectorIcon4} alt="" src="/vector3.svg" />
        <div className={styles.div8}>
          <img className={styles.child} alt="" src="/ellipse-61.svg" />
          <b className={styles.basicTees}>Custom Short Pants</b>
          <div className={styles.div7}>31%</div>
        </div>
        <div className={styles.div10}>
          <img className={styles.child} alt="" src="/ellipse-62.svg" />
          <b className={styles.basicTees}>Super Hoodies</b>
          <div className={styles.div7}>14%</div>
        </div>
        <b className={styles.topProducts}>Top products</b>
        <img className={styles.pieChartIcon} alt="" src="/pie-chart.svg" />
      </div>
      <div className={styles.schedulesCard}>
        <div className={styles.card10}>
          <div className={styles.card9} />
        </div>
        <b className={styles.todaysSchedule}>Today's schedule</b>
        <div className={styles.meetingWithSuppliersFromKuParent}>
          <b className={styles.meetingWithSuppliers}>
            Meeting with suppliers from Kuta Bali
          </b>
          <div className={styles.div12}>14.00-15.00</div>
          <div
            className={styles.atSunsetRoad}
          >{`at Sunset Road, Kuta, Bali `}</div>
          <div className={styles.groupChild3} />
        </div>
        <div className={styles.seeAll}>See All</div>
        <img className={styles.vectorIcon5} alt="" src="/vector4.svg" />
        <div className={styles.checkOperationAtGigaFactorParent}>
          <b className={styles.meetingWithSuppliers}>
            Check operation at Giga Factory 1
          </b>
          <div className={styles.div12}>18.00-20.00</div>
          <div className={styles.atSunsetRoad}>{`at Central Jakarta `}</div>
          <div className={styles.groupChild4} />
        </div>
      </div>
      <div className={styles.chartWeeks}>
        <div className={styles.week1}>Week 1</div>
        <div className={styles.week2}>Week 2</div>
        <div className={styles.week3}>Week 3</div>
        <div className={styles.week4}>Week 4</div>
      </div>
      <img className={styles.lineChart2Icon} alt="" src="/line-chart-2.svg" />
      <img className={styles.lineChart1Icon} alt="" src="/line-chart-1.svg" />
      <img
        className={styles.totalTransactionsIcon}
        alt=""
        src="/total-transactions-icon.svg"
      />
      <div className={styles.header}>
        <b className={styles.dashboard2}>Dashboard</b>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search..."
        />
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
        <img className={styles.vectorIcon6} alt="" src="/vector5.svg" />
      </div>
    </div>
  );
};

export {Home};
