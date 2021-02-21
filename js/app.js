/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/




/**
 * Define Global Variables
 * 
*/

// select all sections on the page and store it into a global constant
const theAllSections = document.querySelectorAll('section');

// select all anchors on the page and store it into a global constant
const theAllAnchors = document.querySelectorAll('a');

                



/**
 * End Global Variables
 * Start declare External functions
 * 
*/

// remove active class from all sections
function removeActiveClassFromAllSections(){

  theAllSections.forEach((sectionName)=> {
      sectionName.classList.remove('your-active-class');
  });
}

// add active class to the section which appear on page
function AddClassActivitionToAntherSection(activeSectionID){
      let activesection = document.getElementById(activeSectionID);
      activesection.classList.add('your-active-class');
}




/**
 * End declare External functions
 * Begin Main Functions
 * 
*/

// build the nav and link sections with nav

function buildTheNavBar () {
    theAllSections.forEach((sectionName)=> {
        const unorderList =  document.getElementById('navbar__list');
        let listItem = document.createElement('li');
        listItem.innerHTML = `<a href = "#${sectionName.id}"> ${sectionName.id} </a>`;
        unorderList.appendChild(listItem);
    });
}




// Scroll effect function loop the active class over sections to view the active section

function AffectWhileScrolling(){
  window.addEventListener('scroll' , () =>{
      theAllSections.forEach((sectionNumber)=>{
        const sectionViewBored = document.documentElement.scrollTop;
        if(sectionViewBored >= sectionNumber.offsetTop && sectionViewBored < sectionNumber.offsetHeight + sectionNumber.offsetTop){
          removeActiveClassFromAllSections();
          AddClassActivitionToAntherSection(sectionNumber.id);
        }
      });
  
      }
    )
    
  }

  // smoothBehavour

function smoothBehavour() {
    theAllAnchors.forEach( (oneOFAnchors)=>{

      oneOFAnchors.addEventListener('click', (eventOfClick)=>{
      eventOfClick.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
      
    });

  });
}
    





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build nav  & link it with sections

buildTheNavBar();

// scroll effects

AffectWhileScrolling();

// smooth-behavour

smoothBehavour();