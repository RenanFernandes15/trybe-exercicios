const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (names) => (
  names.reduce((sum, word) => sum + [...word].filter((value) => value.toLowerCase() === 'a').length, 0)
);


console.log(containsA(names));