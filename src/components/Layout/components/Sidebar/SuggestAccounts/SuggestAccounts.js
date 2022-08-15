import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestAccounts.module.scss';
import SgAccountItem from './SgAccountItem';

const cx = classNames.bind(styles);
function SuggestAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <SgAccountItem />

            <p className={cx('more-btn')}>See All</p>
        </div>
    );
}
SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestAccounts;
