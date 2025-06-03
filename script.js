document.addEventListener('DOMContentLoaded', () => {
    const moduleList = document.getElementById('moduleList');
    const videoPlayer = document.getElementById('videoPlayer');

    moduleList.addEventListener('click', event => {
        const target = event.target;
        if (target.tagName.toLowerCase() === 'li') {
            const videoSrc = target.getAttribute('data-video');
            if (videoSrc) {
                videoPlayer.src = videoSrc;
                videoPlayer.play();
            }
        }
    });
});
