export const prettifyTime = timeString => {
  const splittedTime = timeString.match(/[0-9]+/g);

  return `${splittedTime[0]}h ${splittedTime[1]}min`;
};
