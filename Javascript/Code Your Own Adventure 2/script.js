var user = prompt("What do you want to do?").toLowerCase();
var purple = true;
var blue = false;
var color = true;

switch(user){
    case 'finish':
        if(purple && color){
        console.log("let's finish this");
        } 
        
        else{
            console.log("wait a minute");
        }
        break;
    case 'leave':
        if(purple || blue){
        console.log("you can't leave until you finish this!");
        } 
        
        else {
            console.log("alright lets do this");
        }
        break;
        
    case 'learn more':
        console.log("alright");
        break;
        
    default:
        console.log("lets see what we can do!");
};

