/* Que devuelven estos codigos */

/* let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length]); */ // --> undefined

/* let grupoDeAmigos = [
  "Harry",
  "Ron",
  "Hermione",
  "Spiderman",
  "Hulk",
  "Ironman",
  "Penélope Glamour",
  "Pierre Nodoyuna",
  "Patán",
];
console.log(grupoDeAmigos[5]); */ // --> Ironman

/* let str = "un string cualquiera";
let arrayAleatorio = [
  "Digital",
  "House",
  "true",
  "string",
  "123",
  "false",
  "54",
  str,
];
console.log(arrayAleatorio[arrayAleatorio.length - 1]); */ /* --> 54 */

/* Colecciones de películas */

const movies = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];
let upperCaseMovies = [];
function upperCase(arr) {
  for (let i = 0; i < arr.length; i++) {
    upperCaseMovies.push(arr[i].toUpperCase());
  }
  return upperCaseMovies;
}

upperCase(movies);

const movies2 = [
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];

/* const joinMovies = (arr, arr2) => upperCase(arr.concat(arr2));

console.log(joinMovies(movies, movies2))

let deleted
const deleteOne = (arr) => deleted = arr.pop()
console.log(deleteOne(movies2)) */

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

/* const compareScores = (x, y) => x.toString() === y.toString()

console.log(compareScores(asiaScores, euroScores)) */

const invertArray = (x) => x.reverse();

const imprimirInverso = (x) => {
  let invertido = invertArray(x);
  for (let i = 0; i < invertido.length; i++) {
    console.log(invertido[i]);
  }
  return "fin"
};

console.log(imprimirInverso(movies))