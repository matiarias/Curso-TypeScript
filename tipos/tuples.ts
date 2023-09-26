(() => {
  const hero: [string, number, boolean] = ['dr strange', 100, false];

  hero[0] = 'batman';
  hero[1] = 24;
  hero[2] = true;

  console.log(hero);
})();
