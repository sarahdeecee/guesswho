import { Character, CharacterPiece } from "../types";

export const characters: Character[] = [
  {
    name: 'Baizhu',
    country: 'Liyue',
    element: 'dendro',
    weapon: 'catalyst',
    quality: 5,
    img: 'baizhu.png'
  },
  {
    name: 'Kirara',
    country: 'Inazuma',
    element: 'dendro',
    weapon: 'sword',
    quality: 4,
    img: 'kirara.png'
  },
  {
    name: 'Lynette',
    country: 'Fontaine',
    element: 'anemo',
    weapon: 'sword',
    quality: 4,
    img: 'lynette.png'
  },
  {
    name: 'Lyney',
    country: 'Fontaine',
    element: 'pyro',
    weapon: 'bow',
    quality: 5,
    img: 'lyney.png'
  },
  {
    name: 'Freminet',
    country: 'Fontaine',
    element: 'cryo',
    weapon: 'claymore',
    quality: 4,
    img: 'freminet.png'
  },
  {
    name: 'Wriothesley',
    country: 'Fontaine',
    element: 'cryo',
    weapon: 'catalyst',
    quality: 5,
    img: 'wriothesley.png'
  },
  {
    name: 'Neuvillette',
    country: 'Fontaine',
    element: 'hydro',
    weapon: 'catalyst',
    quality: 5,
    img: 'neuvillette.png'
  },
  {
    name: 'Furina',
    country: 'Fontaine',
    element: 'hydro',
    weapon: 'sword',
    quality: 5,
    img: 'furina.png'
  },
  {
    name: 'Charlotte',
    country: 'Fontaine',
    element: 'cryo',
    weapon: 'catalyst',
    quality: 4,
    img: 'charlotte.png'
  },
  {
    name: 'Navia',
    country: 'Fontaine',
    element: 'geo',
    weapon: 'claymore',
    quality: 5,
    img: 'navia.png'
  },
  {
    name: 'Chevreuse',
    country: 'Fontaine',
    element: 'pyro',
    weapon: 'polearm',
    quality: 4,
    img: 'chevreuse.png'
  },
  {
    name: 'Xianyun',
    country: 'Liyue',
    element: 'anemo',
    weapon: 'catalyst',
    quality: 5,
    img: 'xianyun.png'
  },
  {
    name: 'Gaming',
    country: 'Liyue',
    element: 'pyro',
    weapon: 'claymore',
    quality: 4,
    img: 'gaming.png'
  },
  {
    name: 'Chiori',
    country: 'Inazuma',
    element: 'geo',
    weapon: 'sword',
    quality: 5,
    img: 'chiori.png'
  },
  {
    name: 'Arlecchino',
    country: 'Snezhnaya',
    element: 'pyro',
    weapon: 'polearm',
    quality: 5,
    img: 'arlecchino.png'
  },
  {
    name: 'Chlorinde',
    country: 'Fontaine',
    element: 'electro',
    weapon: 'sword',
    quality: 5,
    img: 'chlorinde.png'
  },
  {
    name: 'Sigewinne',
    country: 'Fontaine',
    element: 'hydro',
    weapon: 'bow',
    quality: 5,
    img: 'sigewinne.png'
  },
  {
    name: 'Sethos',
    country: 'Sumeru',
    element: 'electro',
    weapon: 'bow',
    quality: 4,
    img: 'sethos.png'
  },
  {
    name: 'Emilie',
    country: 'Fontaine',
    element: 'dendro',
    weapon: 'polearm',
    quality: 5,
    img: 'emilie.png'
  },
  {
    name: 'Kinich',
    country: 'Natlan',
    element: 'dendro',
    weapon: 'claymore',
    quality: 5,
    img: 'kinich.png'
  },
  {
    name: 'Kchina',
    country: 'Natlan',
    element: 'geo',
    weapon: 'polearm',
    quality: 4,
    img: 'kachina.png'
  },
  {
    name: 'Mualani',
    country: 'Natlan',
    element: 'hydro',
    weapon: 'catalyst',
    quality: 5,
    img: 'mualani.png'
  },
  {
    name: 'Xilonen',
    country: 'Natlan',
    element: 'geo',
    weapon: 'sword',
    quality: 5,
    img: 'xilonen.png'
  },
  {
    name: 'Ororon',
    country: 'Natlan',
    element: 'electro',
    weapon: 'bow',
    quality: 5,
    img: 'ororon.png'
  },
  {
    name: 'Chasca',
    country: 'Natlan',
    element: 'anemo',
    weapon: 'bow',
    quality: 5,
    img: 'chasca.png'
  },
  {
    name: 'Mavuika',
    country: 'Natlan',
    element: 'pyro',
    weapon: 'claymore',
    quality: 5,
    img: 'mavuika.png'
  },
  {
    name: 'Citlali',
    country: 'Natlan',
    element: 'cryo',
    weapon: 'catalyst',
    quality: 5,
    img: 'citlali.png'
  },
  {
    name: 'Lan Yan',
    country: 'Liyue',
    element: 'anemo',
    weapon: 'catalyst',
    quality: 4,
    img: 'lanyan.png'
  },
  {
    name: 'Yumemizuki Mizuki',
    country: 'Inazuma',
    element: 'anemo',
    weapon: 'catalyst',
    quality: 5,
    img: 'yumemizuki-mizuki.png'
  },
  {
    name: 'Varesa',
    country: 'Natlan',
    element: 'electro',
    weapon: 'catalyst',
    quality: 5,
    img: 'varesa.png'
  },
  {
    name: 'Iansan',
    country: 'Natlan',
    element: 'electro',
    weapon: 'polearm',
    quality: 4,
    img: 'iansan.png'
  },
  {
    name: 'Escoffier',
    country: 'Fontaine',
    element: 'cryo',
    weapon: 'polearm',
    quality: 5,
    img: 'escoffier.png'
  },
  {
    name: 'Ifa',
    country: 'Natlan',
    element: 'anemo',
    weapon: 'catalyst',
    quality: 4,
    img: 'ifa.png'
  },
  {
    name: 'Skirk',
    country: 'Other',
    element: 'cryo',
    weapon: 'sword',
    quality: 5,
    img: 'skirk.png'
  },
  {
    name: 'Dahlia',
    country: 'Mondstadt',
    element: 'hydro',
    weapon: 'sword',
    quality: 4,
    img: 'dahlia.png'
  },
  {
    name: 'Ineffa',
    country: 'Nod-Krai',
    element: 'electro',
    weapon: 'polearm',
    quality: 5,
    img: 'ineffa.png'
  },
  {
    name: 'Lauma',
    country: 'Nod-Krai',
    element: 'dendro',
    weapon: 'catalyst',
    quality: 5,
    img: 'lauma.png'
  },
  {
    name: 'Aino',
    country: 'Nod-Krai',
    element: 'hydro',
    weapon: 'claymore',
    quality: 4,
    img: 'aino.png'
  },
  {
    name: 'Flins',
    country: 'Nod-Krai',
    element: 'electro',
    weapon: 'polearm',
    quality: 5,
    img: 'flins.png'
  },
]

export const itemData: CharacterPiece[] = characters.map(character => ({...character, selected: false}))