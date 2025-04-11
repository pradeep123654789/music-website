// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let noResultMessage = document.getElementById('noResultMessage');
// Song data (add more songs here)
let songs = [
  { songName: "Aasan Nahin Yahan", filePath: "songs/Aasan Nahin Yahan.mp3", coverPath: "images/asa nahi.png" },
  { songName: "Aashiqui Aa Gayi", filePath: "songs/Aashiqui Aa Gayi.mp3", coverPath: "images/aashiqui aagayi.png" },
  { songName: "Baarish", filePath: "songs/Baarish.mp3", coverPath: "images/baarish.png" },
  { songName: "Bol Do Na Zara", filePath: "songs/Bol Do Na Zara.mp3", coverPath: "images/bolo dena zara.png" },
  { songName: "Dil Mein Ho Tum", filePath: "songs/Dil Mein Ho Tum.mp3", coverPath: "images/dil meho tu.png" },
  { songName: "Hawa Banke", filePath: "songs/Hawa Banke.mp3", coverPath: "images/hawa ban ke.png" },
  { songName: "Hum Mar Jayenge", filePath: "songs/Hum Mar Jayenge.mp3", coverPath: "images/hum mar jyange.png" },
  { songName: "Sunn Raha Hai", filePath: "songs/Sunn Raha Hai.mp3", coverPath: "images/sunraha he natu.png" },
  { songName: "Tu Hi Hai", filePath: "songs/Tu Hi Hai.mp3", coverPath: "images/tu hi he tu hi.png" },
  { songName: "Zaroori Tha", filePath: "songs/Zaroori Tha.mp3", coverPath: "images/zaroori tha.png" },
  { songName: "Akaha da surma kala", filePath: "songs/akha ddesuma kala.mp3", coverPath: "images/akha da surma kala.png" },
  { songName: "kese ye gugny", filePath: "songs/kese ye gunguny.mp3", coverPath: "images/kese gugny.png" },

  { songName: " Tereyada yada", filePath: "songs/WhatsApp Audio 2025-04-09 at 17.44.10_0f8d8eb7.mp3", coverPath: "images/yada yada.png" },
  { songName: "Mithi Mithi", filePath: "songs/WhatsApp Audio 2025-04-11 at 12.07.12_bdac7290.mp3", coverPath: "images/Mithi Mithi.png" },
  { songName: "pal ek pal mehi", filePath: "songs/WhatsApp Audio 2025-04-11 at 12.07.59_014a01b3.mp3", coverPath: "images/pal pal.png" },
  { songName: "Kheriyat Pucho", filePath: "songs/WhatsApp Audio 2025-04-11 at 12.08.44_7a1b3d56.mp3", coverPath: "images/kheriyat pucho.png" },
  { songName: "teri kudmaiy", filePath: "songs/WhatsApp Audio 2025-04-11 at 12.09.00_2599ddbe.mp3", coverPath: "images/kudmayi.png" },
  { songName: "nazm nazm", filePath: "songs/WhatsApp Audio 2025-04-11 at 12.09.49_731213a6.mp3", coverPath: "images/nazm nazm.png" },
  { songName: "Zalima", filePath: "songs/WhatsApp Audio 2025-04-11 at 12.10.03_8fe7ae6c.mp3", coverPath: "images/Zaalima.png" },
  { songName: "Alag tuj me ", filePath: "songs/WhatsApp Audio 2025-04-11 at 12.10.35_4557995a.mp3", coverPath: "images/tuj me.png" },
  { songName: "rakha lu tuje me", filePath: "songs/WhatsApp Audio 2025-04-11 at 12.10.47_629603f9.mp3", coverPath: "images/rakhalu tuje.png" },
  { songName: "Isqu me dil bana he", filePath: "songs/Iasqu Me Dil.mp3", coverPath: "images/Isqu me dil bana he.png" },
  { songName: "Meto tr nalhi ", filePath: "songs/meto tera nal hi.mp3", coverPath: "images/Meto tr nalhi (2).png" },
  { songName: "Hamsfaer", filePath: "songs/Sun Mere Hamsafer.mp3", coverPath: "images/humsafer.png" },
  

];



// Function to play a specific song
const playSong = () => {
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  gif.style.opacity = 1;
  updateActiveSong(); // 
};

