import * as S from './style';

// import { NewTransaction } from '../../components/NewTransaction';
import { Header } from '../../components/Header/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from '../../components/SearchForm';

export function Transactions() {
	return (
		<div>
			<Header />
			<Summary />
			<S.TableTransactionsContainer>
				<SearchForm />
				<S.Table>
					<S.TableRow>
						<td width='50%'>Desenvolvimento de site</td>
						<td>
							<S.PriceHighlight variant='income'>R$ 12.000,00</S.PriceHighlight>
						</td>
						<td>Venda</td>
						<td>13/04/2022</td>
					</S.TableRow>
					<S.TableRow>
						<td width='50%'>Hamburger</td>
						<td>
							<S.PriceHighlight variant='outcome'>- R$ 59,00</S.PriceHighlight>
						</td>
						<td>Alimentação</td>
						<td>13/04/2022</td>
					</S.TableRow>
				</S.Table>
			</S.TableTransactionsContainer>
			{/* <NewTransaction /> */}
		</div>
	);
}
