const parseSeconds = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  return minutes + ':' + seconds;
}

export default parseSeconds;