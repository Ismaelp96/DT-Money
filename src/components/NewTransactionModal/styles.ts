import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
	position: fixed;
	width: 100vw;
	height: 100vh;
	inset: 0;
	background-color: rgba(0, 0, 0, 7.5);
`;

export const Content = styled(Dialog.Content)`
	width: 100%;
	max-width: 53.5rem;
	padding: 4.8rem;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme['gray-800']};
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	h2 {
		font-size: 2.4rem;
		margin-bottom: 3.2rem;
		color: ${({ theme }) => theme['gray-100']};
		text-align: left;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		button {
			width: 100%;
		}
	}
`;

export const CloseButton = styled(Dialog.Close)`
	position: absolute;
	top: 2rem;
	right: 2rem;
	line-height: 0;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
		transition: opacity 0.2s ease;
	}
`;

export const InputContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	margin-bottom: 2.4rem;
`;

export const TransactionTypes = styled(RadioGroup.Root)`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	margin-bottom: 4rem;
	width: 100%;
`;

interface TransactionTypeButtonProps {
	variant: 'income' | 'outcome';
}

export const TransactionTypeButton = styled(
	RadioGroup.Item,
)<TransactionTypeButtonProps>`
	width: 100%;
	height: 5.8rem;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	background-color: ${({ theme }) => theme['gray-700']};
	border-radius: 6px;
	span {
		color: ${({ theme }) => theme['gray-300']};
	}
	svg {
		color: ${(props) =>
			props.variant === 'income'
				? props.theme['green-300']
				: props.theme['red-300']};
	}
	&[data-state='unchecked']:hover {
		transition: background-color 0.2s ease;
		background-color: ${(props) => props.theme['gray-600']};
	}
	&[data-state='checked'] {
		background-color: ${(props) =>
			props.variant === 'income'
				? props.theme['green-500']
				: props.theme['red-500']};
		span {
			color: ${({ theme }) => theme['white']};
		}
		svg {
			color: ${({ theme }) => theme.white};
		}
	}
`;

export const TransactionButton = styled(Dialog.Close)`
	font-weight: bold;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: 5rem;
	padding: 0 2rem;
	background-color: ${({ theme }) => theme['green-500']};
	color: ${({ theme }) => theme.white};
	border-radius: 6px;
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme['green-300']};
		transition: background-color 0.2s ease;
	}
`;
