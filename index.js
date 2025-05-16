//@ts-check

const db = {
    currentPage: 0
}

console.log(`Loaded!`)

const menus = document.querySelectorAll("#menu span");
const dropdowns = document.querySelectorAll("dropdown");
const scenes = document.getElementById("content")?.children;
const LisalectorButton = document.getElementById("start");

menus.forEach(element => {
    element.addEventListener("click", () => {

        menus.forEach(i => i.classList.remove("selected"));

        element.classList.add("selected");

        for(const scene of scenes ?? []) scene.classList.toggle(
            "open",
            (
                scene instanceof HTMLDivElement
                &&
                scene.id === `scene-${element.id}`
            )
        );

        dropdowns.forEach(
            ( { lastElementChild: content } ) => {
                content?.classList.remove("show")
            }
        )
    });
});
dropdowns.forEach(dropdown => {
    const { lastElementChild: content } = dropdown;

    dropdown?.addEventListener("click",() => {

        content?.classList.toggle("show");

    })
})

LisalectorButton?.addEventListener("click",() => {
    console.log(`Started App!`);
    location.replace("app.html");
})