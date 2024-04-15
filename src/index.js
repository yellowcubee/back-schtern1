/* eslint-disable no-undef */
// import session from 'express-session'
// eslint-disable-next-line no-undef
const express = require('express')
const app = express()
const logger = require('morgan');
const path = require('path');
const PORT = 3005;
const router = express.Router()


const loginRouter = require('../routes/login')
const homeRouter = require('../routes/home')

app.use(logger('dev'));
// Подключаем middleware, которое сообщает epxress, что в папке "ПапкаПроекта/public" будут
// находится статические файлы, т.е.файлы доступные для скачивания из других приложений.
app.use(express.static(path.join(__dirname, '../public')));
// Подключаем middleware, которое позволяет читать содержимое body из HTTP-запросов
// типа POST, PUT и DELETE.
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые
// в формате JSON в body HTTP - запроса.
app.use(express.json());

app.use('/', homeRouter)
app.use('/login', loginRouter)


const httpServer = app.listen(PORT, () => {
    console.log(`server started PORT: ${PORT}`);
})