import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

import * as S from './styles';

import { TransactionBtn } from '../Button';
import { TextInput } from '../Input';
import { useTheme } from 'styled-components';

export function NewTransactionModal() {
	const theme = useTheme();
	return (
		<Dialog.Portal>
			<S.Overlay />
			<S.Content>
				<S.CloseButton>
					<X size={24} color={theme['gray-500']} />
				</S.CloseButton>
				<Dialog.Title>Nova Transação</Dialog.Title>
				<form>
					<S.InputContent>
						<TextInput placeholder='Descrição' required={true} />
						<TextInput placeholder='Preço' required={true} />
						<TextInput placeholder='Categoria' required={true} />
					</S.InputContent>
					<S.TransactionTypes>
						<S.TransactionTypeButton variant='income'>
							<ArrowCircleUp size={24} />
							<span>Entrada</span>
						</S.TransactionTypeButton>
						<S.TransactionTypeButton>
							<ArrowCircleDown size={24} />
							<span>Saída</span>
						</S.TransactionTypeButton>
					</S.TransactionTypes>
					<TransactionBtn type='submit'>Cadastrar</TransactionBtn>
				</form>
			</S.Content>
		</Dialog.Portal>
	);
}
