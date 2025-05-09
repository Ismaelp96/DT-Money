import styled from 'styled-components';
import { Container } from '../../styles/global';

export const TransactionSearchContainer = styled(Container)`
	padding-top: 6.4rem;
`;

export const TransactionSearch = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.6rem;
	input {
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

	svg {
		color: ${({ theme }) => theme['green-300']};
	}

	&:hover {
		border-color: ${({ theme }) => theme['green-500']};
		background-color: ${({ theme }) => theme['green-500']};
		color: ${({ theme }) => theme.white};
		svg {
			color: ${({ theme }) => theme.white};
		}
		transition: all 0.2s ease;
	}
`;
