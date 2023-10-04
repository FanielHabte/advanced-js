
const firstName= ` Faniel`
const lastName= `Habte`
const yearsOfStudy= `2023`
const goal= `gradauate by 2024`

export{firstName,lastName,yearsOfStudy,goal};

const input =document.querySelector("#degreeC");
const outPut =document.querySelector(".output");
const converterBtn = document.querySelector(".calculator");


converterBtn.addEventListener("click",()=>{
   
   
    const value = input.value
    const degreeF = (value -32)*5/9
       
    

    outPut.textContent = `${degreeF.toFixed(1)}°C`


})

// 32°F − 32) × 5/9 = 0°C