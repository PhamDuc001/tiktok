import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import images from '~/assets/image/index';

function Image({ src, alt, fallBack: fBack, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');
    const handleErrorImg = () => {
        setFallBack(fBack ? fBack : images.noImage);
    };
    return <img ref={ref} alt={alt} src={fallBack || src} {...props} onError={handleErrorImg} />;
}
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallBack: PropTypes.string,
};
export default forwardRef(Image);
