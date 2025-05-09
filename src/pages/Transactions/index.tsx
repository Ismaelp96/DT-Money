import { useContext } from 'react';
import * as S from './style';

import { Header } from '../../components/Header/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from '../../components/SearchForm';
import { TransactionsContext } from '../../contexts/TransactionsContext';

export function Transactions() {
	const { transactions } = useContext(TransactionsContext);
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
											R$ {transaction.price.toFixed(2)}
										</S.PriceHighlight>
									</td>
									<td>{transaction.category}</td>
									<td>{transaction.createdAt}</td>
								</S.TableRow>
							);
						})}
					</tbody>
				</S.Table>
			</S.TableTransactionsContainer>
		</div>
	);
}
