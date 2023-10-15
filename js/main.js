let preloader = document.querySelector('.preloader');
// select navbar
let navel = document.querySelector('.navbar');
// select open btn
let navtoggler = document.querySelectorAll('[data-navtoggler]')
// select overley
let overley =document.querySelector('.overley');
window.addEventListener('load',()=>{
    preloader.classList.add('remove');
})
//event function
function addevent(elements,eventtype,callback){
    elements.forEach(element => {
        element.addEventListener(eventtype,callback);
        
    });
}
function theevent(){
     // toogle active class to navbar
     navel.classList.toggle('active');
    //  toogle active to overley
    overley.classList.toggle('active');
    // add active to bode
    document.body.classList.toggle('nav-active')
}
addevent(navtoggler,'click',theevent)

// header
let header =document.querySelector('.header');
window.addEventListener('scroll',()=>{
    header.classList[this.scrollY>100?'add':'remove']('active');
})
//create a counter
// select elemt
let counter =0;
let expsection = document.querySelector('.experience');
let count = document.querySelectorAll('.count .h2');
let start = false;
function startcount(el){
    let goal = el.dataset.max;
    let countel = setInterval(() => {
       
    `${el.textContent++}`;
   
    if(el.textContent == goal){
        clearInterval(countel);
         
        
    } 
      
    }, 2000/goal);
  
       

}

window.addEventListener('scroll',()=>{
    
    if(window.scrollY >= expsection.offsetTop){
        if(!start){
            count.forEach((e)=>{
                startcount(e);
      
            })
        }
    start = true;
    }
})
        
        
       

        


