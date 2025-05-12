import { useContextSelector } from 'use-context-selector';

import * as S from './style';

import { Header } from '../../components/Header/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from '../../components/SearchForm';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { dateFormmater, priceFormmater } from '../../utils/formatter';

export function Transactions() {
	const transactions = useContextSelector(TransactionsContext, (context) => {
		return context.transactions;
	});
	return (
		<div>
			<Header />
			<Summary />
			<SearchForm />
			<S.TableTransactionsContainer>
				<S.Table>
					<tbody>
						{transactions.map((transaction) => {
							return (
								<S.TableRow key={transaction.id}>
									<td width='50%'>{transaction.description}</td>
									<td>
										<S.PriceHighlight variant={transaction.type}>
											{transaction.type === 'outcome' && '- '}
											{priceFormmater.format(transaction.price)}
										</S.PriceHighlight>
									</td>
									<td>{transaction.category}</td>
									<td>
										{dateFormmater.format(new Date(transaction.createdAt))}
									</td>
								</S.TableRow>
							);
						})}
					</tbody>
				</S.Table>
			</S.TableTransactionsContainer>
		</div>
	);
}