let colorThief = new ColorThief();
let img = new Image();
img.crossOrigin = 'Anonymous';
img.src = songs[songIndex].coverPath;
img.onload = () => {
  let palette = colorThief.getPalette(img, 2);
  document.body.style.background = `linear-gradient(to right, rgb(${palette[0]}), rgb(${palette[1]}))`;

  // Change text color to match background contrast (optional)
  document.body.style.color = 'white'; // ya calculate contrast and set
};

document.querySelectorAll('*').forEach(el => {
  el.style.color = 'white'; // For dark backgrounds
});

img.onload = () => {
  let palette = colorThief.getPalette(img, 2);
  document.body.style.transition = "background 2s ease";
  document.body.style.background = `linear-gradient(to right, rgb(${palette[0]}), rgb(${palette[1]}))`;

  // Optional: Text color change
  document.querySelectorAll('*').forEach(el => {
    el.style.color = 'white'; // For dark background
  });
};



const visualizer = document.querySelector('.visualizer');

audioElement.addEventListener('play', () => {
  visualizer.style.display = 'flex';
});
audioElement.addEventListener('pause', () => {
  visualizer.style.display = 'none';
});
audioElement.addEventListener('ended', () => {
  visualizer.style.display = 'none';
});



// Handle play/pause click
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    playSong();
  } else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
});

// Handle "Next" button click
document.getElementById('next').addEventListener('click', () => {
  songIndex = (songIndex + 1) % songs.length;
  playSong();
});
document.getElementById('previous').addEventListener('click', () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  playSong();
});

// Listen to the 'ended' event for playing the next song automatically
audioElement.addEventListener('ended', () => {
  songIndex = (songIndex + 1) % songs.length;
  playSong();
});

// Update the progress bar as the song plays
audioElement.addEventListener('timeupdate', () => {
  if (audioElement.duration) {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
  }
});

// Allow user to change the song's current time by interacting with the progress bar
myProgressBar.addEventListener('input', () => {
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});
// Initialize song items

const initializeSongItems = () => {
  songItems.forEach((element, i) => {
    const img = element.getElementsByTagName("img")[0];
    const name = element.getElementsByClassName("songName")[0];
    const playBtn = element.getElementsByClassName("songItemPlay")[0];

    img.src = songs[i].coverPath;
    name.innerText = songs[i].songName;

    // Ensure only one click event attached
    playBtn.addEventListener('click', (e) => {
      // If same song clicked and it's playing -> pause it
      if (songIndex === i && !audioElement.paused) {
        audioElement.pause();
        playBtn.classList.remove('fa-pause-circle');
        playBtn.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        return;
      }

      // Play selected song
      makeAllPlays();
      songIndex = i;
      audioElement.src = songs[songIndex].filePath;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      playBtn.classList.remove('fa-play-circle');
      playBtn.classList.add('fa-pause-circle');
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity = 1;
      updateActiveSong();
    });
  });
};



// Highlight currently playing song
const updateActiveSong = () => {
  songItems.forEach((element, i) => {
    element.classList.toggle('active', i === songIndex);
  });
};

// Reset all play icons
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  });
};

// Search functionality
document.getElementById('searchInput').addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  let anyMatch = false;

  songItems.forEach((item, i) => {
    const songName = songs[i].songName.toLowerCase();
    if (songName.includes(searchTerm)) {
      item.style.display = 'flex';

      item.onclick = () => {
        makeAllPlays();
        songIndex = i;
        playSong();

        // 🧹 Extra kaam
        document.getElementById('searchInput').value = ""; // Search bar clear
        songItems.forEach(item => item.style.display = 'flex'); // All songs show
        noResultMessage.style.display = 'none'; // Message hide
      };

      anyMatch = true;
    } else {
      item.style.display = 'none';
      item.onclick = null;
    }
  });

  noResultMessage.style.display = anyMatch ? 'none' : 'block';
});


// Song item click se song play karne ke liye
songItems.forEach((element, index) => {
  element.addEventListener('click', () => {
    songIndex = index;
    playSong();
  });
});


document.getElementById("loader").style.display = "block";
// after loading
document.getElementById("loader").style.display = "none";

// Show loader until page fully loads
window.onload = function () {
  document.getElementById("loader").style.display = "none";
};




// REMOVE THIS - Duplicate click handler!




// Initialize song items
initializeSongItems();