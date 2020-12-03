
const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
myVideo.muted = true;


let myVideoStream = 
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream)
})

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    console.log(video.srcObject);
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoGrid.append(video);
}