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

    // links.style.display = "block";
    // for (let i = 0; i < 5; i++) {
    //     navLinks[i].style.display = "block";
    // }
    backgroundDiv.addEventListener("click", function () {
        console.log("clicked");
        sidediv.remove();
        backgroundDiv.remove();
    });
});
