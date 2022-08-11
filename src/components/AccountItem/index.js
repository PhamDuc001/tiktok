import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`@${data.nickname}`}>
            <div className={cx('wrapper')}>
                <Image src={data.avatar} className={cx('avatar')} alt={data.full_name} />

                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.full_name}</span>

                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </h4>
                    <span className={cx('username')}> {data.nickname}</span>
                </div>
            </div>
        </Link>
    );
}
export default AccountItem;
