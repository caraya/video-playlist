const video_player = document.getElementById('video_player');
const links = video_player.getElementsByTagName('a');
for (let i=0; i<links.length; i++) {
    links[i].onclick = handler;
}

function handler(e) {
    e.preventDefault();
    let videotarget = this.getAttribute("href");
    let filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget;
    let video = document.querySelector("#video_player video");
    // video.removeAttribute("controls");
    video.removeAttribute("poster");
    let source = document.querySelectorAll("#video_player video source");
    source[0].src = filename + ".mp4";
    source[1].src = filename + ".webm";
    video.load();
    video.play();
}

// Event handler for keyboard navigation
window.addEventListener('keydown', (e) => {
    switch (e.which) {
        case 32:
        case 13:
            e.preventDefault();
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            break;

        case 37:
            skip(-5);
            break;

        case 39:
            skip(5);
            break;
    }

});

function skip(value) {
    video.currentTime += value;
}