const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");
const arrows = document.querySelectorAll(".arrow");
const image = document.querySelector(".product1");
const array = document.querySelectorAll(".thumbnails");
const productNum = document.querySelector("#span-product-no");
let width = document.documentElement.clientWidth;

// side bar js
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


//  Listing to the subimages click
let flag = 0;
for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", function () {
        image.src = `images/image-product-${i + 1}.jpg`;
        image.alt = i + 1;
        array[i].style.outline = ".2rem solid hsl(26, 100%, 55%)";
        array[i].style.opacity = ".5";
        // removing the selection from the previos element
        array[flag].style.opacity = "1";
        array[flag].style.outline = "0";
        flag = i;
    });
}



arrowRight.addEventListener("click", function () {
    width = document.documentElement.clientWidth;
    if (width <= 900) {
        let z = parseInt(image.alt);
        if (z + 1 == 5)
            z = 0
        image.src = `images/image-product-${z + 1}.jpg`;
        image.alt = z + 1;
    }

})
arrowLeft.addEventListener("click", function () {
    width = document.documentElement.clientWidth;
    if (width <= 900) {
        let z = parseInt(image.alt);
        if (z - 1 == 0)
            z = 5
        image.src = `images/image-product-${z - 1}.jpg`;
        image.alt = z - 1;
    }
})




image.addEventListener("click", function () {
    width = document.documentElement.clientWidth;
    if (width >= 900) {
        const images = document.querySelector(".images");
        const clonedImages = images.cloneNode(true);
        const sliderBG = document.createElement("div");


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
        let flag2 = flag;


        arrowRight.addEventListener("click", function () {
            let z = parseInt(b.alt);
            if (z + 1 == 5)
                z = 0
            b.src = `images/image-product-${z + 1}.jpg`;
            a[z].style.outline = ".2rem solid hsl(26, 100%, 55%)";
            a[z].style.filter = "contrast(.5)";
            a[flag2].style.outline = "0";
            a[flag2].style.filter = "contrast(1)";
            flag2 = z;
            b.alt = z + 1;
        })
        arrowLeft.addEventListener("click", function () {
            let z = parseInt(b.alt);
            if (z - 1 == 0)
                z = 5
            b.src = `images/image-product-${z - 1}.jpg`;
            a[z - 2].style.outline = ".2rem solid hsl(26, 100%, 55%)";
            a[z - 2].style.filter = "contrast(.5)";
            a[flag2].style.outline = "0";
            a[flag2].style.filter = "contrast(1)";
            flag2 = z - 2;
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

document.querySelector(".add").addEventListener("click", function () {
    let n = parseInt(productNum.textContent)
    productNum.innerHTML = n + 1;
})
document.querySelector(".reduce").addEventListener("click", function () {
    let n = parseInt(productNum.textContent)
    if (n != 0) {
        productNum.innerHTML = n - 1;
    }

})