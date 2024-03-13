chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.text === 'display_alert') {
    let button = document.querySelector('.ytp-play-button.ytp-button')
    if (button) {
      button.click()
    }
    alert('You have been watching for 30 minutes!')
    chrome.runtime.sendMessage({ text: 'alert_closed' })
  }
})

const applyGrayscaleFilter = () => {
  const videoStream = document.querySelector('.html5-main-video')
  const tooltip = document.querySelector('.ytp-tooltip-bg')
  const images = document.querySelectorAll('#thumbnail')
  if (videoStream) {
    videoStream.style.filter = 'grayscale(100%)'
  }
  if (tooltip) {
    tooltip.style.filter = 'grayscale(100%)'
  }
  if (images.length) {
    images.forEach((image) => image.remove())
  }
}

applyGrayscaleFilter()
window.addEventListener('popstate', applyGrayscaleFilter)

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'start') {
    console.log('fs')
    applyGrayscaleFilter()
  }
})
