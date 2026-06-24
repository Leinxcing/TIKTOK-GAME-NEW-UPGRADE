let GIRLS_SCALE = 1;
let BOYS_SCALE = 1.8;

function saveImageToStorage(key,file,callback){

    const reader = new FileReader();

    reader.onload = function(e){

        const base64 = e.target.result;

        localStorage.setItem(
            key,
            base64
        );

        callback(base64);

    };

    reader.readAsDataURL(file);

}

function updatePreview(id,image){

    const preview =
    document.getElementById(id);

    if(!preview) return;

    preview.src = image;

    preview.style.display = "block";

}

// =========================
// PANEL TOGGLE
// =========================

const settingsBtn =
document.getElementById("settingsBtn");

const settingsPanel =
document.getElementById("settingsPanel");

settingsBtn.addEventListener("click",()=>{

    settingsPanel.classList.toggle("hide");

});

// =========================
// TEAM NAME
// =========================

const girlsNameInput =
document.getElementById("girlsNameInput");

const boysNameInput =
document.getElementById("boysNameInput");

const girlsTeamName =
document.getElementById("girlsTeamName");

const boysTeamName =
document.getElementById("boysTeamName");

girlsNameInput.addEventListener("input",()=>{

    girlsTeamName.textContent =
    girlsNameInput.value;

});

boysNameInput.addEventListener("input",()=>{

    boysTeamName.textContent =
    boysNameInput.value;

});

// =========================
// TITLE COLORS
// =========================

const girlsTitleColor =
document.getElementById("girlsTitleColor");

const boysTitleColor =
document.getElementById("boysTitleColor");

girlsTitleColor.addEventListener("input",()=>{

    girlsTeamName.style.background =
    girlsTitleColor.value;

});

boysTitleColor.addEventListener("input",()=>{

    boysTeamName.style.background =
    boysTitleColor.value;

});

// =========================
// TEAM COLORS
// =========================

const girlsSideColor =
document.getElementById("girlsSideColor");

const boysSideColor =
document.getElementById("boysSideColor");

girlsSideColor.addEventListener("input",()=>{

    girlsSide.style.background =
    girlsSideColor.value;

});

boysSideColor.addEventListener("input",()=>{

    boysSide.style.background =
    boysSideColor.value;

});

// =========================
// CHARACTER SIZE
// =========================

const girlsSize =
document.getElementById("girlsSize");

const boysSize =
document.getElementById("boysSize");

girlsSize.addEventListener("input",()=>{

    girlsCharacter.style.width =
    (girlsSize.value * GIRLS_SCALE) + "px";

});

boysSize.addEventListener("input",()=>{

    boysCharacter.style.width =
    (boysSize.value * BOYS_SCALE) + "px";

});

// =========================
// CHARACTER POSITION
// =========================

const girlsY =
document.getElementById("girlsY");

const boysY =
document.getElementById("boysY");

girlsY.addEventListener("input",()=>{

    document.querySelector(
    ".girls .character"
    ).style.bottom =
    girlsY.value + "px";

});

boysY.addEventListener("input",()=>{

    document.querySelector(
    ".boys .character"
    ).style.bottom =
    boysY.value + "px";

});

// =========================
// UPLOAD HELPERS
// =========================

function uploadImage(input,key,callback){

    input.addEventListener("change",(e)=>{

        const file = e.target.files[0];

        if(!file) return;

        saveImageToStorage(

            key,

            file,

            (base64)=>{

                callback(base64);

            }

        );

    });

}

// =========================
// GIRLS
// =========================

uploadImage(
document.getElementById("girlsIdleUpload"),
"girlsIdle",
(url)=>{

    girlsNormalImg = url;

    girlsCharacter.src = url;

    updatePreview(
        "girlsIdlePreview",
        url
    );

}
);

uploadImage(
document.getElementById("girlsPunchUpload"),
"girlsPunch",
(url)=>{

    girlsPunchImg = url;

    updatePreview(
        "girlsPunchPreview",
        url
    );

}
);

uploadImage(
document.getElementById("girlsSuperUpload"),
"girlsSuper",
(url)=>{

    superGirlsImg = url;

    updatePreview(
        "girlsSuperPreview",
        url
    );

}
);

uploadImage(
document.getElementById("girlsWinnerUpload"),
"girlsWinner",
(url)=>{

    girlsWinnerImg = url;

    updatePreview(
        "girlsWinnerPreview",
        url
    );

}
);

uploadImage(
document.getElementById("girlsPanicUpload"),
"girlsPanic",
(url)=>{

    girlsPanicImg = url;

    updatePreview(
        "girlsPanicPreview",
        url
    );

}
);

// =========================
// BOYS
// =========================

uploadImage(
document.getElementById("boysIdleUpload"),
"boysIdle",
(url)=>{

    boysNormalImg = url;

    boysCharacter.src = url;

    updatePreview(
        "boysIdlePreview",
        url
    );

}
);

