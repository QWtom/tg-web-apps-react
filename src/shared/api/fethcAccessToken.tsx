const fetchAccessToken = async () => {
	const url = 'https://api.prokerala.com/token';
	const clientId = '39c74a36-f255-4933-8734-c6824f5d15b5';
	const clientSecret = 'p3eZLMEMzMQEThSDPe4fOnpfotjUgEpnAd2uVrs1';

	const params = new URLSearchParams();
	params.append('grant_type', 'client_credentials');
	params.append('client_id', clientId);
	params.append('client_secret', clientSecret);

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Accept': 'application/json',
			},
			body: params,
		});

		// Проверяем успешность запроса
		if (!response.ok) {
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		}

		const result = await response.json();
		console.log('Access token response:', result);

		// Выводим сам токен
		const accessToken = result.access_token;
		console.log('Access Token:', accessToken);

		return accessToken;
	} catch (error) {
		console.error('Fetch error:', error);
	}
};

fetchAccessToken();

export default fetchAccessToken;