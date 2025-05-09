import type { ReactNode } from 'react';
import { TransactionButton } from './styles';

interface TransactionBtnProps {
	children: ReactNode;
	type?: 'submit' | 'button';
}

export function TransactionBtn({ children, type }: TransactionBtnProps) {
	return <TransactionButton type={type}>{children}</TransactionButton>;
}
