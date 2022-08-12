import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);
function Search() {
    const inputRef = useRef();
    const [searchInput, setSearchInput] = useState();
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    useEffect(() => {
        // setSearchResult([1, 2, 3]);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
            });
    }, [searchInput]);
    console.log(searchResult);
    const handleClear = () => {
        inputRef.current.value = '';
        inputRef.current.focus();
        // setSearchInput('');
        // setSearchResult([]);
    };
    const handleOutside = () => {
        setShowResult(false);
    };
    return (
        <HeadlessTippy
            visible={showResult && searchResult.length > 0}
            interactive={true}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searchResult.map((result) => {
                            <AccountItem />;
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleOutside}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchInput}
                    type="text"
                    placeholder="Search account and videos"
                    spellCheck={false}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                    onFocus={(e) => setShowResult(true)}
                />
                {searchInput && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
