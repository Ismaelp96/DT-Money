import * as S from './styles';

import Logo from '../../assets/logo.svg';

export function Header() {
	return (
		<S.HeaderContainer>
			<S.HeaderContent>
				<S.HeaderLogo>
					<img src={Logo} alt='DT Money' title='DT Money' />
					<h1>DT Money</h1>
				</S.HeaderLogo>
				<S.NewTransactionButton>Nova Transação</S.NewTransactionButton>
			</S.HeaderContent>
		</S.HeaderContainer>
	);
}
