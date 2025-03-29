document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (name && age && email && password) 
    {
        alert(`Welcome, ${name}!\nAge: ${age}\nEmail: ${email}\nAccount created successfully!`);
        window.location.href = "index.html";
    } else {
        alert("Please fill in all fields.");
    }
});
