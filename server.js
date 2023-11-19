const express = require('express');
const app = express();
const port = 8000;
//запит GET до основного каталогу ('/')
app.get('/', (req, res) => {
    res.send(`<html lang="eu">
        <head>
        <title>Home Page</title>
</head>
    <body>
    <p>1 question</p>
    <a href="/about">About us</a>
    <button onclick="showMessage()">Show message</button>
    <p id="message"></p>
    <script>
        function showMessage() {
        fetch('/api/message')
            .then(response => response.json())
            .then(json => {
                const messageElement = document.getElementById('message');
                messageElement.innerHTML = 'Сообщение: ' + json.message;
            })
            .catch(error => {
                const messageElement = document.getElementById('message');
                messageElement.innerHTML = 'Ошибка: ' + error.message;
            });
    }
    </script>
    </body>
</html>
    `);
});

//запит GET до сторінки About ('/about')
app.get('/about', (req, res) => {
    res.send(`<html lang="eu">
        <head>
        <title>About Page</title>
</head>
    <body>
    <p>2 question</p>
    <a href="/">Home Page</a>   
    </body>
</html>
    `);
});
//На запит GET до API ('/api/message')
app.get('/api/message', (req, res) => {
    res.json({message: 'КУ-КУ ЭТО API'});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});