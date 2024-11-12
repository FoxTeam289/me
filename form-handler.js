document.getElementById('sendButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(email<5) {
        alert("Введите реальную почту!")
    }else if(name<3) {
        alert("Введите реальное имя!")
    }else if(message<10) {
        alert("Сообщение должно быть минимум на 10 символов!")
    }else {
    
    if (name && email && message) {
        const token = '7517521595:AAE1_YiK2wKMhRWxTysQDsWlVX3zyG8tz84';
        const chatId = '7854889972';
        const text = `Имя: ${name}\nПочта: ${email}\nСообщение: ${message}`;
        
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                document.getElementById('successMessage').style.display = 'block';
            } else {
                alert('Ошибка при отправке сообщения');
            }
        })
        .catch(error => {
            alert('Ошибка: ' + error);
        });
    } else {
        alert('Заполните все поля');
    }
}});