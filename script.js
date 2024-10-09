// Ini untuk Icon social Footer
const ytIcons = document.getElementById('youtube');
const fbIcons = document.getElementById('facebook');
const liIcons = document.getElementById('linkedin');
const waIcons = document.getElementById('whatsapp');
const EmIcons = document.getElementById('email');
const textYt = document.getElementById('textYt');
const textFb = document.getElementById('textFb');
const textLi = document.getElementById('textLi');
const textWa = document.getElementById('textWa');
const textEm = document.getElementById('textEm');
function social(icons, textIcons){
icons.addEventListener('click', function(){
   textIcons.classList.remove('d-none')
})
}

social(ytIcons, textYt)
social(fbIcons, textFb)
social(liIcons, textLi)
social(waIcons, textWa)
social(EmIcons, textEm)

const flipCard1 = document.getElementById('card-1');
const flipCard2 = document.getElementById('card-2');
const flipCard3 = document.getElementById('card-3');
const flipCard4 = document.getElementById('card-4');
const nameMentors1 = document.querySelectorAll(".nameMentor-1");
const nameMentors2 = document.querySelectorAll(".nameMentor-2");
const nameMentors3 = document.querySelectorAll(".nameMentor-3");
const nameMentors4 = document.querySelectorAll(".nameMentor-4");

// Fungsi untuk Card Mentor
function toggleVisibility(elements) {
    elements.forEach(element => {
        if (element.classList.contains("d-block")) {
            element.classList.replace("d-block", "d-none");
        } else {
            element.classList.replace("d-none", "d-block");
        }
    });
}

function resetVisibility(elements, delay) {
    setTimeout(function() {
        elements.forEach(element => {
            if (element.classList.contains("d-block")) {
                element.classList.replace("d-block", "d-none");
            }
        });
    }, delay); 
}

flipCard1.addEventListener('click', function() {
  toggleVisibility(nameMentors1);  
  resetVisibility(nameMentors1, 5000);  
});

flipCard2.addEventListener('click', function() {
  toggleVisibility(nameMentors2);
  resetVisibility(nameMentors2, 5000);  
 });

flipCard3.addEventListener('click', function() {
  toggleVisibility(nameMentors3); 
  resetVisibility(nameMentors3, 5000);  
});

flipCard4.addEventListener('click', function() {
  toggleVisibility(nameMentors4); 
  resetVisibility(nameMentors4, 5000);  
});

