function learnToCode(student = "Carter") {
    console.log(`${student} needs to leave`);
}
 learnToCode()
 
function favFilm(title , genre) {
    return `${title} is my favorite movie, it is a ${genre} movie.`;
};
 
favFilm('The Dirt', 'Comedy Drama');

function func(name, food){
    return `${name} favorite food is ${food}.`;
}

func("Carter's", "apples");

const txt = document.querySelector(".text");
txt.innerText = func("Carter's", "apples");
const txt2 = document.querySelector(".texttwo");
txt2.innerText = favFilm("The Dirt", "Comedy Drama");
