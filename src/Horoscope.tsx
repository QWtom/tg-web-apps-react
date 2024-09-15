import React, { useEffect, useState } from "react";
import { fetchHoroscope } from "../src/shared/api/fetch.tsx";
import fetchAccessToken from "./shared/api/fethcAccessToken.tsx";


const Horoscope = () => {
	const getHoroscope = async () => {
		const accessToken = await fetchAccessToken();
		if (accessToken) {
			const horoscope = await fetchHoroscope(accessToken); // Пример запроса для знака "Овен"
			console.log(horoscope);
		}
	};

	getHoroscope();


	return (
		<>
			asdfasdfasdgsdfgsdgfgdf
		</>
	)
};

export default Horoscope;
