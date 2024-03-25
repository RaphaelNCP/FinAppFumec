const generateDateOptions = () => {
	const startDate = new Date(); // Data atual
	const endDate = new Date("2025-12-31"); // Data final (você pode ajustar conforme necessário)
	const dates = [];

	// Função para adicionar um zero à esquerda para números menores que 10
	const addZero = (num: number) =>
		num < 10 ? "0" + num : num;

	// Loop para gerar datas de startDate até endDate
	for (
		let date = startDate;
		date <= endDate;
		date.setDate(date.getDate() + 1)
	) {
		const day = addZero(date.getDate());
		const month = addZero(date.getMonth() + 1); // Os meses em JavaScript começam de 0
		const year = date.getFullYear();
		const formattedDate = `${day}/${month}/${year}`; // Formatar a data para 'dd/mm/aaaa'
		dates.push({
			label: formattedDate,
			value: formattedDate,
		});
	}

	return dates;
};

export const dateData = generateDateOptions();
