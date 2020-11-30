export function logout() {
    
    const logOutButton = document.querySelectorAll(".fa-sign-out-alt");

    logOutButton.forEach(function(button) {

        button.addEventListener("click", removeFromStorage)

        function removeFromStorage() {
            localStorage.removeItem("key");
            localStorage.removeItem("name");
            location.href = "/admin.html"
        }

    })


   
    
}