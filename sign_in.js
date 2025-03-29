document.getElementById("signin-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    
    if (name && age && email) {
        alert(`Welcome, ${name}!\nAge: ${age}\nEmail: ${email}`);
        window.location.href = "index.html";
    } else {
        alert("Please fill in all fields.");
    }
});
