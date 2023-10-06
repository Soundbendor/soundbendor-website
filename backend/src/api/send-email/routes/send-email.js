module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/send-mail',
        handler: 'send-email.send_email',
      }
    ]
}