import styled from 'styled-components';
import { Container } from '../../styles/global';

export const TableTransactionsContainer = styled.section`
	width: 100%;
	padding-top: 6.4rem;
`;

export const TableTransactionsContent = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
`;

export const TransactionSearch = styled.div`
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
		color: ${({ theme }) => theme['gray-100']};
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
	gap: 1.4rem;
	padding: 0 3.2rem;
	color: ${({ theme }) => theme['green-300']};
	border: 1px solid ${({ theme }) => theme['green-300']};
	border-radius: 6px;
	span {
		font-weight: bold;
	}
	&:hover {
		background-color: ${({ theme }) => theme['green-300']};
		color: ${({ theme }) => theme.white};
	}
`;

export const Table = styled.table`
	width: 100%;
	border-collapse: separate;
	border-spacing: 0 0.8rem;
`;

export const TableRow = styled.tr`
	background-color: ${({ theme }) => theme['gray-700']};

	td {
		color: ${({ theme }) => theme['gray-300']};
		padding: 2rem 3.2rem;
		border-radius: 5px;
	}
`;

interface PriceHighlightProps {
	variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
	color: ${(props) =>
		props.variant === 'income'
			? props.theme['green-300']
			: props.theme['red-300']};
`;
