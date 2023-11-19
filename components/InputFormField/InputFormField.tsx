import React, { useState } from 'react';
import VisibilityIcon from '@/public/icons/visibilityIcon.svg';
import VisibilityOffIcon from '@/public/icons/visibilityOffIcon.svg';
import Button from '../Button/Button';

interface InputFormFieldProps {
	label: string;
	icon?: React.ReactNode;
	error?: string;
	formFieldContainerCSS?: string;
	inputContainerCSS?: string;
	type:
		| 'text'
		| 'email'
		| 'password'
		| 'search'
		| 'tel'
		| 'url'
		| 'number'
		| 'range'
		| 'datetime-local'
		| 'month'
		| 'time'
		| 'week'
		| 'date'
		| 'color';
	role?: string;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	style?: React.CSSProperties;
	id: string;
	value?: string;
	invalid?: boolean;
	name?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFormField: React.FC<InputFormFieldProps> = ({
	name,
	invalid,
	onChange,
	value = '',
	icon,
	label,
	error,
	formFieldContainerCSS,
	type,
	role,
	placeholder,
	inputContainerCSS,
	required,
	disabled,
	style,
	id,
	...props
}) => {
	const [inputValue, setInputValue] = useState('');
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};
	// Determine the actual type of the input field
	const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

	// Conditional Form Container Styles ( Error, Default )
	const defaultFormContainerStyles = !error ? 'text-grey' : '';
	const errorFormContainerStyles = error ? 'text-red-600' : '';
	// Conditional Input Container Styles ( Error, Disabled, Default )
	const errorInputContainerStyles = error
		? 'border-b border-solid border-red-600 text-red-600'
		: '';
	const disabledStyles = disabled ? 'cursor-not-allowed opacity-75' : '';
	const defaultInputContainerStyles = !error
		? 'border-b border-grey text-grey'
		: '';

	return (
		<div
			className={`flex flex-col ${
				formFieldContainerCSS ?? ''
			} ${defaultFormContainerStyles} ${errorFormContainerStyles}`}
		>
			<label className="mb-1 text-base" htmlFor={id}>
				{label}:{required && <span className="text-red-600">&nbsp;*</span>}
			</label>
			<div
				className={`${
					inputContainerCSS ?? ''
				} ${errorInputContainerStyles} ${defaultInputContainerStyles} ${disabledStyles} flex flex-row w-full items-center p-2 bg-gray-200 mb-1`}
			>
				{icon && <span className="input-icon mr-2">{icon}</span>}
				<input
					type={inputType}
					placeholder={placeholder}
					value={inputValue}
					id={id}
					onChange={handleChange}
					aria-invalid={invalid}
					name={name}
					role={role}
					aria-required={required}
					disabled={disabled}
					className={`bg-transparent border-0 focus-visible:outline-none w-full text-current text-base ${disabledStyles}`}
					{...props}
				/>
				{type === 'password' && (
					<Button
						onClick={togglePasswordVisibility}
						disabled={disabled}
						icon={
							isPasswordVisible ? (
								<VisibilityIcon className={`fill-current w-4`} />
							) : (
								<VisibilityOffIcon className={`fill-current w-4`} />
							)
						}
						className={`ml-2 ${disabledStyles}`}
					/>
				)}
			</div>
			{error && <span className="text-red-600 text-sm">{error}</span>}
		</div>
	);
};

export default InputFormField;
