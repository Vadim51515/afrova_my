/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const multer = require('multer');
const express = require('express');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Middleware для статической отдачи файлов
server.use('/avatars', express.static(path.resolve(__dirname, 'public/avatars')));

// Настройка multer для загрузки файлов
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, 'public/avatars'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Эндпоинт для загрузки аватарки
server.post('/upload-avatar', upload.single('avatar'), (req, res) => {
    console.log('/upload-avatar');
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const avatarUrl = `/avatars/${req.file.filename}`;
        return res.json({ avatarUrl });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

const getCurrentUser = (userId) => {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users = {} } = db;

    return users[userId];
};

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = {} } = db;

        const userFromBd = Object.values(users).find(
            (user) => user.username === username && user.password === password
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.get('/profile/:id', (req, res) => {
    try {
        const currentUser = getCurrentUser(req.params.id);

        delete currentUser.password;
        delete currentUser.login;

        if (currentUser) {
            return res.json(currentUser);
        }

        return res.status(404).json({ message: 'Профиль не найден' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

server.put('/profile/:id', (req, res) => {
    try {
        // Чтение текущей базы данных
        const dbPath = path.resolve(__dirname, 'db.json');
        const db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'));

        // Получение текущего пользователя
        const currentUser = getCurrentUser(req.params.id);

        if (!currentUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Обновление данных пользователя
        const updatedUser = { ...db.users[req.params.id], ...req.body };
        db.users[req.params.id] = updatedUser;

        // Запись обновленных данных обратно в файл
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'UTF-8');

        // Возврат обновленного пользователя
        return res.json(updatedUser);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
    console.log('use');
    // if (!req.headers.authorization) {
    //     return res.status(403).json({ message: 'AUTH ERROR' });
    // }

    next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});