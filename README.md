[# expense_tracker

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.js
```

This project was created using `bun init` in bun v1.1.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.


let lengt_ofTask=task.length;
        let len_of_AMT=6;                 //AMOUNT=>6
        
        let t2=task.slice(lengt_ofTask-3).trim();
        //console.log(t2);
        
        let parsed_Amt=parseInt(t2)                    //converted amount from str to Number
        let getTask=lengt_ofTask-t2.length;   //get Only the string-amt=>product

        https://roadmap.sh/projects/expense-tracker
