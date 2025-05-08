import * as S from './styles';

import Logo from '../../assets/logo.svg';
import { TransactionBtn } from '../Button';

export function Header() {
	return (
		<S.HeaderContainer>
			<S.HeaderContent>
				<S.HeaderLogo>
					<img src={Logo} alt='DT Money' title='DT Money' />
					<h1>DT Money</h1>
				</S.HeaderLogo>
				<TransactionBtn>Nova Transação</TransactionBtn>
			</S.HeaderContent>
		</S.HeaderContainer>
	);
}
