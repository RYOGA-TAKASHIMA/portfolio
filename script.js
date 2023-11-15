
class box {
    constructor(){

    }

    //ハンバーガーメニュー//
    hamburger_menu(){
        const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector('.hamburger_menu');
        
        hamburger.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        menu.classList.toggle('active'); 
    });
    }

    //タブメニュー//
    tab(){
        const tabs = document.querySelectorAll('.tabs li a');
        const contents = document.querySelectorAll('.contents li');
    
        console.log(tabs);
        console.log(contents);
    
        for(let i = 0; i < tabs.length; i++){
            tabs[i].addEventListener('click',(e)=>{
                e.preventDefault();
    
                for(let j = 0; j < tabs.length; j++){
                    tabs[j].classList.remove('active');
                }
                for(let j = 0; j < contents.length; j++){
                    contents[j].classList.remove('active');
                }
                tabs[i].classList.add('active');
                contents[i].classList.add('active');
            });
        }
    }

      //スクロールTOP//
      scroll() {

        const scroll = document.querySelector('.scroll_top');
  
       window.addEventListener('scroll',()=>{
          let scrollY = window.scrollY;
          if(600 < scrollY){
           scroll.classList.add('on');
          }else{
           scroll.classList.remove('on');
          }
       });
       
       scroll.addEventListener("click", () => {
           window.scroll({
             top: 0,
             behavior: "smooth",
           });
         });
      }

      //スクロールスライド表示
      slideleft(){

        const showElements = document.querySelectorAll(".slide_animation_left");
           window.addEventListener("scroll",function() {
              for(let i = 0; i < showElements.length; i++){
                  const getElementDistance = showElements[i].getBoundingClientRect().top + showElements[i].clientHeight * .5;
                  if(window.innerHeight > getElementDistance){
                      showElements[i].classList.add("show");
                  }
                }
        });
       }
}

const box1 = new box();
box1.hamburger_menu();
box1.tab();
box1.scroll();
box1.slideleft();



