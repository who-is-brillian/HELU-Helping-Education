

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

