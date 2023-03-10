import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Wrapper as PropperWrapper } from '~/components/Popper'
import Header from './Header';
import styles from './Menu.module.scss'
import MenuItem from './MenuItem';
import Image from '~/components/image';

const cx = classNames.bind(styles)

const defaultFn = () => {

}

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }} />
        })
    }

    return (
        <Tippy
            offset={[12, 8]}
            interactive
            hideOnClick={hideOnClick}
            placement='bottom-end'
            delay={[0, 500]}
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={current.title} onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PropperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu;