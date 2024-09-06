import chalk from 'chalk';
let cb = chalk.blue;     //correct
let cr = chalk.red;      //wrong
let info=chalk.bgGreen;
let log = console.log;

//totalAmt
let totalAmt=0;

//date
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

let mixture = `${day}-${month}-${year}`;
//id
let idCounter = 1;

//storage
let expense_Storage = [];

function Banner() {
    process.stdout.write("enter some text:")
};


let MAGICStrs={
    add: "add --desc",
    list:"list",
    delete: "delete",
    summary:"summary",
    exit:"exit",
}

const expenses_CLI = (data) => {
    let data_to_Str = data.toString().trim();

    if (data_to_Str.startsWith(MAGICStrs.add)) {
        let textSplit = data_to_Str.split("add --desc");
        let taskExtract = textSplit[1].split("--amount");

        //get the data 
        let desc = taskExtract[0];
        let Amt = parseInt(taskExtract[1]);

        if (isNaN(Amt) || (!desc || desc.trim() === "")) {
            log(cr("Invalid please provide valid information/.."))
        } else {
            const expense =
            {
                date: mixture,
                id: idCounter++,
                desc,
                Amt
            };
            expense_Storage.push(expense);
            log(expense_Storage)
        }
    } else if (data_to_Str === MAGICStrs.list) {
        if (expense_Storage.length > 0) {
            console.table(expense_Storage);
        } else {
            log(cr("No expenses recorded"))
        }
    } else if (data_to_Str.startsWith(MAGICStrs.delete)) {
        let delete_Id_Extraction = data_to_Str.split("delete --id");
        let parsed_Id = parseInt(delete_Id_Extraction[1]);

        const index = expense_Storage.findIndex(exp => exp.id === parsed_Id);
        if (index !== -1) {
            let deleteItem = expense_Storage.splice(index, 1);
            log(`Deleted item: ${JSON.stringify(deleteItem)}`);
        } else {
            log(cr("Item not found"));
        }

    }else if (data_to_Str==MAGICStrs.summary){
        totalAmt = expense_Storage.reduce((sum, ele) => sum + ele.Amt, 0);
        log(`Total Amount: ${info(totalAmt)}`);
            
    }else if(data_to_Str==MAGICStrs.exit){
        log(cr("Exiting..."))
        process.exit();
    }
       


    Banner();
}


process.stdin.on('data', expenses_CLI);

Banner();

