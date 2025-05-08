import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import * as S from './styles';
import { useTheme } from 'styled-components';

export function Summary() {
	const theme = useTheme();
	return (
		<S.SummaryContainer>
			<S.SummaryContent>
				<S.SummaryCard>
					<S.SummaryTitle>
						<span>Entradas</span>
						<ArrowCircleUp size={26} color={theme['green-300']} />
					</S.SummaryTitle>
					<p>R$ 17.400,00</p>
				</S.SummaryCard>
				<S.SummaryCard>
					<S.SummaryTitle>
						<span>Saídas</span>
						<ArrowCircleDown size={26} color={theme['red-300']} />
					</S.SummaryTitle>
					<p>R$ 1.259,00</p>
				</S.SummaryCard>
				<S.SummaryCard variant='green'>
					<S.SummaryTitle>
						<span>Total</span>
						<CurrencyDollar size={26} color={theme.white} />
					</S.SummaryTitle>
					<p> R$ 16.141,00</p>
				</S.SummaryCard>
			</S.SummaryContent>
		</S.SummaryContainer>
	);
}
