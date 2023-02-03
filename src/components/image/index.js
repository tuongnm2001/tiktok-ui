import PropTypes from 'prop-types';
import classNames from "classnames";
import { useState, forwardRef } from "react";
import image from '~/assets/images'
import styles from './Image.module.scss'

const Image = forwardRef(({ src, alt, ...props }, ref) => {

    const [fallBack, setFallBack] = useState('')

    const handleError = () => {
        setFallBack(image.noImage)
    }

    return (
        <img className={classNames(styles.wrapper, classNames)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError} />
    );
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}

export default Image;