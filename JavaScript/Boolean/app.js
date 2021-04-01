let input = prompt("Enter any of the 4 terms: ")
const todoList = [];
while (true) {



    if (input === 'New') {
        let todo = prompt("Add your Todo: ").trim();
        todoList.push(todo);
        console.log(`Todo ${todo} added to the list`)
    }
    else if (input === 'List') {

        console.log(`****************`);
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i + 1}. ${todoList[i]}`);
        }
        console.log(`****************`);

    } else if (input === 'Delete') {

        let del = parseInt(prompt("Enter the index you want to delete? "));

        if (del < 0 || del >= todoList.length) {
            console.log("Invalid index");
        } else {
            todoList.splice(del - 1, 1);
            console.log(`Deleted a todo`)
        }
    } else if (input === 'Quit') {
        break;
    }

    input = prompt("Enter any of the 4 terms: ")
}