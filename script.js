console.log("Welcome to Spotify");

// Initialize Variables
let songIndex = 0;
let progress=0;
let audioElement = new Audio('songs/1.mp3'); 
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Celestial Dreams", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg"},
    {songName: "Atomic Vibes", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Rising Memories", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName: "Bamboozeled", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg"},
    {songName: "Evolve", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
    {songName: "Riser", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg"},
    {songName: "Rollercoaster", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg"},
    {songName: "Spacewalkers", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg"}
];


songItem.forEach((element,i)=>{
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
    console.log(progress);
    // console.log(audioElement.currentTime);

});

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100.0;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-regular fa-2x fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-regular fa-2x fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');

})

//handles looping 
audioElement.addEventListener('ended', () => 
    {
    if(songIndex==7)
    {
        songIndex=0;
    }
    else 
    {
        songIndex++;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-regular fa-2x fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');

    });
