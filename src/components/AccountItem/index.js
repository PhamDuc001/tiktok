import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem(params) {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://i.pinimg.com/736x/4a/4c/29/4a4c29807499a1a8085e9bde536a570a.jpg"
                className={cx('avatar')}
                alt="Acount"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Pham Trung Duc</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}> Duc Pham</span>
            </div>
        </div>
    );
}
export default AccountItem;
