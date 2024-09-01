import React, { useEffect } from "react";

const Horoscope = () => {

	useEffect(() => {
		const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
		fetch(URL, {
			method: 'POST'
		})
			.then(response => response.json())
			.then(json => {
				const date = json.current_date;
				console.log(date); // КАРОЧЕ ПИЗДЕЦУ ОШИБКА НАХУЙ
			});
	}, [])

	return (
		<div></div>
	)

}

export default Horoscope;