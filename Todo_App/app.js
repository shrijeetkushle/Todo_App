let todo=[];

let req=prompt("Enter the Request :");

while(true){

    if(req=="quit"){
        console.log("quitting app!");
        break;
    }

    if(req=="list"){

        console.log("---------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("---------------");

    }else if(req=="add"){

        let add=prompt("Enter the task to Add :");
        todo.push(add);
        console.log("Task Added!");

    }else if(req=="delete"){

        let idx=prompt("Enter the idx Number to delete :");
        todo.splice(idx,1);
        console.log("Task deleted!");
        
    }else{
        
        console.log("Wrong Request!");
        
    }

    req=prompt("Enter the Request :");

}
