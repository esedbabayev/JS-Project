const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
    const content = item.querySelector(".content");
    const icon = item.querySelector(".fas");

    item.addEventListener("click", () => {
        accordionItems.forEach((otherItem) => {
            if (otherItem !== item) {
                const otherContent = otherItem.querySelector(".content");
                const otherIcon = otherItem.querySelector(".fas");
                otherContent.classList.add("hidden");
                otherIcon.classList.remove("fa-chevron-up");
                otherIcon.classList.add("fa-chevron-down");
            }
        });
        content.classList.toggle("hidden");
        icon.classList.toggle("fa-chevron-down");
        icon.classList.toggle("fa-chevron-up");
    });
});
