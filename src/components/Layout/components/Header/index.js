import classNames from 'classnames/bind';
import style from './Header.module.scss'
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button'
import {
    faEllipsisVertical,
    faEarthAsia,
    faKeyboard,
    faCircleQuestion,
    faCloudUpload,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faMessage,
    faInbox
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import Image from '~/components/image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';
// import { config } from '@fortawesome/fontawesome-svg-core';
import config from '~/config';

const cx = classNames.bind(style)

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },

                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback'
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {

    const currentUser = true;



    //handle logic
    const handleMenuOnchange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change language
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoa'
        },

        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },

        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEM,

        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Logout',
            to: '/logout',
            separate: true
        },
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('content')}>
            <div className={cx('logo')}>
                <Link to={config.routes.home}><img src={images.logo} alt='TikTok' /></Link>
            </div>

            {/**Search */}
            <Search />

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 50]} content='Upload video' placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button>
                        </Tippy>

                        <Tippy delay={[0, 50]} content='Message' placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </Tippy>

                        <Tippy delay={[0, 50]} content='Inbox' placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faInbox} />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text >Upload</Button>
                        <Button primary>Login</Button>

                    </>
                )}
                <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuOnchange}>
                    {currentUser ? (
                        <Image src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2c924123aeea95033f2be00f6f6ee5e1~c5_100x100.jpeg?x-expires=1675414800&x-signature=jUaUHmIbSlnH18NzMLJBPGSGedc%3D'
                            className={cx('user-avatar')} alt='Nguyen Van A' />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}

                </Menu>
            </div>
        </div>
    </header>;
}

export default Header;