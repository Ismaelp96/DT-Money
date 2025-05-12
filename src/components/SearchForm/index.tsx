import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from 'phosphor-react';

import * as S from './styles';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const searchFormSchema = z.object({
	query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
	const { fetchTransactions } = useContext(TransactionsContext);
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	});

	async function handleSearchTransactions(data: SearchFormInputs) {
		await fetchTransactions(data.query);
	}
	return (
		<S.TransactionSearchContainer>
			<S.TransactionSearch onSubmit={handleSubmit(handleSearchTransactions)}>
				<S.TextInput
					type='text'
					placeholder='Busque uma transação'
					{...register('query')}
				/>
				<S.TransactionSearchButton type='submit' disabled={isSubmitting}>
					<MagnifyingGlass size={20} />
					<span>{isSubmitting ? 'Buscando...' : 'Buscar'}</span>
				</S.TransactionSearchButton>
			</S.TransactionSearch>
		</S.TransactionSearchContainer>
	);
}
