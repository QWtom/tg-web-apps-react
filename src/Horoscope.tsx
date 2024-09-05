import React, { useEffect } from "react";

const Horoscope = () => {

	useEffect(() => {
		const URL = 'https://horoscopes-ai.p.rapidapi.com/get_horoscope/cancer/today/general/en';
		fetch(URL, {
			method: 'GET',
			headers: {
				'x-rapidapi-key': '0f693add13msh238091ad3b88759p1b27e2jsn8e3f4baef2e6',
				'x-rapidapi-host': 'horoscopes-ai.p.rapidapi.com'
			}
		})
			.then(res => res.json())
			.then(res => {
				console.log(res);
			});
	}, [])

	return (
		<div></div>
	)

}

export default Horoscope;