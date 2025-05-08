import styled from 'styled-components';
import { Container } from '../../styles/global';

export const HeaderContainer = styled.header`
	width: 100%;
	padding-block: 4rem;
	background-color: ${({ theme }) => theme['gray-900']};
`;

export const HeaderContent = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const HeaderLogo = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;

	h1 {
		font-size: 2.6rem;
	}
	img {
		width: 4rem;
		height: 4rem;
	}
`;

export const NewTransactionButton = styled.button`
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
