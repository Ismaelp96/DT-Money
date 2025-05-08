import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

import * as S from './styles';

import { TransactionBtn } from '../Button';
import { TextInput } from '../Input';
import { useTheme } from 'styled-components';

export function NewTransaction() {
	const theme = useTheme();
	return (
		<S.NewTransactionContainer>
			<S.NewTransactionContent>
				<S.CloseButton>
					<X size={24} color={theme['gray-500']} />
				</S.CloseButton>
				<h3>Nova Transação</h3>
				<S.InputContent>
					<TextInput placeholder='Descrição' />
					<TextInput placeholder='Preço' />
					<TextInput placeholder='Categoria' />
				</S.InputContent>
				<S.ButtonContent>
					<S.ButtonMoviment>
						<ArrowCircleUp size={24} color={theme['green-300']} />
						<span>Entrada</span>
					</S.ButtonMoviment>
					<S.ButtonMoviment>
						<ArrowCircleDown size={24} color={theme['red-300']} />
						<span>Saída</span>
					</S.ButtonMoviment>
				</S.ButtonContent>
				<TransactionBtn>Cadastrar</TransactionBtn>
			</S.NewTransactionContent>
		</S.NewTransactionContainer>
	);
}
