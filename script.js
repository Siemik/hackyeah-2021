let cloudsPosition = 0
let cloudsPosition2 = 0

function modalOff() {
    let modal = new TimelineMax({repeat:0});
    modal.to(".modal", 2, {
        display: none,
        ease: Linear.easeNone
    })
}

function reminder() {
    let text = new TimelineMax({repeat:0});
    text.to(".reminder", 1, {
        opacity: `0`,
        ease: Linear.easeNone
    }).to(".reminder", 6, {
        opacity: `1`,
        ease: Linear.easeNone
    }).to(".reminder", 1, {
        opacity: `0`,
        ease: Linear.easeNone
    });
} 

function cloudPosition1() {
    cloudsPosition = cloudsPosition + 5

    let cloud1 = new TimelineMax({repeat:0});
    cloud1.to(".cloud-layer-1", 0.5, {
        backgroundPosition: `0px ${cloudsPosition}px`,
        ease: Linear.easeNone
    });

} 

function cloudPosition2() {
    cloudsPosition2 = cloudsPosition2 + 1

    let cloud2 = new TimelineMax({repeat:0});
    cloud2.to(".cloud-layer-2", 0.5, {
        backgroundPosition: `0px ${cloudsPosition2}px`,
        ease: Linear.easeNone
    });

} 

function fireGrowth() {
    let fire = new TimelineMax({repeat:0});
    fire.to("#fire", 0.3, {
        width: `60`,
        height: `90`,
        top: 114,
        right: 74,
        ease: Linear.easeNone
    }).to("#fire", 0.5, {
        width: `40.5`,
        height: `54.5`,
        top: 145,
        right: 84,
        ease: Linear.easeNone
    });
} 

function balloonPosition() {
    let balloon = new TimelineMax({repeat:0});
    balloon.to(".balloon-container", 0.3, {
        margin: `-25 0 0 0`,
        ease: Linear.easeNone
    }).to(".balloon-container", 1, {
        margin: `0 0 0 0`,
        ease: Linear.easeNone
    });
}


const button = document.querySelector('button');
button.addEventListener('click', function() {
    document.querySelector(".modal").style.display= "none"
    reminder()
    getAudioContext().resume();
}, false);


let mic;

function setup() {
    mic = new p5.AudioIn();
    mic.start()
    getAudioContext().resume();
}
    
function draw() {
    let vol = mic.getLevel() * 100
    if (vol > 0.8) {
        cloudPosition1();
        cloudPosition2();
        fireGrowth();
        balloonPosition()
    }
}