export function logout() {

    
    
    const logOutButton = document.querySelectorAll(".fa-sign-out-alt");
    const tooltip = document.querySelector(".tool-tip");
 

    logOutButton.forEach(function(button) {

        button.addEventListener("mouseover", function(){
            tooltip.style.display="block"
        })
        button.addEventListener("mouseout", function() {
            tooltip.style.display="none"
        })

        button.addEventListener("click", removeFromStorage)

        function removeFromStorage() {
            localStorage.removeItem("key");
            localStorage.removeItem("name");
            location.href = "/admin.html"
        }
    })
    
}