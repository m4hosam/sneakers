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
    let width = document.documentElement.clientWidth;
    if (width >= 900) {
        const images = document.querySelector(".images");
        const arrowRight = document.querySelector(".arrow-right");
        const arrowLeft = document.querySelector(".arrow-left");
        const clonedImages = images.cloneNode(true);
        const sliderBG = document.createElement("div");
        const arrows = document.querySelectorAll(".arrow");

        document.body.prepend(sliderBG);
        sliderBG.classList = 'image-slider-BG';

        document.body.prepend(clonedImages);
        clonedImages.classList = "images-center";

        for (let e of arrows)
            e.style.display = "block";

        document.querySelector(".sub-images").style.justifyContent = "space-evenly";
        const a = document.querySelectorAll(".thumbnails");

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
            for (let e of arrows)
                e.style.display = "none";
        });
    }
})
