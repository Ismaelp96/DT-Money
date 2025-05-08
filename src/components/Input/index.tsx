import { TextInputStyle } from './styles';

interface TextInputProps {
	placeholder: string;
}
export function TextInput({ placeholder }: TextInputProps) {
	return <TextInputStyle type='text' placeholder={placeholder} />;
}
