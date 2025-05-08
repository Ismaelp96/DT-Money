import styled from 'styled-components';

export const NewTransactionContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.75);
	z-index: 0;
`;

export const NewTransactionContent = styled.form`
	width: 100%;
	max-width: 53.5rem;
	padding: 4.8rem;
	display: flex;
	flex-direction: column;
	position: relative;
	background-color: ${({ theme }) => theme['gray-800']};
	h3 {
		font-size: 2.4rem;
		margin-bottom: 3.2rem;
		color: ${({ theme }) => theme['gray-100']};
		text-align: left;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 2rem;
	right: 2rem;
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

export const ButtonContent = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;
	margin-bottom: 4rem;
	width: 100%;
`;

export const ButtonMoviment = styled.button`
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

	&:active {
		background-color: ${({ theme }) => theme['green-500']};
		span {
			color: ${({ theme }) => theme['white']};
		}
	}
`;
