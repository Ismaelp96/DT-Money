import { useTheme } from 'styled-components';
import { MagnifyingGlass } from 'phosphor-react';

import * as S from './styles';
import { TextInput } from '../Input';

export function SearchForm() {
	const theme = useTheme();
	return (
		<S.TransactionSearchContainer>
			<S.TransactionSearch>
				<TextInput placeholder='Busque uma transação' />
				<S.TransactionSearchButton type='submit'>
					<MagnifyingGlass size={20} />
					<span>Buscar</span>
				</S.TransactionSearchButton>
			</S.TransactionSearch>
		</S.TransactionSearchContainer>
	);
}
