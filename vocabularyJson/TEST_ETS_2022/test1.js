const ANSWER_KEY = [
  "b",
  "c",
  "b",
  "a",
  "d",
  "c",
  "b",
  "a",
  "c",
  "c",
  "a",
  "b",
  "c",
  "a",
  "b",
  "a",
  "c",
  "b",
  "c",
  "a",
  "c",
  "b",
  "a",
  "b",
  "c",
  "c",
  "a",
  "a",
  "a",
  "b",
  "c",
  "d",
  "b",
  "b",
  "a",
  "d",
  "c",
  "a",
  "d",
  "b",
  "c",
  "a",
  "b",
  "d",
  "b",
  "a",
  "d",
  "c",
  "b",
  "b",
  "b",
  "c",
  "d",
  "b",
  "a",
  "a",
  "d",
  "c",
  "c",
  "a",
  "d",
  "c",
  "c",
  "a",
  "c",
  "c",
  "d",
  "b",
  "c",
  "d",
  "d",
  "b",
  "c",
  "a",
  "d",
  "d",
  "d",
  "c",
  "d",
  "a",
  "b",
  "c",
  "c",
  "a",
  "d",
  "b",
  "a",
  "c",
  "c",
  "b",
  "d",
  "b",
  "c",
  "d",
  "a",
  "d",
  "c",
  "a",
  "d",
  "c",
];

ANSWER_KEY.forEach((answer, i) => {
  ANSWER_KEY[i] = i + 1 + answer + "(";
});

export default ANSWER_KEY;