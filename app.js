let input = prompt("Enter your choice").toLowerCase();
const list = ["Run roomba", "Approve myGate"];

while(input !== 'quit' || input !== 'q'){
    if(input === "add"){
        let addItem = prompt("Enter item");
        list.push(addItem);
        console.log(`${addItem} added to the list!`);
    }
    else if(input === "view"){
        console.log("*****************");
        for(let i = 0; i < list.length; i++)
            console.log(`${i}: ${list[i]}`);
        console.log("*****************");
    }
    else if(input === "delete"){
        let indexInput = prompt("Enter index to delete");
        let delIndex = parseInt(indexInput);
        list.splice(delIndex,1);
        console.log(`Item ${delIndex} deleted.`);
    }
    else if(input === "quit"){
        console.log("quitting");
        break;
    }
    else {
        input = alert("Invalid choice! Try again");
    }
    input = prompt("Enter your choice").toLowerCase();
}