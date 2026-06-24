const GIRLS_SCALE = 1;
const BOYS_SCALE = 1.8;
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

function uploadImage(input,callback){

    input.addEventListener("change",(e)=>{

        const file =
        e.target.files[0];

        if(!file) return;

        callback(
            URL.createObjectURL(file)
        );

    });

}

// =========================
// GIRLS
// =========================

uploadImage(

document.getElementById(
"girlsIdleUpload"
),

(url)=>{

    girlsNormalImg = url;

    girlsCharacter.src = url;

}

);

uploadImage(

document.getElementById(
"girlsPunchUpload"
),

(url)=>{

    girlsPunchImg = url;

}

);

uploadImage(

document.getElementById(
"girlsSuperUpload"
),

(url)=>{

    superGirlsImg = url;

}

);

uploadImage(

document.getElementById(
"girlsWinnerUpload"
),

(url)=>{

    girlsWinnerImg = url;

}

);

uploadImage(

document.getElementById(
"girlsPanicUpload"
),

(url)=>{

    girlsPanicImg = url;

}

);

// =========================
// BOYS
// =========================

uploadImage(

document.getElementById(
"boysIdleUpload"
),

(url)=>{

    boysNormalImg = url;

    boysCharacter.src = url;

}

);

uploadImage(

document.getElementById(
"boysPunchUpload"
),

(url)=>{

    boysPunchImg = url;

}

);

uploadImage(

document.getElementById(
"boysSuperUpload"
),

(url)=>{

    superBoysImg = url;

}

);

uploadImage(

document.getElementById(
"boysWinnerUpload"
),

(url)=>{

    boysWinnerImg = url;

}

);

uploadImage(

document.getElementById(
"boysPanicUpload"
),

(url)=>{

    boysPanicImg = url;

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
girlsSize.value + "px";

}

if(localStorage.getItem("boysSize")){

boysSize.value =
localStorage.getItem("boysSize");

boysCharacter.style.width =
boysSize.value + "px";

}

// POSITION
if(localStorage.getItem("girlsY")){

girlsY.value =
localStorage.getItem("girlsY");

document.querySelector(
".girls .character"
).style.bottom =
girlsY.value + "px";

}

if(localStorage.getItem("boysY")){

boysY.value =
localStorage.getItem("boysY");

document.querySelector(
".boys .character"
).style.bottom =
boysY.value + "px";

}

});

// =========================
// RESET
// =========================

document.getElementById(
"resetSettings"
).addEventListener("click",()=>{

localStorage.clear();

location.reload();

});
