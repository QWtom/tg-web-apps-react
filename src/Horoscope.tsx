import React, { useEffect, useState } from "react";
import Slider from "react-slick";

// Определяем интерфейс для данных гороскопа
interface HoroscopeData {
	sign: string;
	period: string;
	language: string;
	general: string[];
}

const Horoscope = () => {
	const [selectedSign, setSelectedSign] = useState("cancer");
	const [horoscope, setHoroscope] = useState<HoroscopeData | null>(null);  // Используем интерфейс здесь

	const zodiacSigns = [
		{ name: "Aries", value: "aries" },
		{ name: "Taurus", value: "taurus" },
		{ name: "Gemini", value: "gemini" },
		{ name: "Cancer", value: "cancer" },
		{ name: "Leo", value: "leo" },
		{ name: "Virgo", value: "virgo" },
		{ name: "Libra", value: "libra" },
		{ name: "Scorpio", value: "scorpio" },
		{ name: "Sagittarius", value: "sagittarius" },
		{ name: "Capricorn", value: "capricorn" },
		{ name: "Aquarius", value: "aquarius" },
		{ name: "Pisces", value: "pisces" }
	];

	console.log(selectedSign)
	useEffect(() => {
		const fetchHoroscope = async () => {
			const URL = `https://horoscopes-ai.p.rapidapi.com/get_horoscope/${selectedSign}/today/general/en`;
			const response = await fetch(URL, {
				method: "GET",
				headers: {
					"x-rapidapi-key": "0f693add13msh238091ad3b88759p1b27e2jsn8e3f4baef2e6",
					"x-rapidapi-host": "horoscopes-ai.p.rapidapi.com",
				},
			});
			const data: HoroscopeData = await response.json();
			setHoroscope(data);
		};

		fetchHoroscope();
	}, [selectedSign]);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true,
	};

	return (
		<div>
			<h1>Select Your Zodiac Sign</h1>
			<Slider {...settings}>
				{zodiacSigns.map((sign) => (
					<div key={sign.value} onClick={() => setSelectedSign(sign.value)}>
						<h3>{sign.name}</h3>
					</div>
				))}
			</Slider>

			{horoscope ? (
				<div>
					<h2>Horoscope for {selectedSign}</h2>
					<p>{horoscope.general}</p>  {/* Здесь TypeScript теперь понимает, что general — это массив строк */}
				</div>
			) : (
				<p>Loading horoscope...</p>
			)}
		</div>
	);
};

export default Horoscope;
