// const {Howl} = require('howler');

// function fnMusic(){
//     let sound = new Howl({
//         src: ['music/music.webm','music/music.mp3'],
        
//       });
//       sound.play()
// }

// module.exports = fnMusic;


export function soundClick() {
    let audio = new Audio(); 
    audio.src = 'music/music.mp3'; 
    audio.autoplay = true; 
}