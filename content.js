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
