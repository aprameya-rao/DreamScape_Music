console.log("Welcome to Spotify");

// Initialize Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3'); 
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Song 1", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Song 2", filePath: "songs/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Song 3", filePath: "songs/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Song 4", filePath: "songs/4.mp3", coverPath: "cover/4.jpg"}
];

// Handle play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        console.log("start");
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    } 
    else
    {
        console.log('end');
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }
});

// Listen to timeupdate event on the audio element
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // Update Seekbar (to be implemented)
});
