import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import Button from "~/components/Button";
import routesConfig from "~/config/routes";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function Header() {
    let currentUser = true;
    const [isScrolling, setIsScrolling] = useState(false);
    const timer = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const headerHeight = 36;

            if (scrollTop > headerHeight) {
                setIsScrolling(true); // Hides the header
            } else {
                setIsScrolling(false); // Shows the header
            }

            clearTimeout(timer.current);
            timer.current = setTimeout(() => {
                setIsScrolling(false); // Show the header after scrolling stops
            }, 500); // Adjust the delay to 3 seconds
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer.current); // Clear the timer on component unmount
        };
    }, []);

    return (
        <header className={cx("wrapper", { hidden: isScrolling })}>
            <Link to={routesConfig.home} className={cx("logo")}>
                <div className={cx("logoName")}>2T-EmploymentSolutions</div>
            </Link>
            <nav className={cx("menuBar")}>
                <Link
                    to={routesConfig.home}
                    className={cx("menuBarItem")}
                    href="/"
                >
                    Home
                </Link>
                <Link
                    to={routesConfig.categories}
                    className={cx("menuBarItem")}
                    href="/"
                >
                    Categories
                </Link>
                <Link
                    to={routesConfig.search}
                    className={cx("menuBarItem")}
                    href="/"
                >
                    Find Jobs
                </Link>

                <Link
                    to={routesConfig.post}
                    className={cx("menuBarItem")}
                    href="/"
                >
                    Post Jobs
                </Link>

                <Link
                    to={routesConfig.apply}
                    className={cx("menuBarItem")}
                    href="/"
                >
                    Apply
                </Link>
                <Link
                    to={routesConfig.home}
                    className={cx("menuBarItem")}
                    href="/"
                >
                    About
                </Link>
            </nav>
            <div className={cx("groupButton")}>
                {currentUser ? (
                    <>
                        <Image
                            className={cx("user-avatar")}
                            src="https://via.placeholder.com/150"
                        />
                    </>
                ) : (
                    <>
                        <Button className={cx("groupButtonSignUp")}>
                            Sign Up
                        </Button>

                        <Button className={cx("groupButtonLogin")} outline>
                            Login
                        </Button>
                    </>
                )}
            </div>
        </header>
    );
}
export default Header;
