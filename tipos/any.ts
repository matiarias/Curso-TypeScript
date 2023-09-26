(() => {
  let avenger: any = 123;
  let exist;
  let power;

  avenger = 'Doctor Strange';
  console.log((avenger as string).charAt(0));

  avenger = 10.0312;
  console.log((<number>avenger).toFixed(2));

  console.log(exist);
  console.log(power);
})();
