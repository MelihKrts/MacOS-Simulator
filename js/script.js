// Showing Time Screen
const timer = document.getElementById("time-screen");

function showingTime() {

    const time = new Date();

    const optionsDay = { weekday: 'short' };
    const optionsMonth = { month: 'short' };

    const shortDayName = time.toLocaleString('en-US', optionsDay);
    const shortMonthName = time.toLocaleString('en-us', optionsMonth);
    const timePM = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    const day = String(time.getDate()).padStart('2', 0);

    const result = `${shortDayName} ${shortMonthName} ${day} ${timePM}`;

    document.getElementById("time-screen").innerHTML = result;
    setTimeout(showingTime, 1000);
}

// Draggable div

$(function () {
    $("#cal-box").draggable();
    $("#notes-box").draggable();
    $("#photos-box").draggable();
});

// Click hide show

function showDiv(divId) {
    var div = document.getElementById(divId);
    div.style.display = "flex";
}

function hideDiv(divId) {
    var div = document.getElementById(divId);
    div.style.display = "none";
}


document.getElementById("calculator").addEventListener("click", function () {
    showDiv("cal-box");
});

document.getElementById("notes").addEventListener("click", function () {
    showDiv("notes-box");
});

document.getElementById("photos").addEventListener("click", function () {
    showDiv("photos-box");
});

document.getElementById("close-cal").addEventListener("click", function () {
    hideDiv("cal-box");
});

document.getElementById("close-notes").addEventListener("click", function () {
    hideDiv("notes-box");
});

document.getElementById("close-photos").addEventListener("click", function () {
    hideDiv("photos-box");
});

// img and background change

// Ventura

document.getElementById("ventura").addEventListener("click", function () {
    document.body.style.backgroundImage = `url('${'img/venture.webp'}')`;
})

// Monterey

document.getElementById("monterey").addEventListener("click", function () {
    document.body.style.backgroundImage = `url('${'img/monterey.webp'}')`;
})

// Big Sur 

document.getElementById("big-sur").addEventListener("click", function () {
    document.body.style.backgroundImage = `url('${'img/wallpaper.jpg'}')`;
})

// Iridescence

document.getElementById("iris").addEventListener("click", function () {
    document.body.style.backgroundImage = `url('${'img/iridescence.webp'}')`;
})


// -------------------------------------------------------------------------------

// Ventura Main

const select = document.getElementById("ventura");
const changeImage = document.getElementById("changeImage");

select.addEventListener("click",()=>{
    changeImage.src = 'img/venture.webp';
})

// Monterey Main

const montereySelect = document.getElementById("monterey");
const montereyChange = document.getElementById("changeImage");

montereySelect.addEventListener("click",()=>{
    changeImage.src = 'img/monterey.webp';
})

// Big Sur Main

const bigSurSelect = document.getElementById("big-sur");
const bigSurChange = document.getElementById("changeImage");

bigSurSelect.addEventListener("click",()=>{
    changeImage.src = 'img/wallpaper.jpg';
})

// Iris Main

const irisSelect = document.getElementById("iris");
const irisChange = document.getElementById("changeImage");

irisSelect.addEventListener("click",()=>{
    changeImage.src = 'img/iridescence.webp';
})

// ---------------------------------------------------------------------------



// Text change 

// Ventura

const contentElement = document.getElementById('ventura');
const main = document.getElementById("default-name");

contentElement.addEventListener('click', () => {
    main.innerHTML = '<span>Ventura</span>';
});

// Monterey

const monterey = document.getElementById('monterey');
const montereyMain = document.getElementById("default-name");

monterey.addEventListener('click', () => {
    montereyMain.innerHTML = '<span>Monterey</span>';
});

// Big Sur

const bigSur = document.getElementById('big-sur');
const bigSurMain = document.getElementById("default-name");

bigSur.addEventListener('click', () => {
    bigSurMain.innerHTML = '<span>Big Sur Graphic</span>';
});

// Iridescence

const irisdescence = document.getElementById('iris');
const irisMain = document.getElementById("default-name");

irisdescence.addEventListener('click', () => {
    irisMain.innerHTML = '<span>Iridescence</span>';
});



