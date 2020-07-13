function personalQuestions() {
  let age = prompt("What's your age?");
  let gender = prompt("What's your gender?");
  let town = prompt("Which town do you live in?");
  confirm(
    "You are " +
      age +
      " years old, your gender is " +
      gender +
      " and you live in " +
      town
  );
}

personalQuestions();
