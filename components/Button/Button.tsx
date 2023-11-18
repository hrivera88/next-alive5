import React from 'react';

// Define Button Props

interface ButtonProps { 
    text?: string;
    icon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    style?: React.CSSProperties;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick, style, className, ...props }) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
     }
    return (
        <button onClick={handleClick} style={style} className={`${className ?? ''}`} {...props}>
            {icon && <span className='button-icon'>{icon}</span>}
            {text && <span className='button-text'>{text}</span> }
        </button>
    );
}
 
export default Button;