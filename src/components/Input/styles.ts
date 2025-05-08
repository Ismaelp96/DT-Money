import styled from 'styled-components';

export const TextInputStyle = styled.input`
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
`;
