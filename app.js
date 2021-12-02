document.getElementById("clickSideBar").addEventListener("click", function () {
    const links = document.getElementById("links");
    const cloneLinks = links.cloneNode(true)
    const sidediv = document.createElement("div");
    const backgroundDiv = document.createElement("div");
    document.body.prepend(sidediv);
    document.body.prepend(backgroundDiv);
    sidediv.className = 'sidebar';
    backgroundDiv.className = 'sideBarBG';
    sidediv.append(cloneLinks);
    cloneLinks.classList.add("nav-list-clicked");

    backgroundDiv.addEventListener("click", function () {
        sidediv.remove();
        backgroundDiv.remove();
    });
});

let image = document.querySelector(".product1");
let array = document.querySelectorAll(".thumbnails");

for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", function () {
        image.src = `images/image-product-${i + 1}.jpg`;
        image.alt = i + 1;
    });
}

image.addEventListener("click", function () {
    const images = document.querySelector(".images");
    let arrowRight = document.createElement("span");
    let arrowLeft = document.createElement("span");
    let clonedImages = images.cloneNode(true);
    let sliderBG = document.createElement("div");

    document.body.prepend(sliderBG);
    sliderBG.classList = 'image-slider-BG';

    document.body.prepend(clonedImages);
    clonedImages.classList = "images-center";

    images.prepend(arrowRight);
    arrowRight.innerHTML = "&#8250;";
    arrowRight.classList = 'arrow arrow-right'

    images.prepend(arrowLeft);
    arrowLeft.innerHTML = "&#8249;";
    arrowLeft.classList = 'arrow arrow-left'

    document.querySelector(".sub-images").style.justifyContent = "space-evenly";
    let a = document.querySelectorAll(".thumbnails");

    for (let i = 0; i < 4; i++)
        a[i].style.width = "15%"

    const b = document.querySelector(".product1");
    arrowRight.addEventListener("click", function () {
        let z = parseInt(b.alt);
        if (z + 1 == 5)
            z = 0
        b.src = `images/image-product-${z + 1}.jpg`;
        b.alt = z + 1;
    })
    arrowLeft.addEventListener("click", function () {
        let z = parseInt(b.alt);
        if (z - 1 == 0)
            z = 5
        b.src = `images/image-product-${z - 1}.jpg`;
        b.alt = z - 1;
    })

    sliderBG.addEventListener("click", function () {
        clonedImages.remove();
        sliderBG.remove();
        arrowLeft.remove();
        arrowRight.remove();
    });
})
