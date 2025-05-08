import { useTheme } from 'styled-components';
import * as S from './style';

import { Header } from '../../components/Header/Header';
import { Summary } from '../../components/Summary';
import { MagnifyingGlass } from 'phosphor-react';

export function Transactions() {
	const theme = useTheme();
	return (
		<div>
			<Header />
			<Summary />
			<S.TableTransactionsContainer>
				<S.TableTransactionsContent>
					<S.TransactionSearch>
						<input
							type='text'
							name=''
							id=''
							placeholder='Busque uma transação'
						/>
						<S.TransactionSearchButton>
							<MagnifyingGlass size={20} color={theme['green-300']} />
							<span>Buscar</span>
						</S.TransactionSearchButton>
					</S.TransactionSearch>
					<S.Table>
						<S.TableRow>
							<td width='50%'>Desenvolvimento de site</td>
							<td>
								<S.PriceHighlight variant='income'>
									R$ 12.000,00
								</S.PriceHighlight>
							</td>
							<td>Venda</td>
							<td>13/04/2022</td>
						</S.TableRow>
						<S.TableRow>
							<td width='50%'>Hamburger</td>
							<td>
								<S.PriceHighlight variant='outcome'>
									- R$ 59,00
								</S.PriceHighlight>
							</td>
							<td>Alimentação</td>
							<td>13/04/2022</td>
						</S.TableRow>
					</S.Table>
				</S.TableTransactionsContent>
			</S.TableTransactionsContainer>
		</div>
	);
}
