export function message(target, style, text) {

    const messageContainer = document.querySelector(target);

    messageContainer.innerHTML = `<p class="${style}">${text}</p>`

}