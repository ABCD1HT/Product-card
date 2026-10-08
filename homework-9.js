import { commentsList } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((num) => num >= 5);
console.log(filteredNumbers);

const movies = ["Интерстеллар", "Начало", "Матрица", "Гладиатор"];
const hasMovie = movies.includes("Матрица");
console.log(hasMovie);

function reverseArray(arr) {
  return [...arr].reverse();
}
console.log(reverseArray(numbers));
console.log(reverseArray(movies));

const comComments = commentsList.filter((comment) => comment.email.includes(".com"));
console.log(comComments);

const updatedPostIdComments = commentsList.map((comment) => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
  };
});
console.log(updatedPostIdComments);

const idAndNameComments = commentsList.map((comment) => {
  return {
    id: comment.id,
    name: comment.name
  };
});
console.log(idAndNameComments);

const validatedComments = commentsList.map((comment) => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180
  };
});
console.log(validatedComments);

const emailsViaReduce = commentsList.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailsViaReduce);

const emailsViaMap = commentsList.map((comment) => comment.email);
console.log(emailsViaMap);

const emailsStringToString = emailsViaMap.toString();
console.log(emailsStringToString);

const emailsStringJoin = emailsViaMap.join(", ");
console.log(emailsStringJoin);