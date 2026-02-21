export type MenuItem = { number: string; name: string; desc?: string; price: number | string; };
export type MenuCategory = { id: string; title: string; subtitle?: string; items: MenuItem[]; };

export const menuCategories: MenuCategory[] = [
  {
    id: "forretter",
    title: "Forretter",
    subtitle: "Serveres med butterdejssnitter eller flutes efter aftale",
    items: [
      { number: "201", name: "Suppe", desc: "Med kød- og melboller, ris, rosiner og gulerødder", price: 69 },
      { number: "202", name: "Tartelet", desc: "Med høns i asparges, 1 stor", price: 69 },
      { number: "203", name: "Kyllingecocktail", desc: "Serveres med brød", price: 71 },
      { number: "204", name: "Rejecocktail", desc: "Serveres med brød", price: 78 },
      { number: "205", name: "Kold kogt torsk", desc: "Med rejer, asparges og æg, serveres med brød", price: 78 },
      { number: "206", name: "Tunmousse", desc: "Med æg, rejer, dressing og flutes", price: 78 },
      { number: "207", name: "Hvidvinsdampet fiskefilet", desc: "Med rejemousse og butterdejssnitter", price: 81 },
      { number: "208", name: "Tartelet m. stegt og kogt fiskefilet", desc: "Med rejer, asparges og hollandaise", price: 88 },
      { number: "209", name: "Håndpillede krebsehaler", desc: "Med dilddressing", price: 90 },
      { number: "210", name: "Laks og hellefisk", desc: "Med helbladet spinat", price: 93 },
      { number: "211", name: "Fisketallerken", desc: "Med sæsonens fisk", price: "Efter aftale" },
    ],
  },
  {
    id: "stegeretter",
    title: "Stegeretter",
    subtitle: "Alt tilbehør aftales i samarbejde med kokken",
    items: [
      { number: "301", name: "Oksekød", desc: "Med flødepeberrodssauce og årstidens grønt", price: 124 },
      { number: "302", name: "Flæskesteg", desc: "Med rødkål, hvide og brunede kartofler, skysauce, surt", price: 128 },
      { number: "303", name: "Sprængt nakkesteg", desc: "Med årstidens grønt", price: 131 },
      { number: "304", name: "Indbagt svinemørbrad", desc: "Med salat og champignon à la crème", price: 136 },
      { number: "305", name: "Fyldt nakkesteg", desc: "Med champignon, persille, grøn salat og årstidens grønt", price: 136 },
      { number: "306", name: "Helstegt kalkunbryst", desc: "Med ris, små krydderkartofler, årstidens grønt", price: 136 },
      { number: "307", name: "Glaseret skinke", desc: "Med peberrodskartofler og tilbehør", price: 136 },
      { number: "308", name: "Kalvesteg / Oksesteg", desc: "Med Waldorfsalat, tyttebær og asier", price: 140 },
      { number: "309", name: "Helstegt baconmørbrad", desc: "Med tilbehør", price: 140 },
      { number: "310", name: "Kalvemørbrad", desc: "Med stegte kartofler, årstidens grønt og bearnaisesauce", price: 195 },
    ],
  },
  {
    id: "desserter",
    title: "Desserter",
    items: [
      { number: "401", name: "Triff-lis", desc: "", price: 64 },
      { number: "402", name: "Vanilje-is", desc: "Med frugter og hindbærpuré", price: 64 },
      { number: "403", name: "Ananas fromage", desc: "", price: 64 },
      { number: "404", name: "Citronfromage", desc: "Med svesker", price: 64 },
      { number: "405", name: "Mangofromage", desc: "", price: 64 },
      { number: "406", name: "Romlegeret pærer", desc: "Med råcreme", price: 65 },
      { number: "407", name: "Romfromage", desc: "", price: 65 },
      { number: "408", name: "Fløderand med is", desc: "", price: 66 },
      { number: "409", name: "Vilmadessert", desc: "", price: 68 },
      { number: "410", name: "Nøddetærte", desc: "Med råcreme og brændte mandler", price: 72 },
      { number: "411", name: "Rubinsteinkage", desc: "", price: 75 },
      { number: "412", name: "Nøddekurv", desc: "Med is og frugter", price: 75 },
      { number: "413", name: "Frugtgele-rand", desc: "Med soft-ice", price: 78 },
      { number: "414", name: "Hjemmelavet is", desc: "", price: 79 },
      { number: "415", name: "Dessert- og kagebord", desc: "Min. 25 kuverter", price: 99 },
      { number: "", name: "Kaffe", desc: "", price: 30 },
      { number: "", name: "Kaffe med hjemmebagte småkager", desc: "", price: 40 },
    ],
  },
  {
    id: "drikkevarer",
    title: "Drikkevarer",
    items: [
      { number: "", name: "Rødvin — Rosedale Ridge Shiraz/Merlot", desc: "", price: 195 },
      { number: "", name: "Hvidvin — Pearl Valley Africa", desc: "", price: 195 },
      { number: "", name: "Rosé — Maggiolini Merlot/Syrah, Sicilien", desc: "", price: 235 },
      { number: "", name: "Dessertvin", desc: "", price: 35 },
      { number: "", name: "Velkomstdrink — Mouserende Ferskendrik", desc: "", price: 35 },
      { number: "", name: "Øl", desc: "", price: 35 },
      { number: "", name: "Sodavand", desc: "", price: 30 },
      { number: "", name: "Snaps (2 cl.)", desc: "", price: 30 },
      { number: "", name: "Snaps (½ flaske)", desc: "", price: 285 },
      { number: "", name: "Vand pr. kande", desc: "", price: 20 },
    ],
  },
];

export const buffetMenus = [
  {
    title: "Anretning",
    price: 218,
    items: [
      "Maskeret torskefad med rejer og asparges",
      "Serranoskinke med hjemmelavet pesto på sprød salatbund",
      "Glaseret skinke med peberrodskartofler og grøn salat",
      "Croissant med hønsesalat",
      "Roastbeef med tilbehør",
      "Kvark-kage",
    ],
  },
  {
    title: "Buffet",
    price: 348,
    note: "Minimum 25 personer",
    items: [
      "Indbagt tun med hollandaisesauce",
      "Letsaltet skankesteg",
      "Kalvemørbrad",
      "Kalkun med ris",
      "2 slags saucer",
      "Salatbar",
      "2 slags kartofler",
      "Dessert- og kagebord",
    ],
  },
  {
    title: "Brunch",
    price: 295,
    note: "Minimum 25 personer",
    items: [
      "Laksesalat, tartelet og fiskefilet",
      "Scrambleæg, pølser i svøb, røget svinemørbrad",
      "Varm leverpostej, små frikadeller, hjemmelavet rullepølse",
      "Tærte med salat",
      "Rugbrød og hjemmebagte boller eller flutes",
      "Pandekager",
      "Ost, frugt, kaffe og te",
    ],
  },
];

export const kaffebord = {
  title: "Kaffebord",
  desc: "Boller, kringle, lagkage, småkager, kaffe og te",
  price: 130,
};
