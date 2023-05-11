import styles from "./SignIn.module.css";
const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <div className={styles.rightSide} />
      <div className={styles.leftSide} />
      <b className={styles.board}>Board.</b>
      <form className={styles.loginForm}>
        <div className={styles.card}>
          <div className={styles.card1} />
        </div>
        <input className={styles.inputField} type="text" />
        <input className={styles.input} type="text" />
        <div className={styles.div}>••••••••</div>
        <div className={styles.loginFormChild} />
        <button className={styles.buttonSignIn}>
          <div className={styles.buttonPrimary}>
            <div className={styles.buttonPrimary1} />
          </div>
          <b className={styles.signIn1}>Sign In</b>
        </button>
        <div className={styles.emailAddress}>Email address</div>
        <div className={styles.johndoegmailcom}>johndoe@gmail.com</div>
        <div className={styles.password}>Password</div>
        <div className={styles.forgotPassword}>Forgot password?</div>
        <div className={styles.dontHaveAnContainer}>
          <span className={styles.dontHaveAn}>{`Don't have an account? `}</span>
          <span className={styles.registerHere}>Register here</span>
        </div>
      </form>
      <button className={styles.googleSignIn}>
        <div className={styles.white}>
          <div className={styles.button} />
        </div>
        <div className={styles.signInWith}>Sign in with Google</div>
        <img className={styles.googleIcon1} alt="" src="/googleicon-1.svg" />
      </button>
      <button className={styles.appleSignIn}>
        <div className={styles.white}>
          <div className={styles.button} />
        </div>
        <div className={styles.signInWith1}>Sign in with Apple</div>
        <img className={styles.apple1Icon} alt="" src="/apple-1.svg" />
      </button>
      <b className={styles.signIn2}>Sign In</b>
      <div className={styles.signInTo}>Sign in to your account</div>
    </div>
  );
};
export { SignIn };
