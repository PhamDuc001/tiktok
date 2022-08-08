import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsis,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faQuestionCircle,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/image/index';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button/index';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, SearchIcon, UpLoadIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: [
            {
                code: 'en',
                title: 'English',
            },
            {
                code: 'vi',
                title: 'Vietnamese',
            },
        ],
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts  ',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    // useEffect(() => {
    //     setSearchResult([1, 2, 3]);
    // }, []);
    const handleOnChange = (menuItem) => {
        console.log(menuItem);
    };
    const currentUser = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'LogOut',
            to: '/logout',
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt="Logo Tiktok" />
                </div>
                <HeadlessTippy
                    visible={searchResult.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search account and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>

                {/* ----------action--------- */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 500]} content="Upload video" backgroundColor="black">
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                                    <UpLoadIcon />
                                </button>
                            </Tippy>
                            <button className={cx('action-btn')}>
                                {/* <FontAwesomeIcon icon={faMessage} /> */}
                                <MessageIcon />
                            </button>
                            <button className={cx('action-btn')}>
                                {/* <FontAwesomeIcon icon={faMessage} /> */}
                                <InboxIcon />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text>Up Load</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={(menuItem) => {
                            console.log(menuItem);
                        }}
                    >
                        {currentUser ? (
                            <Image
                                src="htp://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
                                className={cx('user-avatar')}
                                alt="PhamDuc"
                                fallBack="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
