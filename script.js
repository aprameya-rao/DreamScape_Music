console.log("Welcome to Spotify");

// Initialize Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3'); // Make sure path is correct
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"}
];

// Handle play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
});

// Listen to timeupdate event on the audio element
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // Update Seekbar (to be implemented)
});
