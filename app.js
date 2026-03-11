// Telegram Web App obyektini chaqirib olish
const tg = window.Telegram.WebApp;

// Oyna to'liq ekranda ochilishi uchun
tg.expand();

// Web App tayyor ekanligini bildirish
tg.ready();

// Telegramdan kelayotgan ma'lumotlarni tekshirish va Ismni ekranga chiqarish
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const userName = tg.initDataUnsafe.user.first_name;
    document.getElementById('greeting').innerText = `Salom, ${userName}!`;
}