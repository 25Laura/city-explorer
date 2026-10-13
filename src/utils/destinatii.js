export const getOrase = (list) => list.map((d) => d.oras);

export const getNevizitate = (list) => list.filter((d) => !d.vizitat);

export const totalZile = (list) => list.reduce((sum, d) => sum + d.zile, 0);

export const formatDestinatie = ({ oras, tara, zile, vizitat }) => 
  `${vizitat ? '[x]' : '[ ]'} ${oras}, ${tara} (${zile} zile)`;

export const numarPeTara = (list) =>
  list.reduce((acc, { tara }) => ({
    ...acc,
    [tara]: (acc[tara] ?? 0) + 1
  }), {});

export const sortDupaZile = (list) => [...list].sort((a, b) => b.zile - a.zile);

export const adaugaDestinatie = (list, nouaDestinatie) => [
  ...list,
  { ...nouaDestinatie, id: String(Date.now()) }
];

export const marcheazaVizitat = (list, id) =>
  list.map((d) => (d.id === id ? { ...d, vizitat: true } : d));

export const stergereDestinatie = (list, id) =>
  list.filter((d) => d.id !== id);

export const fetchAtractiiTuristice = async ( oras = 'Paris' ) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${oras}`);
    if (!response.ok) {
      throw new Error('Eroare la preluarea datelor de pe server!');
    }
    const data = await response.json();
    return data.slice(0, 3);
  } catch (error) {
    console.error('A apărut o eroare:', error.message);
    return [];
  }
};