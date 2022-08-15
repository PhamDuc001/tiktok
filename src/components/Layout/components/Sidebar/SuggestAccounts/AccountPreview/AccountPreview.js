import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1660701600&x-signature=kp0y6zz5sYUV1j0Qe6MeLugEEH8%3D"
                    alt=""
                    className={cx('avatar-preview')}
                />
                <Button primary className={cx('follow')}>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>Ducpt2k1</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('name')}>Pham Trung Duc</p>
                <p className={cx('analytic')}>
                    <strong className={cx('value')}>8.7M</strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>300.5M</strong>
                    <span className={cx('label')}>Like</span>
                </p>
            </div>
        </div>
    );
}
AccountPreview.propTypes = {};
export default AccountPreview;
