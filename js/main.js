// fitty

document.fonts.ready.then(() => {

    fitty('.tittle01', {
        minSize: 8,
        maxSize: 512,
    });

    fitty('.tittle02', {
        minSize: 2,
        maxSize: 512,
        multiLine: false,
    });

    fitty('.tittle03', {
        minSize: 8,
        maxSize: 512,
    });

    fitty('.tittle04', {
        minSize: 2,
        maxSize: 512,
        multiLine: true,
    });

});


// viewer 360 cover

let viewerStatus = false;

document.querySelectorAll('.play-tag').forEach(tag => {
    tag.addEventListener('click', async function () {
        const viewerCover = document.querySelector('.cover-v');
        const viewer = document.getElementById('viewer');
        const btnText = document.querySelector('.play-txt');
        const isCoverHidden = viewerCover.style.display === 'none';
        const { viewerObj } = await import('./viewer.js');

        if (isCoverHidden) {
            // lock viewer
            viewerCover.style.display = 'block';
            viewerCover.style.pointerEvents = 'auto';
            viewer.style.pointerEvents = 'none';
            btnText.textContent = 'INGRESAR';

            // destroy viewer
            const psvContainer = viewer.querySelector('.psv-container');
            if (psvContainer) {
                psvContainer.remove();
                viewerStatus = false;
            }
        } else {
            // unlock viewer
            viewerCover.style.display = 'none';
            viewerCover.style.pointerEvents = 'none';
            viewer.style.pointerEvents = 'auto';
            btnText.textContent = 'SALIR';

            if (!viewerStatus) {
                viewerObj();
                viewerStatus = true;
            }
        }
    });
});


// Vibration action
const exploreTag = document.querySelector(".explore-tag");
const playTag = document.querySelector(".play-tag");

exploreTag.addEventListener("click", () => {
    if (navigator.vibrate) {
        navigator.vibrate(50); // duration
    }
});


playTag.addEventListener("click", () => {
    if (navigator.vibrate) {
        navigator.vibrate([50, 100, 50, 100, 50]); // pattern duration
    }
});


// explore-play scroll to down
document.querySelector(".explore-tag").addEventListener("click", () => {
    const offset = window.innerHeight * 0.75;
    window.scrollBy({
        top: offset,
        behavior: "smooth"
    });
});

// reproductor himno

const audio = document.getElementById('audio');
const btnPlay = document.getElementById('btnPlay');
const btnStop = document.getElementById('btnStop');
const iconPlay = document.getElementById('iconPlay');

const playIconPath = 'icons/player-play.svg';
const pauseIconPath = 'icons/player-pause.svg';
const stopIconPath = 'icons/player-stop.svg';

function setStopOpacity(isPlaying) {
    btnStop.style.opacity = isPlaying ? '1' : '0.5';
}

function setPlayUI(isPlaying) {
    iconPlay.src = isPlaying ? pauseIconPath : playIconPath;
    setStopOpacity(isPlaying);
}

btnPlay.addEventListener('click', async () => {
    if (audio.paused) {
        await audio.play();
        setPlayUI(true);
    } else {
        audio.pause();
        setPlayUI(false);
    }
});

btnStop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    setPlayUI(false);
});

audio.addEventListener('ended', () => {
    setPlayUI(false);
});

setPlayUI(false);