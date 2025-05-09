import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import * as S from './styles';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { priceFormmater } from '../../utils/formatter';

export function Summary() {
	const { transactions } = useContext(TransactionsContext);
	const summary = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === 'income') {
				acc.income += transaction.price;
				acc.total += transaction.price;
			} else {
				acc.outcome += transaction.price;
				acc.total -= transaction.price;
			}
			return acc;
		},
		{
			income: 0,
			outcome: 0,
			total: 0,
		},
	);
	return (
		<S.SummaryContainer>
			<S.SummaryContent>
				<S.SummaryCard>
					<S.SummaryTitle variant='green'>
						<span>Entradas</span>
						<ArrowCircleUp size={26} />
					</S.SummaryTitle>
					<p>{priceFormmater.format(summary.income)}</p>
				</S.SummaryCard>
				<S.SummaryCard>
					<S.SummaryTitle variant='red'>
						<span>Saídas</span>
						<ArrowCircleDown size={26} />
					</S.SummaryTitle>
					<p>{priceFormmater.format(summary.outcome)}</p>
				</S.SummaryCard>
				<S.SummaryCard variant='green'>
					<S.SummaryTitle variant='white'>
						<span>Total</span>
						<CurrencyDollar size={26} />
					</S.SummaryTitle>
					<p>{priceFormmater.format(summary.total)}</p>
				</S.SummaryCard>
			</S.SummaryContent>
		</S.SummaryContainer>
	);
}
