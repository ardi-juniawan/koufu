document.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        header.style.opacity = "0.9"; // Ubah sesuai keinginan
    } else {
        header.style.opacity = "1";
    }
});