import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeIconActive, LiveIconActive, UserGroupIconActive } from '~/components/Icons';
import { UserGroupIcon } from '~/components/Icons';
import { LiveIcon } from '~/components/Icons';
import config from '~/config';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive />}
                    to={config.routes.home}
                />
                <MenuItem
                    title="Đang Follow"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                    to={config.routes.following}
                />
                <MenuItem title="Live" icon={<LiveIcon />} activeIcon={<LiveIconActive />} to={config.routes.live} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
