import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import Button from "~/components/Button";
import styles from "./Search.module.scss";
import { useState, useRef } from "react";

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchValue.trim()) {
            return;
        }
        navigate(`/search?query=${searchValue}`);
    };

    return (
        <div className={cx("findAndApplySearch")}>
            <input
                ref={inputRef}
                className={cx("findAndApplySearchInput")}
                type="text"
                placeholder="Search for users"
                value={searchValue}
                onChange={handleChange}
            />
            <Button
                className={cx("findAndApplySearchButton")}
                onClick={handleSubmit}
            >
                Search
            </Button>
        </div>
    );
}

export default Search;