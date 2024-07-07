const express = require("express")
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")
const fs = require("fs")

const corsOptions = {
    origin: "http://ok-schtern.ru",
    // origin: "http://localhost:3000",
}

const app = express()

const port = 3001

app.use(bodyParser.json())
app.use(cors(corsOptions))

app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.get("/download/:filename", (req, res) => {
    const { filename } = req.params
    const filePath = path.join(__dirname, "uploads", filename)

    // Проверяем существование файла
    if (fs.existsSync(filePath)) {
        // Отправляем файл
        res.sendFile(filePath)
    } else {
        res.status(404).send("File not found")
    }
})

app.post("/send-email", async (req, res) => {
    const { firstName, lastName, phoneNumber } = req.body

    // Настройте транспорт для отправки писем
    const transporter = nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
            user: "schtern-mail@mail.ru",
            pass: "bGJjdbCki62HfpwXTYv5",
        },
    })

    // Определите содержимое письма
    const mailOptions = {
        from: "schtern-mail@mail.ru",
        to: "shop@ok-schtern.ru", // Укажите свой собственный адрес электронной почты
        subject: "Новая заявка с сайта",
        text: `Имя: ${firstName}\nФамилия: ${lastName}\nНомер телефона: ${phoneNumber}`,
    }

    // Попытка отправки письма
    try {
        // Отправьте письмо
        const info = await transporter.sendMail(mailOptions)
        console.log("Email sent: " + info.response)
        res.sendStatus(200)
    } catch (error) {
        console.error("Error sending email:", error)
        res.sendStatus(500)
    }
})

app.post("/send-diller", async (req, res) => {
    const {
        title,
        firstName,
        lastName,
        phoneNumber,
        email,
        companyName,
        city,
        adress,
        comment,
    } = req.body

    console.log(firstName)

    // Настройте транспорт для отправки писем
    const transporter = nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
            user: "schtern-mail@mail.ru",
            pass: "bGJjdbCki62HfpwXTYv5",
        },
    })

    // Определите содержимое письма
    const mailOptions = {
        from: "schtern-mail@mail.ru",
        to: "boldyrev@ok-schtern.ru", // Укажите свой собственный адрес электронной почты
        subject: `Новая заявка с сайта о ${title}`,
        text: `Имя: ${firstName}\n
        Фамилия: ${lastName}\n
        Номер телефона: ${phoneNumber}\n
        Email: ${email}\n
        Название компании: ${companyName}\n
        Город: ${city}\n
        Фамилия: ${adress}\n
        Фамилия: ${comment}\n
        
        `,
    }

    // Попытка отправки письма
    try {
        // Отправьте письмо
        const info = await transporter.sendMail(mailOptions)
        console.log("Email sent: " + info.response)
        res.sendStatus(200)
    } catch (error) {
        console.error("Error sending email:", error)
        res.sendStatus(500)
    }
})

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`)
})
