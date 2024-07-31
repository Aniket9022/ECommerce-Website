document.addEventListener("DOMContentLoaded", () => {
    // Handle form submissions
    document.querySelector("#login form").addEventListener("submit", (e) => {
        e.preventDefault();
        // Add login logic here
        alert("Login form submitted");
    });

    document.querySelector("#register form").addEventListener("submit", (e) => {
        e.preventDefault();
        // Add registration logic here
        alert("Register form submitted");
    });

    document.querySelector("#address-form form").addEventListener("submit", (e) => {
        e.preventDefault();
        // Add address form logic here
        alert("Address form submitted");
    });

    document.querySelector("#billing-form form").addEventListener("submit", (e) => {
        e.preventDefault();
        // Add billing form logic here
        alert("Billing form submitted");
    });
});
