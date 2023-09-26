(() => {
  let avengers: number = 10;
  console.log(avengers);

  const villians: number = 20;

  if (avengers < villians) {
    console.log('Estamos en problemas');
  } else {
    console.log('estamos salvados');
  }

  avengers = Number('55a');

  //   NaN es considerado de tipo number

  console.log({ avengers });
})();
