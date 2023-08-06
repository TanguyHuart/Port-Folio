const app = {

    navButton : document.querySelectorAll('.nav__button'),
    homeButton : document.getElementById('home'),
    meButton : document.getElementById('me'),
    worksButon : document.getElementById('works'),
    mePageParagraph : document.querySelectorAll('.me-page__paragraph'),
    mePageList : document.querySelectorAll('.techno-list__item'),

    meParagraphIsVisible : false,
    meListIsVisible : false,





 /**
  * Permet de supprimer l'effet de transition des buttons pour ne pas qu'il bouge a chauque passsage de souris, 1 sec après le chargement de la page
  */
 deleteTransition : () =>{
    setTimeout(() =>{
      let i = 0;
      app.navButton.forEach(navButton => {
        navButton.classList.remove(`nav__button--animationDelay${i}`);
        i++
      })
    }, 1000);
   },

/**
 * Fonction evenement sur le click de home, ramène en haut de la page
 */
   handleScrollPageTop : () =>{
    window.scrollY = 0;
   },

   handleRemoveHiddenParagraph : () => {
    
    if (window.scrollY > 200 && app.meParagraphIsVisible ===false){
      app.mePageParagraph[0].classList.remove('hidden');
      setTimeout(() => {     
          app.mePageParagraph[1].classList.remove('hidden');        
          }, 500);
        app.meParagraphIsVisible = true;
    }
   },  

   handleRemoveHiddenTechnoList : () => { 
    if (window.scrollY > 400 && app.meListIsVisible === false){
      
      let i = 0
        setInterval(() => {
          
          app.mePageList[i].classList.remove('hidden');
          i++
          if (i === app.mePageList.length){
            clearInterval();
            app.meListIsVisible = true;
          }
        }, 500);
      }
        
        
    },
  
  


    init : () => {
      app.deleteTransition();
      app.homeButton.addEventListener('click', app.handleScrollPageTop);
      window.addEventListener('scroll', app.handleRemoveHiddenParagraph);
      window.addEventListener('scroll', app.handleRemoveHiddenTechnoList);
    },
    



  }

app.init()
