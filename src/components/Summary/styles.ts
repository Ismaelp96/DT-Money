import styled, { css } from 'styled-components';
import { Container } from '../../styles/global';

export const SummaryContainer = styled.div`
	width: 100%;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 5.5rem;
		background-color: ${({ theme }) => theme['gray-900']};
		z-index: -1;
	}
`;

export const SummaryContent = styled(Container)`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 0 3.2rem;
`;

interface SummaryCardProps {
	variant?: 'green';
}

export const SummaryCard = styled.div<SummaryCardProps>`
	width: 100%;
	max-width: 35.2rem;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	padding: 2.4rem 2.4rem 2.4rem 3.2rem;
	border-radius: 6px;
	background-color: ${({ theme }) => theme['gray-600']};
	color: ${({ theme }) => theme['gray-100']};

	p {
		font-size: 3.2rem;
		font-weight: bold;
	}
	${(props) =>
		props.variant === 'green' &&
		css`
			background-color: ${props.theme['green-700']};
		`}
`;

export const SummaryTitle = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${({ theme }) => theme['gray-300']};
`;
