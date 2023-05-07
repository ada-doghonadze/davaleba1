// function calculate (a,b){
//     if(typeof a === 'string')
//     {return "შეცდომა მატრიცაში"};

//     if(typeof b === 'string')
//     { return "შეცდომა მატრიცაში"};

//     return a+b;
// }

// console.log(calculate(2,3));

// function calculate (a){
//     if(typeof a === 'string')
//     {return false};
    
//     return (a - 32) * 5/9;
    
// };

// console.log(calculate(78));


function calculate (a, b, symbol){

switch(symbol) {
 case '+':
    a+b;
    console.log(a+b);
    break;
case '-':
    a-b;
    console.log(a-b);
    break;
case '*':
    a*b;
    console.log(a*b);
    break;
case '/':
    a/b;
    console.log(a/b);
    break;
}

};

console.log(calculate(2,3,'*'));