const sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function() {
    const refreshHeading = document.getElementById("refresh");
    
    refreshHeading.addEventListener("click", function() {
      // Scroll back to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  
      // Reload the page after scrolling to the top
      setTimeout(function() {
        location.reload();
      }, 1000); // Adjust the delay as needed
    });
  });
  
  
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        
        if (target) {
          let offset = 0; // Default offset value
          
          if (target.classList.contains("home")) {
            offset = 400; // Adjust offset for section 1
          } else if (target.classList.contains("about")) {
            offset = 200; // Adjust offset for section 2
          } else if (target.classList.contains("skills")) {
            offset = 100; // Adjust offset for section 3
          } else if (target.classList.contains("portfolio")) {
            offset = 50; // Adjust offset for section 4
          } else if (target.classList.contains("contact")) {
            offset = 50; // Adjust offset for section 5
          }
          
          window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
          });
        }
      });
    });
  });
  

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxRBrpsZhF4A8M5cTCA_sIEOKwQ84hKd7zdkQ3Yz_vfdYvAmewIcQLaUkdr2KibzxP3/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message Sent Successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })