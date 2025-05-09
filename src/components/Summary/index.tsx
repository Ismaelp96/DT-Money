import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import * as S from './styles';

export function Summary() {
	return (
		<S.SummaryContainer>
			<S.SummaryContent>
				<S.SummaryCard>
					<S.SummaryTitle variant='green'>
						<span>Entradas</span>
						<ArrowCircleUp size={26} />
					</S.SummaryTitle>
					<p>R$ 17.400,00</p>
				</S.SummaryCard>
				<S.SummaryCard>
					<S.SummaryTitle variant='red'>
						<span>Saídas</span>
						<ArrowCircleDown size={26} />
					</S.SummaryTitle>
					<p>R$ 1.259,00</p>
				</S.SummaryCard>
				<S.SummaryCard variant='green'>
					<S.SummaryTitle variant='white'>
						<span>Total</span>
						<CurrencyDollar size={26} />
					</S.SummaryTitle>
					<p> R$ 16.141,00</p>
				</S.SummaryCard>
			</S.SummaryContent>
		</S.SummaryContainer>
	);
}
