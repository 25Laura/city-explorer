import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { destinatii } from './data/destinatii.js';
import { 
  getOrase, 
  getNevizitate, 
  totalZile, 
  formatDestinatie, 
  numarPeTara, 
  sortDupaZile,
  adaugaDestinatie,
  marcheazaVizitat,
  stergereDestinatie,
  fetchAtractiiTuristice 
} from './utils/destinatii.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

console.log('L2 Merge!');
console.log('L2 Ex. 1 orase:', getOrase(destinatii));
console.log('L2 Ex. 1 nevizitate:', getNevizitate(destinatii).length);
console.log('L2 Ex. 1 zile de vizitat:', totalZile(getNevizitate(destinatii)));
console.log(destinatii.map(formatDestinatie).join('\n'));
console.log('L2 Ex. 1 pe tara:', numarPeTara(destinatii));
console.log('L2 Ex. 1 cea mai lunga vizita:', sortDupaZile(destinatii)[0].oras);

const listaCuNouaDestinatie = adaugaDestinatie(destinatii, {
  oras: 'Magurele',
  tara: 'Romania',
  zile: 1,
  vizitat: false
});
console.log('L2 Ex. 2 adaugat:', listaCuNouaDestinatie.length);

const listaMarcata = marcheazaVizitat(destinatii, '1');
console.log('L2 Ex. 2 vizitat Lisabona:', listaMarcata.find((d) => d.id === '1').vizitat);

const listaFaraCluj = stergereDestinatie(destinatii, '2');
console.log('L2 Ex. 2 sters Cluj:', listaFaraCluj.length);

console.log('L2 Ex. 2 original intact:', destinatii.length === 6);

fetchAtractiiTuristice('Kyoto').then((rezultat) => {
  console.log('L2 Ex. 3 date primite de la API:', rezultat);
});