uploadImage(
document.getElementById("boysPunchUpload"),
"boysPunch",
(url)=>{

    boysPunchImg = url;

    updatePreview(
        "boysPunchPreview",
        url
    );

}
);

uploadImage(
document.getElementById("boysSuperUpload"),
"boysSuper",
(url)=>{

    superBoysImg = url;

    updatePreview(
        "boysSuperPreview",
        url
    );

}
);

uploadImage(
document.getElementById("boysWinnerUpload"),
"boysWinner",
(url)=>{

    boysWinnerImg = url;

    updatePreview(
        "boysWinnerPreview",
        url
    );

}
);

uploadImage(
document.getElementById("boysPanicUpload"),
"boysPanic",
(url)=>{

    boysPanicImg = url;

    updatePreview(
        "boysPanicPreview",
        url
    );

}
);

// =========================
// SAVE
// =========================

document.getElementById(
"saveSettings"
).addEventListener("click",()=>{

localStorage.setItem("girlsName",girlsNameInput.value);
localStorage.setItem("boysName",boysNameInput.value);

localStorage.setItem("girlsTitleColor",girlsTitleColor.value);
localStorage.setItem("boysTitleColor",boysTitleColor.value);

localStorage.setItem("girlsSideColor",girlsSideColor.value);
localStorage.setItem("boysSideColor",boysSideColor.value);

localStorage.setItem("girlsSize",girlsSize.value);
localStorage.setItem("boysSize",boysSize.value);

localStorage.setItem("girlsY",girlsY.value);
localStorage.setItem("boysY",boysY.value);

alert("Settings Saved!");

});

// =========================
// LOAD SETTINGS
// =========================

window.addEventListener("load",()=>{

    // =========================
// LOAD CHARACTER IMAGES
// =========================

if(localStorage.getItem("girlsIdle")){

girlsNormalImg =
localStorage.getItem("girlsIdle");
updatePreview(
"girlsIdlePreview",
girlsNormalImg
);

girlsCharacter.src =
girlsNormalImg;

}

if(localStorage.getItem("girlsPunch")){

girlsPunchImg =
localStorage.getItem("girlsPunch");
updatePreview(
"girlsPunchPreview",
girlsPunchImg
);
}

if(localStorage.getItem("girlsSuper")){

superGirlsImg =
localStorage.getItem("girlsSuper");
updatePreview(
"girlsSuperPreview",
superGirlsImg
);
}

if(localStorage.getItem("girlsWinner")){

girlsWinnerImg =
localStorage.getItem("girlsWinner");
updatePreview(
"girlsWinnerPreview",
girlsWinnerImg
);

}

if(localStorage.getItem("girlsPanic")){

girlsPanicImg =
localStorage.getItem("girlsPanic");
updatePreview(
"girlsPanicPreview",
girlsPanicImg
);

}

if(localStorage.getItem("boysIdle")){

boysNormalImg =
localStorage.getItem("boysIdle");
updatePreview(
"boysIdlePreview",
boysNormalImg
);

boysCharacter.src =
boysNormalImg;

}

if(localStorage.getItem("boysPunch")){

boysPunchImg =
localStorage.getItem("boysPunch");
updatePreview(
"boysPunchPreview",
boysPunchImg
);
}

if(localStorage.getItem("boysSuper")){

superBoysImg =
localStorage.getItem("boysSuper");
updatePreview(
"boysSuperPreview",
superBoysImg
);

}

if(localStorage.getItem("boysWinner")){

boysWinnerImg =
localStorage.getItem("boysWinner");
updatePreview(
"boysWinnerPreview",
boysWinnerImg
);

}

if(localStorage.getItem("boysPanic")){

boysPanicImg =
localStorage.getItem("boysPanic");
updatePreview(
"boysPanicPreview",
boysPanicImg
);

}

// TEAM NAME
if(localStorage.getItem("girlsName")){

girlsNameInput.value =
localStorage.getItem("girlsName");

girlsTeamName.textContent =
girlsNameInput.value;

}

if(localStorage.getItem("boysName")){

boysNameInput.value =
localStorage.getItem("boysName");

boysTeamName.textContent =
boysNameInput.value;

}

// TITLE COLORS
if(localStorage.getItem("girlsTitleColor")){

girlsTitleColor.value =
localStorage.getItem("girlsTitleColor");

girlsTeamName.style.background =
girlsTitleColor.value;

}

if(localStorage.getItem("boysTitleColor")){

boysTitleColor.value =
localStorage.getItem("boysTitleColor");

boysTeamName.style.background =
boysTitleColor.value;

}

// TEAM COLORS
if(localStorage.getItem("girlsSideColor")){

girlsSideColor.value =
localStorage.getItem("girlsSideColor");

girlsSide.style.background =
girlsSideColor.value;

}

if(localStorage.getItem("boysSideColor")){

boysSideColor.value =
localStorage.getItem("boysSideColor");

boysSide.style.background =
boysSideColor.value;

}

// SIZE
if(localStorage.getItem("girlsSize")){

    girlsSize.value =
    localStorage.getItem("girlsSize");

    girlsCharacter.style.width =
    (girlsSize.value * GIRLS_SCALE) + "px";

}

if(localStorage.getItem("boysSize")){

    boysSize.value =
    localStorage.getItem("boysSize");

    boysCharacter.style.width =
    (boysSize.value * BOYS_SCALE) + "px";

}

});

