import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from 'phosphor-react';
import { useContextSelector } from 'use-context-selector';

import * as S from './styles';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const searchFormSchema = z.object({
	query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
	const fetchTransactions = useContextSelector(
		TransactionsContext,
		(context) => {
			return context.fetchTransactions;
		},
	);
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
