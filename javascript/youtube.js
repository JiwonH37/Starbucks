// Function - API
var tag = document.createElement('script')
tag.src = "https://www.youtube.com/iframe_api"
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
    new YT.Player('player', {
        // videoId: 'An6LvWQuj_8',
        videoId: 'jUmeh5yvy0M',
        playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'jUmeh5yvy0M'
        },
        events: {
            onReady: function (event) {
                event.target.mute()
            }
        }
    })
}