const startCallButton = document.getElementById('start-call-btn');
const endCallButton = document.getElementById('end-call-btn');
const captureButton = document.getElementById('capture-btn');
const localVideo = document.getElementById('local-video');
const canvas = document.getElementById('canvas');
const locationDisplay = document.getElementById('location');

let localStream;
let mediaRecorder;
let chunks = [];

startCallButton.addEventListener('click', startCall);
endCallButton.addEventListener('click', endCall);
captureButton.addEventListener('click', captureDocument);

async function startCall() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;
    } catch (error) {
        console.error('Error starting call:', error);
    }
}

async function endCall() {
    try {
        localStream.getTracks().forEach(track => track.stop());
        localVideo.srcObject = null;
    } catch (error) {
        console.error('Error ending call:', error);
    }
}

function captureDocument() {
    const context = canvas.getContext('2d');
    canvas.width = localVideo.videoWidth;
    canvas.height = localVideo.videoHeight;
    context.drawImage(localVideo, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(downloadDocument);
}

function downloadDocument(blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'captured_document.png';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}
