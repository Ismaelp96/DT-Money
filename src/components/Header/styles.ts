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
