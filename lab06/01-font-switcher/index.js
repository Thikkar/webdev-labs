const makeBigger = () => {
   let currFontSize = document.querySelector("div.content").style.fontSize;

   if (!currFontSize) {
      currFontSize = "1.5em"
   } else {
      currFontSizeFloat = parseFloat(currFontSize.trimRight("em"));
      console.log(currFontSizeFloat)
      currFontSizeFloat += 0.1;
      currFontSize = (currFontSizeFloat.toString()).concat('', "em");
      console.log(currFontSize)
   }

   document.querySelector("div.content").style.fontSize = currFontSize;
};

const makeSmaller = () => {
   let currFontSize = document.querySelector("div.content").style.fontSize;

   if (!currFontSize) {
      currFontSize = "1.3em";
   } else if (currFontSize === "0.1em") {
      currFontSize = "0.1em";
   } else {
      currFontSizeFloat = parseFloat(currFontSize.trimRight("em"));
      console.log(currFontSizeFloat);
      currFontSizeFloat -= 0.1;
      currFontSize = (currFontSizeFloat.toString()).concat('', "em");
      console.log(currFontSize);
   }

   document.querySelector("div.content").style.fontSize = currFontSize;};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
