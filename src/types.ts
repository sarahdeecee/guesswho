export type Country = "Mondstadt" | "Liyue" | "Inazuma" | "Sumeru" | "Fontaine" | "Natlan" | "Nod-Krai" | "Other";
export type Element = "anemo" | "cryo" | "hydro" | "pyro" | "geo" | "electro" | "dendro";
export type Weapon = "sword" | "claymore" | "polearm" | "catalyst" | "bow"
export type Quality = 4 | 5

export interface Character {
  name: string,
  country: Country,
  element: Element,
  weapon: Weapon,
  quality: Quality,
  img: string,
}

