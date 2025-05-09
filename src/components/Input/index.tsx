import { TextInputStyle } from './styles';

interface TextInputProps {
	placeholder: string;
	required?: boolean;
}
export function TextInput({ placeholder, required }: TextInputProps) {
	return (
		<TextInputStyle type='text' placeholder={placeholder} required={required} />
	);
}
