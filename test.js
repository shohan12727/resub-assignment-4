// function cashOut(money) {
    
//     if (typeof money !== 'number' || money < 0) {
//         return "Invalid";
//     }
    


//     return money * 1.75 / 100;
// }

function validEmail(email) {
   
    if (typeof email !== 'string') {
        return "Invalid";
    }
    
    
    if (/^[\.\-_+@]/.test(email)) {
        return false;
    }
   
    if (!/@/.test(email) || email.indexOf('@') === 0 || email.lastIndexOf('@') !== email.indexOf('@')) {
        return false;
    }
    

    if (/\s/.test(email)) {
        return false;
    }
    
    if (!email.endsWith(".com")) {
        return false;
    }
    
    return true;
}
// console.log(validEmail(["jhankar@hero.com"]));
