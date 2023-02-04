import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_100x100.jpeg?x-expires=1675674000&x-signature=q%2BlY%2BGqrojGUGr5skqCNFXKn7dw%3D'
                alt=''
            />

            <div className={cx('item-info')}>
                <p className={cx('nickname')} >
                    <strong>anv2102</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>

                <p className={cx('name')}>Nguyen Van A</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {

}

export default AccountItem;