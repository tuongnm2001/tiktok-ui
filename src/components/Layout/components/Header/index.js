import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss'
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark , faSpinner ,faMagnifyingGlass, faSignIn, faEllipsisVertical, faEarthAsia, faQuestionCircle, faKeyboard, faCircle, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(style)

const MENU_ITEM = [
    {
        icon : <FontAwesomeIcon icon={faEarthAsia}/>,
        title:'English'
    },

    {
        icon : <FontAwesomeIcon icon={faCircleQuestion}/>,
        title:'Feedback and Help',
        to:'/feedback'
    },

    {
        icon : <FontAwesomeIcon icon={faKeyboard}/>,
        title:'Keyboard shortcuts',
    },
];

function Header() {

    const [searchResult , setSearchResult] = useState([])

    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([])
        },0)
    })

    return <header className={cx('wrapper')}>
        <div className={cx('content')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='TikTok'/>
            </div>

            <Tippy interactive visible={searchResult.length > 0 }
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PropperWrapper>
                            <h4 className={cx("search-title")}>
                                Accounts
                            </h4>
                            <AccountItem/>
                            <AccountItem/>
                            <AccountItem/>
                        </PropperWrapper>
                    </div>
                )}> 

            <div className={cx('search')}>
                <input placeholder='Search accounts and videos' spellCheck={false}/>
                <button className={cx('clear')}>
                    {/*Clear */}
                    <FontAwesomeIcon icon={faCircleXmark}/>
                </button>
                
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>

               
                    <button className={cx('search-btn')}>
                        {/*Search */}
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                
                </div>
            </Tippy> 

            <div className={cx('actions')}>
                <Button text >Upload</Button>
                <Button primary>Login</Button>

                <Menu items={MENU_ITEM}>
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </button>
                </Menu>
            </div>
        </div>
    </header>;
}

export default Header;