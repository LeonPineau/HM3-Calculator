const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("res");

// buttons.addEventListener((button),()=>) FAUXX

buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        console.log(e.target.id);
        result.textContent += e.target.id;
    });
});

//En javascript même pas besoin de declarer les bouttons si on a un id!!!!!!
//En javascript même pas besoin de declarer les bouttons si on a un id!!!!!!
/* LA PREUVE : */
console.log(equal); //(equal est l'id du "=")
//En javascript même pas besoin de declarer les bouttons si on a un id!!!!!!
//En javascript même pas besoin de declarer les bouttons si on a un id!!!!!!

equal.addEventListener('click', ()=>{
    result.textContent = eval(result.textContent);
})

clear.addEventListener('click', ()=>{
    result.textContent = "";
})

del.addEventListener('click', ()=>{
    result.textContent = result.textContent.substring(0,result.textContent.length-1);
})