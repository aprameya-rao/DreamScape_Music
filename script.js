console.log("Welcome to Spotify");

// Initialize Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3'); 
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Song 1", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Song 2", filePath: "songs/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Song 3", filePath: "songs/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Song 4", filePath: "songs/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Song 5", filePath: "songs/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Song 6", filePath: "songs/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Song 7", filePath: "songs/7.mp3", coverPath: "cover/7.jpg"},
    {songName: "Song 8", filePath: "songs/8.mp3", coverPath: "cover/8.jpg"},
    {songName: "Song 9", filePath: "songs/9.mp3", coverPath: "cover/9.jpg"},
    {songName: "Song 10", filePath: "songs/10.mp3", coverPath: "cover/10.jpg"}
];


songItem.forEach((element)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

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

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar (to be implemented)
    progress=(audioElement.currentTime/audioElement.duration)*100;
    myProgressBar.value=progress;

});

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100.0;
})