interface IHoroscopeSign {
	sign: string;
	day: string;
}

export const getHoroscope = async ({ sign, day }: IHoroscopeSign) => {
	const URL = `https://aztro.sameerkumar.website/?sign=aries&day=today`;
  
	try {
	  const response = await fetch(URL, {
		method: "GET",
	  });
  
	  if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	  }
  
	  const data = await response.json();
  
	  if (!data || typeof data !== "object") {
		console.error("Ответ от API не является объектом или пустой:", data);
		throw new Error("Ответ от API не содержит ожидаемых данных.");
	  }
  
	  if (!data.description || typeof data.description !== "string") {
		console.error("Поле description отсутствует или не является строкой:", data);
		throw new Error("Ответ от API не содержит поля 'description'.");
	  }
  
	  return data;
	} catch (err) {
	  console.error("Error fetching horoscope:", err);
	  throw new Error("Failed to fetch horoscope");
	}
  };

