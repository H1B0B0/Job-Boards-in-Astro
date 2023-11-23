const apiUrl = 'http://localhost:3000/user/';
let cardData: CardData[] = [];

export interface CardData {
    id: number,
    lastname: string,
    name: string,
    email: string,
    login: string,
}

export async function fetchUser() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    cardData = await response.json();
    return cardData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}


