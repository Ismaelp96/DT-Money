import styled from 'styled-components';
import { Container } from '../../styles/global';

export const TableTransactionsContainer = styled(Container)`
	width: 100%;
	padding-top: 6.4rem;
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
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
