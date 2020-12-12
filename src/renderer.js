const myNotification = new Notification('Miqui says', {
  body: 'Hi! This is a notification from the Renderer process'
})

myNotification.onclick = () => {
  console.log('Notification from the renderer clicked')
}
  
document.getElementById('notify').addEventListener('click', async () => {
  var notification = new Notification('You launched me!', {
    body: 'Hi! This is a notification launched by an event'
  })
  notification.onclick = () => {
    console.log('You clicked your own notification')
  }
})
