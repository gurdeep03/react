// back to top
// gurman
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    // console.log(pos);
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let ScrollValue = Math.round((pos * 100) / calcHeight);
    // console.log(ScrollValue);

    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#522522 ${ScrollValue}%, #d7d7d7 ${ScrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// JavaScript for filtering searches related to daily household services
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
  
    searchButton.addEventListener('click', function () {
      const userInput = searchInput.value.toLowerCase();
      const householdServices = ['cleaning', 'cooking', 'laundry', 'gardening', 'plumbing', 'electrician', 'babysitting'];
  
      let isHouseholdService = false;
      householdServices.forEach(function (service) {
        if (userInput.includes(service)) {
          isHouseholdService = true;
        }
      });
  
      if (!isHouseholdService) {
        alert('Please enter a search related to daily household services.');
        return;
      }
  
      // Perform your search or any other action here
      console.log('Searching for:', userInput);
    });
  });