document.getElementById(
"exportPreset"
).addEventListener("click",()=>{

    const preset = {

        girlsName:
        girlsNameInput.value,

        boysName:
        boysNameInput.value,

        girlsTitleColor:
        girlsTitleColor.value,

        boysTitleColor:
        boysTitleColor.value,

        girlsSideColor:
        girlsSideColor.value,

        boysSideColor:
        boysSideColor.value,

        girlsSize:
        girlsSize.value,

        boysSize:
        boysSize.value,

        girlsY:
        girlsY.value,

        boysY:
        boysY.value

    };

    const blob =
    new Blob(

        [
            JSON.stringify(
                preset,
                null,
                2
            )
        ],

        {
            type:
            "application/json"
        }

    );

    const link =
    document.createElement("a");

    link.href =
    URL.createObjectURL(blob);

    link.download =
    "battle-preset.json";

    link.click();

});

document.getElementById(
"importPreset"
).addEventListener("change",(e)=>{

    const file =
    e.target.files[0];

    if(!file) return;

    const reader =
    new FileReader();

    reader.onload =
    function(event){

        const preset =
        JSON.parse(
            event.target.result
        );

        // TEAM NAME

        girlsNameInput.value =
        preset.girlsName || "";

        boysNameInput.value =
        preset.boysName || "";

        girlsTeamName.textContent =
        girlsNameInput.value;

        boysTeamName.textContent =
        boysNameInput.value;

        // TITLE COLOR

        girlsTitleColor.value =
        preset.girlsTitleColor;

        boysTitleColor.value =
        preset.boysTitleColor;

        girlsTeamName.style.background =
        preset.girlsTitleColor;

        boysTeamName.style.background =
        preset.boysTitleColor;

        // TEAM COLOR

        girlsSideColor.value =
        preset.girlsSideColor;

        boysSideColor.value =
        preset.boysSideColor;

        girlsSide.style.background =
        preset.girlsSideColor;

        boysSide.style.background =
        preset.boysSideColor;

        // SIZE

        girlsSize.value =
        preset.girlsSize;

        boysSize.value =
        preset.boysSize;

        girlsCharacter.style.width =
        (preset.girlsSize * GIRLS_SCALE)
        + "px";

        boysCharacter.style.width =
        (preset.boysSize * BOYS_SCALE)
        + "px";

        // POSITION

        girlsY.value =
        preset.girlsY;

        boysY.value =
        preset.boysY;

        document.querySelector(
        ".girls .character"
        ).style.bottom =
        preset.girlsY + "px";

        document.querySelector(
        ".boys .character"
        ).style.bottom =
        preset.boysY + "px";

    };

    reader.readAsText(file);

});

// =========================
// RESET
// =========================

document.getElementById(
"resetSettings"
).addEventListener("click",()=>{

localStorage.removeItem("girlsIdle");
localStorage.removeItem("girlsPunch");
localStorage.removeItem("girlsSuper");
localStorage.removeItem("girlsWinner");
localStorage.removeItem("girlsPanic");

localStorage.removeItem("boysIdle");
localStorage.removeItem("boysPunch");
localStorage.removeItem("boysSuper");
localStorage.removeItem("boysWinner");
localStorage.removeItem("boysPanic");

localStorage.removeItem("girlsName");
localStorage.removeItem("boysName");

localStorage.removeItem("girlsTitleColor");
localStorage.removeItem("boysTitleColor");

localStorage.removeItem("girlsSideColor");
localStorage.removeItem("boysSideColor");

localStorage.removeItem("girlsSize");
localStorage.removeItem("boysSize");

localStorage.removeItem("girlsY");
localStorage.removeItem("boysY");

location.reload();

});

// =========================
// TAB NAVIGATION
// =========================

const tabButtons =
document.querySelectorAll(".tab-btn");

const tabContents =
document.querySelectorAll(".tab-content");

tabButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        tabButtons.forEach(b=>{

            b.classList.remove("active");

        });

        tabContents.forEach(tab=>{

            tab.classList.remove("active");

        });

        btn.classList.add("active");

        document
        .getElementById(
            btn.dataset.tab
        )
        .classList
        .add("active");

    });

});

// =========================
// EFFECT TOGGLES
// =========================

const effectGlow =
document.getElementById("effectGlow");

effectGlow.addEventListener("change",()=>{

document.body.classList.toggle(
"disable-glow",
!effectGlow.checked
);

});
