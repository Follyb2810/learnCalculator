// confirm("who are you")
let btn = document.querySelector(".calBtn");
let inputA = document.querySelector("#input1");
let inputB = document.querySelector("#input2");
let referal = document.querySelectorAll(".referal")
let layerTotal = document.querySelectorAll(".layerTotal")
let total =document.querySelector("#total")
// console.log(inputB)
// inputA.innerText = a
// console.log(b) 

//!calculation function
// function doCall(a,b){
//  a = inputA.valueAsNumber;
//  b = inputB.valueAsNumber;
//   sum=a+b;
//  return sum;
// console.log(a b)
// }
// btn.addEventListener("click",doCall)
// doCall(2,3)
// btn.addEventListener("input",()=>{
//     console.log(inputA.innerText);
// })\
btn.addEventListener("click",function(a,b){
     a=inputA.value;
     b=inputB.value;
    let firstInput=parseInt(a)
    let secondInput=parseInt(b)
    referal[0].textContent=firstInput ;
    layerTotal[0].textContent="$"+firstInput ;
   
    // let sum=firstInput + secondInput
    // console.log(sum)
    // total.innerText=sum
    setTimeout(()=>{
          let second = firstInput * secondInput;
          referal[1].textContent=second ;
          layerTotal[1].textContent="$"+ second ;
    setTimeout(()=>{
        let third = second * secondInput;
        // console.log(third)
        referal[2].textContent=third ;
        layerTotal[2].textContent="$"+ third ;
    setTimeout(()=>{
        let fourth = third * secondInput;
        // console.log(fourth)
        referal[3].textContent=fourth ;
        layerTotal[3].textContent="$"+ fourth ;
    setTimeout(()=>{
            let fifth = fourth * secondInput;
            // console.log(fifth)
            referal[4].textContent=fifth ;
            layerTotal[4].textContent="$"+ fifth ;
            let sum= firstInput + second+ third + fourth + fifth;
            total.innerText="$" + sum
            console.log(sum)
        },1000)    
    },1000)
    },1000)
    },1000)
    // let sum=firstInput + secondInput
    // let sum= firstInput + second + third + fourth + fifth
    // console.log(sum)
    // total.innerText=sum
    // a=""
    // b=""
})
// let layer = document.querySelectorAll(".Layer")
// console.log(layer.textContent)
// console.log(layer[0].textContent)
// for(let i=0;i<=layer.length +1;i++){
//     // let count = 0;
//     layer[i].innerHTML = i;
//     console.log(i)
// }
//  var i = 1;
//  while(i<=layer.length ){
//      layer[i].innerHTML = i;
//      console.log(i)
//      i++
//  }

// layer.forEach((v,i)=>{
//  console.log(i)
// })