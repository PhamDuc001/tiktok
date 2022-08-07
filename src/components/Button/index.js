import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disable = false,
    rounded = false,
    children,
    className = false,
    leftIcon,
    onClick,
    ...pass
}) {
    let Comp = 'button';
    const props = {
        onClick: onClick,
        ...pass,
    };
    if (disable) {
        Object.keys(props).forEach((keyProp) => {
            if (keyProp.startsWith('on') && typeof props[keyProp] === 'function') {
                delete props[keyProp];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primaryy: primary,
        outline: outline,
        small: small,
        large,
        text: text,
        disable: disable,
        rounded: rounded,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}> {leftIcon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
