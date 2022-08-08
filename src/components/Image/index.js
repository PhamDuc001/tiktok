import { forwardRef, useState } from 'react';

import images from '~/assets/image/index';

function Image({ src, fallBack: fBack, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');
    const handleErrorImg = () => {
        setFallBack(fBack ? fBack : images.noImage);
    };
    return <img ref={ref} src={fallBack || src} {...props} onError={handleErrorImg} />;
}

export default forwardRef(Image);
