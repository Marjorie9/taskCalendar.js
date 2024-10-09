// Function to get the task for a given day
function getTaskForDay(day) {
    switch (day) {
        case "Monday":
            console.log("Task for Monday: Clean the house.");
            break;
        case "Tuesday":
            console.log("Task for Tuesday: Cook for lunch.");
            break;
        case "Wednesday":
            console.log("Task for Wednesday: To buy groceries.");
            break;
        case "Thursday":
            console.log("Task for Thursday: Go to the beach.");
            break;
        case "Friday":
            console.log("Task for Friday: Do the laundry.");
            break;
        case "Saturday":
            console.log("Task for Saturday: Bath the dogs.");
            break;
        case "Sunday":
            console.log("Task for Sunday: Go to the church.");
            break;
            default:
            console.log("Unexpected input. Please enter a valid day of the week (e.g., Monday, Tuesday).");
        }
    }
    
    // Prompt the user to enter a day of the week
    const userInput = prompt("Enter a day of the week:");    