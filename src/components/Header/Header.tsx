import * as Dialog from '@radix-ui/react-dialog';
import * as S from './styles';

import Logo from '../../assets/logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {
	return (
		<S.HeaderContainer>
			<S.HeaderContent>
				<S.HeaderLogo>
					<img src={Logo} alt='DT Money' title='DT Money' />
					<h1>DT Money</h1>
				</S.HeaderLogo>
				<Dialog.Root>
					<S.TransactionButton>Nova Transação</S.TransactionButton>
					<NewTransactionModal />
				</Dialog.Root>
			</S.HeaderContent>
		</S.HeaderContainer>
	);
}
