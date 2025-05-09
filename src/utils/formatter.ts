export const dateFormmater = new Intl.DateTimeFormat('pt-BR');

export const priceFormmater = new Intl.NumberFormat('pt-Br', {
	style: 'currency',
	currency: 'BRL',
});
