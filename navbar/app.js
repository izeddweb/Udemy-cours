//  Set Variable

const links = document.querySelectorAll('[data-page]');
const indicator = document.querySelectorAll('.indicator');
console.log(indicator);




//       Set Function 

links.forEach( (link) => {
  link.addEventListener("click", ()=> {
    links.forEach((link)=>{
      link.classList.remove('style')
    })
    link.classList.add('style');

  })
})



// working on observer concept



const boxs = document.querySelectorAll('.test');
console.log(boxs);