import { useEffect, useState, type ReactNode, useCallback } from 'react';
import { createContext } from 'use-context-selector';
import { api } from '../lib/axios';

interface Transaction {
	id: number;
	description: string;
	type: 'income' | 'outcome';
	category: string;
	price: number;
	createdAt: string;
}

interface CreateTransactionInput {
	description: string;
	price: number;
	category: string;
	type: 'income' | 'outcome';
}

interface TransactionContextType {
	transactions: Transaction[];
	fetchTransactions: (query?: string) => Promise<void>;
	createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
	children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	const fetchTransactions = useCallback(async (query?: string) => {
		const response = await api.get('/transactions', {
			params: { _sort: 'createdAt', _order: 'desc', q: query },
		});
		setTransactions(response.data);
	}, []);

	const createTransaction = useCallback(
		async (data: CreateTransactionInput) => {
			const { category, description, price, type } = data;
			const response = await api.post('transactions', {
				description,
				price,
				category,
				type,
				createdAt: new Date(),
			});
			setTransactions((state) => [response.data, ...state]);
			console.log(response);
		},
		[],
	);

	useEffect(() => {
		fetchTransactions();
	}, [fetchTransactions]);

	return (
		<TransactionsContext.Provider
			value={{ transactions, fetchTransactions, createTransaction }}>
			{children}
		</TransactionsContext.Provider>
	);
}
