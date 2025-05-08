import { useTheme } from 'styled-components';
import { MagnifyingGlass } from 'phosphor-react';

import * as S from './styles';

export function SearchForm() {
	const theme = useTheme();
	return (
		<S.TransactionSearch>
			<input type='text' placeholder='Busque uma transação' />
			<S.TransactionSearchButton type='submit'>
				<MagnifyingGlass size={20} color={theme['green-300']} />
				<span>Buscar</span>
			</S.TransactionSearchButton>
		</S.TransactionSearch>
	);
}
