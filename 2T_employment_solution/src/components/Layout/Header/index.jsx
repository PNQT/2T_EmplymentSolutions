import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("logo")}>
        <div className={cx("logoName")}>2T-EmploymentSolutions</div>
      </div>
      <nav className={cx("menuBar")}>
        <a className={cx("menuBarItem")} href="/">Home</a>
        <a className={cx("menuBarItem")} href="/">Categories</a>
        <a className={cx("menuBarItem")} href="/">Find Jobs</a>
        <a className={cx("menuBarItem")} href="/">Post Jobs</a>
        <a className={cx("menuBarItem")} href="/">Apply</a>
        <a className={cx("menuBarItem")} href="/">About</a>
      </nav>
      <div className={cx("groupButton")}>
        <Button className={cx("groupButtonSignUp")} >Sign Up</Button>
        <Button className={cx("groupButtonLogin ")} outline>Login</Button>
      </div>
    </header>
  );
}

export default Header;