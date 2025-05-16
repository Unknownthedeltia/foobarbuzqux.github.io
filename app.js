//@ts-check

const importFileButton = document.getElementById("import-file");
const skipButton = document.getElementById("skip");
const progress = document.getElementById("progress");
const progresses = document.querySelectorAll("#progress span");
const progressBars = document.querySelectorAll("#progress line");
const categoriesSpan = document.querySelectorAll(".category-grid span");
const scenes = document.querySelectorAll("#screen > div");


function changeScene(num) {
    
    scenes.forEach((element) => {
        element.animate([
            { transform: 'translateY(0px)', opacity: 1 },
            { transform: 'translateY(-200px)', opacity: 0 }
        ],{
            duration: 1000,
            easing: 'ease-in-out',
            fill: "forwards"
        }).addEventListener("finish", () => element.classList.add("hidden") );
    });
    
    progress?.classList.remove("hidden");

    progresses.forEach((element, index) => {
        if (index < num) {
            element.classList = "checked"
            progressBars[index].classList = "next"
        } else if (index == num) element.classList = "selected";
    });

    progress?.animate([ 
        { transform: 'translateX(200px)', opacity: 0, offset: 0 },
        { transform: 'translateX(0)', opacity: 1 },
    ], {
        duration: 3000,
        easing: 'ease-in-out',
        fill: "forwards"
    })

    progress?.animate([ 
        { transform: 'translateX(200px)', opacity: 0, offset: 0 },
        { transform: 'translateX(0)', opacity: 1, offset: 0.2 },
        { transform: 'translateX(0)', opacity: 1, offset: 0.8 },
        { transform: 'translateX(200px)', opacity: 0, offset: 1 }
    ], {
        duration: 3000,
        easing: 'ease-in-out',
        fill: "forwards"
    }).addEventListener("finish",() => {
        
        progress.classList.add("hidden");

        scenes.forEach((element, index) => {
            if(index === num) {
                element.classList.remove("hidden");
                element.animate([
                    { transform: 'translateY(200px)', opacity: 0 },
                    { transform: 'translateY(0)', opacity: 1 }
                ],{
                    duration: 1000,
                    easing: 'ease-in-out',
                    fill: "forwards"
                });
            };
        });

    });
}

changeScene(1);

importFileButton?.addEventListener("click", () => changeScene(1))
skipButton?.addEventListener("click", () => changeScene(1))
categoriesSpan?.forEach(items => items.addEventListener("click",() => changeScene(2)))

//File Upload
//希望する授業科目
//受けたい授業項目選択
//アンケート