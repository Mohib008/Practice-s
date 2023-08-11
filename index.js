const button = document.getElementById("myButton");
    button.addEventListener("click", function() {
      alert("button Cliced!!!");
    
  });


  function greet(name) {
     console.log("Hello there " + name + " !")
  }

  greet("Ahmad");
  greet("mohib");

  function calculateDiscount (price, isPremiumMember){
    if(isPremiumMember){
      return price * 0.8; // apply 20% discount for premium members
    } else {
      return price; // no discount for reguler members.
    }
  }
const regulerPrice = 100;
const premiumPrice = calculateDiscount(regulerPrice, true); // pass 'true' fro premium members.
const nonPremiumPrice = calculateDiscount(regulerPrice, false); //pass 'false' for reguler members.



//Scope Explained !!!



//Closure explained !!!

function outerFunction() {
  const outer = "I am form outerFunction!!!";
   function innerFunction() {
    console.log(outer);
   }
   return innerFunction;
}

const closureFunction = outerFunction;
      closureFunction();


function createCounter(){
  let count = 0;
  return function() {
    return ++count;
  }
}  

const counter = createCounter();
console.log(counter());
console.log(counter());


function exampleConst () {
  const x = 40;
  if(true) {
    const x = 50;
    console.log(x);
  }
  console.log(x);
}

function exampleVar() {
  var y = 20;
  if(true) {
    var y = 30;
    console.log(y);
  }
  console.log(y);
}

function exampleLet() {
  let c = 50;
  if(true){
    let c = 100;
    console.log(c);
  }
  console.log(c);
}
