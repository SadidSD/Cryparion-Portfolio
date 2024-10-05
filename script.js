
let animationPage;
let heightIncrease = 0;
let widthIncrease = 0;
let isAnimating = false;

function openpage(pagename) {
    const page = document.getElementById(pagename);
    page.style.display = "flex";

    if (pagename === 'subpage1') {
        animationPage = document.getElementById('aboutMePage');
    } else if (pagename === 'subpage2') {
        animationPage = document.getElementById('projectspage');
    } else if (pagename === 'subpage3') {
        animationPage = document.getElementById('contactpage');
    }

    heightIncrease = 0;
    widthIncrease = 0;

    animation();
    animation();
    
    if (!isAnimating) {
        isAnimating = true; // Set the flag to true
        requestAnimationFrame(moveInCircle);
    }
}

function closepage(pagename) {
    const page = document.getElementById(pagename);
    page.style.display = 'none';

    if (animationPage) {
        animationPage.style.height = 0 + 'px';
        animationPage.style.width = 0 + 'px';
    }
}
function animation() {
    heightIncrease += 20;
    widthIncrease += 20;

    if (animationPage) {
        animationPage.style.height = (600 + heightIncrease) + 'px';
        animationPage.style.width = (800 + widthIncrease) + 'px';
    }

    if (heightIncrease <= 200 && widthIncrease <= 200) {
        requestAnimationFrame(animation);
    }
}


const centreX = window.innerWidth / 2;
const centreY = window.innerHeight /2;
let angle =0
let angle2 =2
let angle3 =4
const  radious = 300
const img=document.getElementById('img')
const img2=document.getElementById('img2')
const img3=document.getElementById('img3')

function moveInCircle(){
    let x = centreX+ radious*Math.cos(angle)
    let y = centreY+ radious*Math.sin(angle)

    let x2 = centreX+ radious*Math.cos(angle2)
    let y2 = centreY+ radious*Math.sin(angle2)

    let x3 = centreX+ radious*Math.cos(angle3)
    let y3 = centreY+ radious*Math.sin(angle3)

    angle+= 0.01;
    angle2+= 0.01;
    angle3+= 0.01;

    img.style.left = x+'px';
    img.style.top= y+'px';

    img2.style.left = x2+'px';
    img2.style.top= y2+'px';

    img3.style.left = x3+'px';
    img3.style.top= y3+'px';

    requestAnimationFrame(moveInCircle)
}