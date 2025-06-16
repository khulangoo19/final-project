document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const popup = document.getElementById('successPopup');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        "Accept":"application/json"
      }
    });

    if (response.ok){
      form.reset();
      popup.style.display = "block";
    } else{
      alert("Oops! Something went wrong.");
    }

    popup.classList.add('show');

    // Hide after 3 seconds
    setTimeout(() => {
      popup.classList.remove('show');
    }, 3000);
  });
});









