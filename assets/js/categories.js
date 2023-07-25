$(document).ready(function () {
    $(".filterbyrating").click(function () {
        $("#list").slideToggle("slow");
    });
});



// back-to-top js start///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var btn = $('#back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// back-to-top js end///////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// filterbyprice start/////////////////////////////////////////////////////////////////////////////////////
const range = document.querySelectorAll(".range-slider span input");
progress = document.querySelector(".range-slider .progress");
let gap = 0.1;
const inputValue = document.querySelectorAll(".numberVal input");

range.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minRange = parseInt(range[0].value);
        let maxRange = parseInt(range[1].value);

        if (maxRange - minRange < gap) {
            if (e.target.className === "range-min") {
                range[0].value = maxRange - gap;
            } else {
                range[1].value = minRange + gap;
            }
        } else {
            progress.style.left = (minRange / range[0].max) * 100 + "%";
            progress.style.right = 100 - (maxRange / range[1].max) * 100 + "%";
            inputValue[0].value = minRange;
            inputValue[1].value = maxRange;
        }
    });
});
// filterbyprice end/////////////////////////////////////////////////////////////////////////////////////


// function filterCategoryDisplay() {
//     let categoryClose = document.querySelector('.shopfiltercategoriestitle--close');
//     let categoryDisplay = document.querySelector('.shopfiltercategoriesdisplay');
//     const categoriesCloseIcon = categoryClose.children;


//     categoryClose.addEventListener('click', function () {
//         if (categoryDisplay.classList.contains('display-c-active')) {
//             for (let i = 0; i < categoriesCloseIcon.length; i++) {
//                 const categoryCloseIcon = categoriesCloseIcon[i];
//                 categoryCloseIcon.style.transform = 'rotate(0deg)';
//             }
//             categoryDisplay.classList.remove('display-c-active');
//         } else {
//             for (let i = 0; i < categoriesCloseIcon.length; i++) {
//                 const categoryCloseIcon = categoriesCloseIcon[i];
//                 categoryCloseIcon.style.transform = 'rotate(180deg)';
//                 categoriesCloseIcon.style.transform = 'all 0.6s'
//             }
//             categoryDisplay.classList.add('display-c-active');
//         }
//     })
// }