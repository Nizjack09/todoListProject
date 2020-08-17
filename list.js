let todos =["wake"];
let input = prompt("what are you gonna do right now?");

while(input !== "quit"){
    if(input === "list"){
        console.log(todos);
    }
    else if(input === "new") {
        let newTodo = prompt("Enter New To do");
        todos.push(newTodo);
}
input = prompt("what would like to do");
}
console.log("wow, YOU HAVE QUIT");