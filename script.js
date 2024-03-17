const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const artist = document.getElementById("artist");
const image = document.getElementById("artist-image");
const bio = document.getElementById("bio");
const song = document.getElementById("song");

console.log("script.js loaded");

const artistsArray = [
    {
        artist: "Swayzak",
        image: "/Microhouse/images/artists/swayzak.jpg",
        bio: "Swayzak is a British electronic music duo formed by James Taylor and David Brown. They rose to prominence in the late 1990s electronic music scene and are known for their eclectic approach, seamlessly blending elements of techno, house, and ambient. Swayzak's music often features immersive atmospheres, distinctive rhythms, and captivating sonic textures. Over the years, they have released several albums, establishing themselves as influential figures in the electronic music scene.",
        song: "https://open.spotify.com/embed/track/1LPxcJ5ibYbDfPyqjiRJ32?utm_source=generator&theme=0",
    },
    {
        artist: "Ricardo Villalobos",
        image: "/Microhouse/images/artists/villalobos.jpg",
        bio: "Ricardo Villalobos is a Chilean-born, German-raised electronic music producer and DJ, renowned for his influential contributions to the minimal techno and microhouse genres. Born on August 6, 1970, in Santiago, Chile, Villalobos later moved to Germany, where he became deeply immersed in the country's vibrant techno and electronic music scene. Known for his avant-garde approach, Villalobos has become a key figure in the evolution of electronic music. Throughout his career, Ricardo Villalobos has released numerous solo and collaborative works, earning acclaim for his innovative use of intricate rhythms, hypnotic textures, and experimental soundscapes. His extended DJ sets and performances at renowned clubs and festivals worldwide have solidified his status as a leading figure in the electronic music community.",
        song: "https://open.spotify.com/embed/track/6X6HG13dquCcvynTTiUlDu?utm_source=generator&theme=0",
    },
    {
        artist: "Akufen",
        image: "/Microhouse/images/artists/akufen.png",
        bio: "Swayzak is a British electronic music duo formed by James Taylor and David Brown. They rose to prominence in the late 1990s electronic music scene and are known for their eclectic approach, seamlessly blending elements of techno, house, and ambient. Swayzak's music often features immersive atmospheres, distinctive rhythms, and captivating sonic textures. Over the years, they have released several albums, establishing themselves as influential figures in the electronic music scene. 'Make Up Your Mind' is a track by Swayzak included in their 2002 album, 'Dirty Dancing.' The song showcases Swayzak's characteristic approach, combining elements of minimalist techno with atmospheric house. It is distinguished by carefully layered electronic sounds, intricate percussion patterns, and an overall immersive feel. 'Make Up Your Mind' captures the duo's unique aesthetic, blending sonic experimentation with a pulsating energy that has resonated with electronic music enthusiasts over the years.",
        song: "https://open.spotify.com/embed/track/22vR5MVENxjmXEo0TajltH?utm_source=generator&theme=0",
    }
];

let currentArtistIndex = 0;

const displayArtistInfo = () => {
    const currentArtist = artistsArray[currentArtistIndex];
    artist.textContent = currentArtist.artist;
    image.src = currentArtist.image;
    bio.textContent = currentArtist.bio;
    song.src = currentArtist.song;  
};

const nextArtist = () => {
    console.log("Next Artist clicked");
    currentArtistIndex = (currentArtistIndex + 1) % artistsArray.length;
    displayArtistInfo();
};

const prevArtist = () => {
    console.log("Prev Artist clicked");
    currentArtistIndex = (currentArtistIndex - 1 + artistsArray.length) % artistsArray.length;
    displayArtistInfo();
};


arrowRight.addEventListener("click", nextArtist);
arrowLeft.addEventListener("click", prevArtist);



