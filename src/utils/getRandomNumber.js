const getRandomNumber = (min, max) => {
  const amplitude = Math.abs(max - min);
  // la amplitud la obteniemos de la resta de nuestras props --> min y max, si queremos que el orden no afecte nuestra respuesta, podemos hacer que siempre sean positivos gracias al valor abosuto que JS podemos usar el siguiente metod: Math.abs()
  const randomNumberByNumber = Math.round(Math.random() * amplitude);
  return randomNumberByNumber + min;
};

export default getRandomNumber;
