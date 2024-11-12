import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Tippy from '@tippyjs/react';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import các biểu tượng từ react-icons


import styles from "./Header.module.scss";
import Button from "~/components/Button";
import routesConfig from "~/config/routes";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function Header() {
    let currentUser = true;
    const [isScrolling, setIsScrolling] = useState(false);
    const timer = useRef(null);

    const renderMenu = () => (
        <div className={cx('menu')}>
          <Link to={routesConfig.profile} className={cx('menuItem')}>
            <FaUser className={cx('icon')} />
            Profile
          </Link>
          <Link to={routesConfig.setting} className={cx('menuItem')}>
            <FaCog className={cx('icon')} />
            Settings
          </Link>
          <Link to="/logout" className={cx('menuItem', 'logout')}>
            <FaSignOutAlt className={cx('icon')} />
            Logout
          </Link>

        </div>
      );

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const headerHeight = 36;

            if (scrollTop > headerHeight) {
                setIsScrolling(true); 
            } else {
                setIsScrolling(false); 
            }

            clearTimeout(timer.current);
            timer.current = setTimeout(() => {
                setIsScrolling(false); 
            }, 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer.current); 
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
                        {
                             <Tippy content={renderMenu()} interactive={true} trigger="click" placement="bottom" className="tipppy"
                             >
                             <Image
                               className={cx('user-avatar')}
                               src="https://via.placeholder.com/150"
                             />
                            </Tippy>
                        }
                        
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
