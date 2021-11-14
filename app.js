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
