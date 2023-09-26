(() => {
  enum AudioLevel {
    min = 1,
    medium,
    max = 10,
  }

  let currentAudio: AudioLevel = AudioLevel.min;

  console.log(currentAudio);
  console.log(AudioLevel);
})();
