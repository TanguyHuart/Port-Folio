const app = {

    navButton : document.querySelectorAll('.nav__button'),
    headerNav : document.querySelector('.header__nav'),
    homeButton : document.getElementById('home'),
    meButton : document.getElementById('me'),
    worksButton : document.getElementById('works'),
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
 * Fonction evenement sur le click des bouton, ramène scroll la page en fonction du nombre en parametre
 */
   handleScrollPage : (event) =>{
   
    switch(event.target){
      case app.homeButton:
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        break;
        
      case app.meButton:
        window.scroll({
          top: 400,
          left: 0,
          behavior: "smooth",
        });
       
        break;

      case app.worksButton:
        window.scroll({
          top: 800,
          left: 0,
          behavior: "smooth",
        });
        
        break;

      default:
        break;
    };
  },

   /**
    * Fonction evenement sur le scroll de la page , enlve la classe hidden avec un timeout au deux paragraphe pour décaller leur animation d'entrée
    */

   handleRemoveHidden : () => {
    if (window.scrollY >= 400 && app.meParagraphIsVisible ===false){
      app.RemoveHiddenParagraph();
      setTimeout(() => {
        app.RemoveHiddenTechnoList();
      },1250)
    }
   },

   RemoveHiddenParagraph : () => {
    
    if (window.scrollY >= 400 && app.meParagraphIsVisible ===false){
      app.mePageParagraph[0].classList.remove('hidden');
      setTimeout(() => {     
          app.mePageParagraph[1].classList.remove('hidden');        
          }, 500);
        app.meParagraphIsVisible = true;
    }
   },  

   RemoveHiddenTechnoList : () => { 
    if (window.scrollY >= 400 && app.meListIsVisible === false){
      
      for (let i = 0; i< app.mePageList.length; i++){
        setTimeout(() =>{
          app.mePageList[i].classList.remove('hidden');
        },500*i);
      };
      app.meListIsVisible = true;  
      }    
    },
  
  


    init : () => {
      app.deleteTransition();
      app.headerNav.addEventListener('click', app.handleScrollPage);
      window.addEventListener('scroll', app.handleRemoveHidden);
      // window.addEventListener('scroll', app.handleRemoveHiddenTechnoList);
    },
    



  }

app.init()
