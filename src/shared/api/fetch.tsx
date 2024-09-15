import fetchAccessToken from "./fethcAccessToken.tsx";

interface IFetchProps {
	sign?: string;
	accessToken?: string
	date?: string
}

export const fetchHoroscope = async ({ sign = 'leo', date = 'today' }: IFetchProps) => {
	const accessToken = await fetchAccessToken(); // получаем токен доступа

	if (!accessToken) {
		console.error('Access token is required to make API requests.');
		return;
	}

	const url = `https://api.prokerala.com/v1/astrology/horoscope/daily?sign=${sign}&date=${date}`;

	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${accessToken}`, // добавляем токен в заголовок запроса
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		}

		const result = await response.json();
		console.log(result);
		return result;
	} catch (error) {
		console.error('Fetch error:', error);
	}
};
