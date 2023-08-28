console.log("WelCome to Spotify Music")
let songIndex =0;
let audioElement = new Audio("songs/1.mp3");
let myProgressBar = document.getElementById('myProgressBar');
let masterPlay = document.getElementById('masterPlay');
let giff = document.getElementById('giff');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"))
let masterSongName=document.getElementById('masterSongName')
let songs=[
    {songName:" No mercy",filePath:"songs/1.mp3" ,coverPath:"covers/1.jpg "},
    {songName:"8 Parche",filePath:"songs/2.mp3 ",coverPath:"covers/2.jpg "},
    {songName:"ASofia",filePath:"songs/3.mp3 ",coverPath:"covers/3.jpg "},
    {songName:"Instrumental",filePath:"songs/4.mp3 ",coverPath:"covers/4.jpg "},
    {songName:"instrumental",filePath:"songs/5.mp3 ",coverPath:"covers/5.jpg "},
    {songName:"instrumental",filePath:"songs/6.mp3 ",coverPath:"covers/6.jpg "},
    {songName:"instrumental",filePath:"songs/7.mp3 ",coverPath:"covers/7.jpg "},
    {songName:"instrumental",filePath:"songs/8.mp3 ",coverPath:"covers/8.jpg "},
    {songName:"instrumental",filePath:"songs/9.mp3 ",coverPath:"covers/9.jpg "},
    {songName:"yadav brand 2",filePath:"songs/10.mp3 ",coverPath:"covers/10.jpg "},

]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
 })
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        giff.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        giff.style.opacity = 0;
    }
    })
    audioElement.addEventListener('timeupdate',()=>{
        // console.log('timeupdate')
        progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
        // console.log(progress)
        myProgressBar.value=progress
    })
    myProgressBar.addEventListener('change',()=>{
       audioElement.currentTime=myProgressBar.value * audioElement.duration/100
    })
    const makeAllPlays=()=>{
        songItemPlay.forEach((element)=>{
            element.classList.add('fa-play');
            element.classList.remove('fa-pause');
        })
    }
    
    songItemPlay.forEach((element)=>{
     element.addEventListener('click',(e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`songs/${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex-1].songName
        audioElement.currentTime = 0;
        audioElement.play();
        giff.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
      })
    })
    
    document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>9){
            songIndex=10;
            // audioElement.src=`songs/${songIndex}.mp3`;
    
        }
        else{
            songIndex+=1;
        }
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterSongName.innerText=songs[songIndex-1].songName
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
    
    document.getElementById('previous').addEventListener('click',()=>{
        console.log(songIndex);
        if(songIndex<=0){
            
          songIndex=1;
        }
        else{
            songIndex-=1;
        }
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterSongName.innerText=songs[songIndex-1].songName
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })