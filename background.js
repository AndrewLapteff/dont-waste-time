let tabIdToTimeoutId = {}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.text === 'alert_closed') {
    let timeoutId = setTimeout(() => {
      chrome.tabs.sendMessage(sender.tab.id, { text: 'display_alert' })
    }, 60 * 20 * 1000) // 30 minutes in milliseconds
    tabIdToTimeoutId[sender.tab.id] = timeoutId
  }
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    clearTimeout(tabIdToTimeoutId[tabId])
    let timeoutId = setTimeout(() => {
      chrome.tabs.sendMessage(tabId, { text: 'display_alert' })
    }, 60 * 20 * 1000) // 30 minutes in milliseconds
    tabIdToTimeoutId[tabId] = timeoutId
  }
})
