import * as Dialog from '@radix-ui/react-dialog';
import * as S from './styles';

import Logo from '../../assets/logo.svg';
import { TransactionBtn } from '../Button';
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
					<Dialog.DialogTrigger>
						<TransactionBtn>Nova Transação</TransactionBtn>
					</Dialog.DialogTrigger>
					<NewTransactionModal />
				</Dialog.Root>
			</S.HeaderContent>
		</S.HeaderContainer>
	);
}
