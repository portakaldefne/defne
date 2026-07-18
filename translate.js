//lets hope this works
//no onload! craaazy!

let i ;
var eng = document.querySelectorAll(".englishContent");
var tur = document.querySelectorAll(".turkishContent");
var translate = function(a,b){
  for (i=0;i<a.length;i++){
    a[i].style.display="none";
    }
  for (i=0;i<b.length;i++){
    b[i].style.display="block";
    }
};
// this scope is morally wrong! but I'm only using this shit bc I want a bilingual page, I won't use js for anything else (probably)
var selector = document.querySelector("#languageSelector"); //for readability's sake

selector.addEventListener("change",function(){
    if (selector.value == "en"){
      translate(tur,eng);
    }
    if (selector.value == "tr"){
      translate(eng,tur);
    }
});

//for future me;
//to integrate this into a new page, here are all the variables
//<select> = languageSelector
//eng/tur are xContent
//selector values are "en" and "tr"
//you need nothing else
