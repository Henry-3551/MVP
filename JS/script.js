const menuBtn = document.querySelector("#menubtn");

let icon1 = document.getElementById("icon1");
  let icon2 = document.getElementById("icon2");
  
  var body = document.getElementById("body");
  var section = document.querySelector("#section");
  var main = document.querySelector("#main");
  var navBar = document.querySelector(".nav-bar");
  

menuBtn.addEventListener("click", function () {
  
  icon1.classList.toggle("hide");
  icon2.classList.toggle("show");
  
  navBar.classList.toggle("active");
  body.classList.toggle("active");
  section.classList.toggle("active");
  main.classList.toggle("active");
  
});



// sticky header nav
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
var header = document.querySelector(".header");

  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add("active");
  }else {
    header.classList.remove("active");
  }
}


var typed = new Typed('.type', {
    strings:  [
      "a Web developer", 
      "an SEO Expert", 
      "a Chess Prodigy", 
      "a Proofreader"
      ],
    typeSpeed: 90,
    backSpeed: 50,
    loop: true
  })

// display elements on page scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
     entry.target.classList.add("showedTop"); entry.target.classList.add("showed");
    } 
    /*else {
      entry.target.classList.remove("showed")
    }*/
  });
});

const hiddenElementsTop = document.querySelectorAll('.hiddenTop');
hiddenElementsTop.forEach((el) => observer.observe(el));


const hiddenElementsLeft = document.querySelectorAll('.hiddenLeft');
hiddenElementsLeft.forEach((el) => observer.observe(el));

/*const hiddenElementsRight = document.querySelectorAll('.hiddenRight');
hiddenElementsRight.forEach((el) => observer.observe(el));
*/


// FAQS Dropdown
const faqsDrop = document.querySelectorAll('.faqs-drop');

    faqsDrop.addEventListener('click', showFaqs());
    
   function showFaqs() {
        
    }
