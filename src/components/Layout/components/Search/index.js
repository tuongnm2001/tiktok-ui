import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/hooks';
import * as searchService from '~/apiService/searchService'

const cx = classNames.bind(styles)

function Search() {

    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debounce = useDebounce(searchValue, 500)

    const inputRef = useRef()

    useEffect(() => {

        if (!searchValue.trim()) {
            setSearchResult([])
            return
        }
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounce);
            setSearchResult(result)

            setLoading(false);
        }

        fetchApi()
    }, [debounce])

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([])
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }



    return (
        <div>
            <HeadlessTippy
                interactive
                appendTo={() => document.body}
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PropperWrapper>
                            <h4 className={cx("search-title")}>
                                Accounts
                            </h4>
                            {searchResult.map((item, index) => (
                                <AccountItem key={item.id} data={item} />
                            ))}
                        </PropperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >

                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue} onChange={handleChange}
                        placeholder='Search accounts and videos' spellCheck={false}
                        onFocus={() => setShowResult(true)}
                    />

                    {
                        !!searchValue && !loading && (
                            <button className={cx('clear')}
                                onClick={handleClear} >
                                {/*Clear */}
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )
                    }


                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}


                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        {/*Search */}
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>

                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;