/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

let dyslexiaMode = true;

const handleDyslexia = () => {
  if (dyslexiaMode) {
    document.querySelector("body").className = "dyslexia-mode";
  } else {
    document.querySelector("body").className = "";
  }  

  dyslexiaMode = !dyslexiaMode
}

document.querySelector("#dyslexia-toggle").addEventListener('click', handleDyslexia);