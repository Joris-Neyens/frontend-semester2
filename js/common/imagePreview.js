export function imagePreview() {
    const preview = document.querySelector("#preview");
    const image = document.querySelector(".edit-image");
    
    preview.addEventListener("click", function() {
        const url = document.querySelector("#image-url")
        const urlValue = url.value;
    
        image.innerHTML = `<img src="${urlValue}" class="col-6">`
    
        
    })
}