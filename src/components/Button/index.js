import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    to , 
    href , 
    primary=false, 
    outline = false ,
    small=false,
    large=false,
    text=false, 
    disabled=false,
    rounded = false,
    children , 
    onClick,
    className,
    leftIcon,
    rightIcon,
    ...passProps}) {

    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }

    //remove event listener when disable
    if(disabled){
        Object.keys(props).forEach((key)=>{
            if(key.startsWith('on')&& typeof props[key]=== 'function'){
                delete props[key];
            }
        })
    }

    if(to){
        props.to = to
        Comp= Link
    }else if(href){
        props.href = href
        Comp='a'
    }

    let classes = cx('wrapper' , {
        primary ,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]:className,
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
           
        </Comp>
    );
}

export default Button
