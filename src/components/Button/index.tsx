import type { ReactNode } from 'react';
import { TransactionButton } from './styles';

interface TransactionBtnProps {
	children: ReactNode;
}

export function TransactionBtn({ children }: TransactionBtnProps) {
	return <TransactionButton>{children}</TransactionButton>;
}
