// Code your solutions in this file
// for(let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    

// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);





function writeCards(name) {

    let messages = [];
    for(let i = 0; i < name.length; i++){
    let message = `Thank you, ${name[i]}, for the wonderful surprise gift!`;
    
     messages.push(message);
 

   
     
}

return messages;
}
let count;
function countDown(count){
    while(count >=0){
        console.log(count);
        count--;
        
    }
   
}

countDown(count);
