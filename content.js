const videoStream = document.querySelector('.video-stream.html5-main-video')
const tooltip = document.querySelector('.ytp-tooltip-bg')

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.text === 'display_alert') {
    let button = document.querySelector('.ytp-play-button.ytp-button')
    if (button) {
      button.click()
    }
    alert('You have been on this page for 30 minutes!')
    chrome.runtime.sendMessage({ text: 'alert_closed' })
  }
})

if (videoStream) {
  videoStream.style.filter = 'grayscale(100%)'
}
if (tooltip) {
  tooltip.style.filter = 'grayscale(100%)'
}
