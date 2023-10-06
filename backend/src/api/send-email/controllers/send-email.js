const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

module.exports = {
    async send_email(ctx, next) {
        const requestBody = ctx.request.body

        console.log('Request body:', requestBody)

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'Submission from SoundBendor Website Requesting Information',
            text: `Submission Content:\n
            Name: ${requestBody.name}\n
            Email: ${requestBody.email}\n
            Comments: ${requestBody.comments}`
        }

        try {
            // Send the email
            await transporter.sendMail(mailOptions)
            ctx.send({ message: 'Email sent successfully' })
        } catch (error) {
            console.error('Error sending email:', error)
            ctx.throw(500, 'Error sending email')
        }
    },
}