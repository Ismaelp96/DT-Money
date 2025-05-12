import * as Dialog from '@radix-ui/react-dialog';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

import * as S from './styles';

import { useTheme } from 'styled-components';

const NewTransactionModalSchema = z.object({
	description: z.string(),
	price: z.number(),
	category: z.string(),
	type: z.enum(['income', 'outcome']),
});

type NewTransactionFormInputs = z.infer<typeof NewTransactionModalSchema>;

export function NewTransactionModal() {
	const {
		control,
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<NewTransactionFormInputs>({
		resolver: zodResolver(NewTransactionModalSchema),
		defaultValues: {
			type: 'income',
		},
	});

	async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log(data);
	}
	const theme = useTheme();
	return (
		<Dialog.Portal>
			<S.Overlay />
			<S.Content aria-describedby=''>
				<S.CloseButton asChild>
					<X size={24} color={theme['gray-500']} />
				</S.CloseButton>
				<Dialog.Title>Nova Transação</Dialog.Title>
				<form onSubmit={handleSubmit(handleCreateNewTransaction)}>
					<S.InputContent>
						<S.TextInput
							placeholder='Descrição'
							type='text'
							required
							{...register('description')}
						/>
						<S.TextInput
							placeholder='Preço'
							type='number'
							required
							{...register('price', { valueAsNumber: true })}
						/>
						<S.TextInput
							placeholder='Categoria'
							type='text'
							required
							{...register('category')}
						/>
					</S.InputContent>
					<Controller
						control={control}
						name='type'
						render={({ field }) => {
							return (
								<S.TransactionTypes
									onVolumeChange={field.onChange}
									value={field.value}>
									<S.TransactionTypeButton variant='income' value='income'>
										<ArrowCircleUp size={24} />
										<span>Entrada</span>
									</S.TransactionTypeButton>
									<S.TransactionTypeButton
										variant='outcome'
										value='outcome'
										onVolumeChange={field.onChange}>
										<ArrowCircleDown size={24} />
										<span>Saída</span>
									</S.TransactionTypeButton>
								</S.TransactionTypes>
							);
						}}
					/>
					<S.TransactionButton type='submit' disabled={isSubmitting}>
						{isSubmitting ? 'cadastrando...' : 'Cadastrar'}
					</S.TransactionButton>
				</form>
			</S.Content>
		</Dialog.Portal>
	);
}
