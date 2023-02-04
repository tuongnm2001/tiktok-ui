import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from './AccountPreview.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_100x100.jpeg?x-expires=1675674000&x-signature=q%2BlY%2BGqrojGUGr5skqCNFXKn7dw%3D" alt="" />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </header>

            <div className={cx('body')}>
                <p className={cx('nickname')} >
                    <strong>anv2102</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>

                <p className={cx('name')}>Nguyen Van A</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;