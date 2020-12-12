export function modalBody() {

    const basketButton = document.querySelector("#basket-button");

    basketButton.addEventListener("click", modalBodyHtml)

    function modalBodyHtml() {
   
    const title = this.dataset.title;
    const image = this.dataset.image;

    const modalBody = document.querySelector(".modal-body");

    modalBody.innerHTML = `<h3 class="text-center">${title}</h3>
                            <img class="col-8 offset-2" src="${image}" alt="image of bicycle ${title}">`

    }
}