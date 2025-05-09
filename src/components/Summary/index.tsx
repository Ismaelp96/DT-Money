import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import * as S from './styles';

import { priceFormmater } from '../../utils/formatter';
import { useSummary } from '../../hooks/useSummary';

export function Summary() {
	const { income, outcome, total } = useSummary();
	return (
		<S.SummaryContainer>
			<S.SummaryContent>
				<S.SummaryCard>
					<S.SummaryTitle variant='green'>
						<span>Entradas</span>
						<ArrowCircleUp size={26} />
					</S.SummaryTitle>
					<p>{priceFormmater.format(income)}</p>
				</S.SummaryCard>
				<S.SummaryCard>
					<S.SummaryTitle variant='red'>
						<span>Saídas</span>
						<ArrowCircleDown size={26} />
					</S.SummaryTitle>
					<p>{priceFormmater.format(outcome)}</p>
				</S.SummaryCard>
				<S.SummaryCard variant='green'>
					<S.SummaryTitle variant='white'>
						<span>Total</span>
						<CurrencyDollar size={26} />
					</S.SummaryTitle>
					<p>{priceFormmater.format(total)}</p>
				</S.SummaryCard>
			</S.SummaryContent>
		</S.SummaryContainer>
	);
}
