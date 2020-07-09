// const about = document.getElementById('about')
// const btn = document.querySelector('.btn-scroll');
// console.log(btn, about);

// btn.addEventListener('click', function (e) {
//   about.scrollIntoView({
//       behavior: "smooth",
//       block: "center" 
//   }
//   )
// })

// var hiddenElement = document.getElementById("about");
// var btn = document.querySelector('.btn-scroll');

// function handleButtonClick() {
//   hiddenElement.scrollIntoView({
//     behavior: "smooth",
//     block: "center",
//   });
// }

// btn.addEventListener('click', handleButtonClick);

const anchors = document.querySelectorAll('a[href*="#"]');

console.log(anchors);


for( let anchor of anchors) {
  anchor.addEventListener("click", function (e) { 
    e.preventDefault();
    const blockID = anchor.getAttribute("href")
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
   })
}