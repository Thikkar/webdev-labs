/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const handleDefault = () => {
   document.querySelector("body").className = "";
}

const handleDesert = () => {
   document.querySelector("body").className = "desert";
}

const handleOcean = () => {
   document.querySelector("body").className = "ocean";
}

const handleHighContrast = () => {
   document.querySelector("body").className = "high-contrast";
}

document.querySelector("#default").addEventListener('click', handleDefault);
document.querySelector("#desert").addEventListener('click', handleDesert);
document.querySelector("#ocean").addEventListener('click', handleOcean);
document.querySelector("#high-contrast").addEventListener('click', handleHighContrast);
