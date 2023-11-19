import React from 'react';

// Define Button Props

interface ButtonProps {
	text?: string;
	icon?: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	style?: React.CSSProperties;
	className?: string;
	isLoading?: boolean;
	loader?: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	text,
	icon,
	onClick,
	style,
	className,
	isLoading,
	loader,
	disabled,
	type = 'button',
	...props
}) => {
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onClick?.(event);
	};
	return (
		<button
			onClick={handleClick}
			style={style}
			disabled={disabled}
			type={type}
			className={`${className ?? ''}`}
			{...props}
		>
			{!isLoading && icon && <span className="button-icon">{icon}</span>}
			{!isLoading && text && <span className="button-text">{text}</span>}
			{isLoading && <span className="button-loader block">{loader}</span>}
		</button>
	);
};

export default Button;
