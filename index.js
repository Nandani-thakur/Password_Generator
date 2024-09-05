const inputbox=document.querySelector("#Password");

const length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const specialChar="!@#$%^&*()_+-={}:<>?";
const allChar=upperCase+lowerCase+numbers+specialChar;
function passwordGenerator(){
    let password="";
    password +=upperCase[Math.floor(Math.random()*upperCase.length)];
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password +=numbers[Math.floor(Math.random()*numbers.length)];
    password +=specialChar[Math.floor(Math.random()*specialChar.length)];
    while(length>password.length){
        password +=allChar[Math.floor(Math.random()*allChar.length)];
    }
    inputbox.value=password;

}

function copyPassword(){
    inputbox.select();
    document.execCommand("copy");

}