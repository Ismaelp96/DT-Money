import styled from 'styled-components';

export const TransactionButton = styled.button`
	font-weight: bold;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: 5rem;
	padding: 0 2rem;
	background-color: ${({ theme }) => theme['green-500']};
	color: ${({ theme }) => theme.white};
	border-radius: 6px;
	&:hover {
		background-color: ${({ theme }) => theme['green-300']};
		transition: background-color 0.2s ease;
	}
`;
