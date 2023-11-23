const apiUrl = 'http://localhost:3000/advertissements/';
let cardData: CardData[] = [];

export interface CardData {
    id:           string;
    title:        string;
    description:  string;
    num:          string;
    localisation: string;
    poste:        string;
    typeContrat:  string;
    horraires:    string;
    pay:          string;
    IdList:       string[];
    company: {
      id: number;
      name: string;
      localisation: string;
      email: string;
  };
}

export async function fetchJobs() {
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


