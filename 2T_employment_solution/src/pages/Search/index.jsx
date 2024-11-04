import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";
import * as searchServices from '~/apiServices/searchService';
import styles from "./Search.module.scss";
import { useEffect, useState } from "react";
import Image from "~/components/Image";
import Search from "~/components/Search";

const cx = classNames.bind(styles);

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchResults() {
    const [searchResult, setSearchResult] = useState([]);
    const query = useQuery();
    const searchValue = query.get('query');

    useEffect(() => {
        if (!searchValue) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            try {
                const result = await searchServices.search(searchValue);
                setSearchResult(result);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };
        fetchApi();
    }, [searchValue]);

    const calculateDaysFrom = (dateString) => {
        const startDate = new Date(dateString);
        const currentDate = new Date();
        const timeDifference = currentDate - startDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference;
    };

    return (
        <div className={cx("searchResults")}>   
            <div className={cx("left")}><Search /></div>
            <div className={(cx("groupCard"))}>
                {searchResult.length > 0 ? (
                    searchResult.map((user) => (
                        <div key={user.id} className={cx("userItem")}>
                            <div className={cx("header")}>
                                <Image
                                    src={user.avatar}
                                    alt={user.username}
                                    className={cx("headerAvatar")}
                                />
                                <div className={cx("headerName")}>
                                    <div className={cx("username")}>{user.last_name}</div>
                                    <div className={cx("address")}>{user.nickname}</div>
                                </div>
                            </div>
                            <div className={cx("content")}>
                                <div className={cx("title")}>{user.full_name}</div>
                                <div className={cx("description")}>
                                    {user.followers_count} followers, {user.bio}, {user.followings_count} followings
                                </div>
                            </div>
                            <div className={cx("footer")}>
                                {calculateDaysFrom(user.created_at)} days ago
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}

export default SearchResults;