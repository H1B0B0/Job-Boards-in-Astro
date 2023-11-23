const apiUrl = 'http://localhost:3000/company/';
let cardData: CardData[] = [];

export interface CardData {
      id: number;
      name: string;
      localisation: string;
      email: string;
}

export async function fetchCompanies() {
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


