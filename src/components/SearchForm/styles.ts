import styled from 'styled-components';

export const TransactionSearch = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.6rem;
	input {
		flex: 1;
		height: 5.4rem;
		background-color: ${({ theme }) => theme['gray-900']};
		border-radius: 6px;
		outline: transparent;
		outline-width: 1px;
		border: 0;
		padding: 1.6rem;
		color: ${({ theme }) => theme['gray-300']};
		&::placeholder {
			color: ${({ theme }) => theme['gray-500']};
		}
		&:hover {
			outline: ${({ theme }) => theme['green-300']};
		}
		&:focus {
			outline: ${({ theme }) => theme['green-300']};
		}
	}
`;

export const TransactionSearchButton = styled.button`
	height: 5.4rem;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 1.2rem;
	padding: 0 3.2rem;
	background-color: transparent;
	color: ${({ theme }) => theme['green-300']};
	border: 1px solid ${({ theme }) => theme['green-300']};
	border-radius: 6px;
	span {
		font-weight: bold;
	}
	&:hover {
		border-color: ${({ theme }) => theme['green-500']};
		background-color: ${({ theme }) => theme['green-500']};
		color: ${({ theme }) => theme.white};
		transition: all 0.2s ease;
	}
`;
