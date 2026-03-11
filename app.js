const tg = window.Telegram.WebApp;

// 1. Telegram interfeysini tayyorlash
tg.ready();

// 2. Oynani maksimal balandlikka yoyish
tg.expand();

// 3. Kompyuter va boshqa platformalarda to'liq ekranni so'rash
function setFullScreen() {
    if (tg.requestFullscreen) {
        tg.requestFullscreen();
    }
}

// Sahifa yuklanishi bilan ishga tushirish
setFullScreen();

// Foydalanuvchi ma'lumotlarini chiqarish
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    document.getElementById('greeting').innerText = `Salom, ${tg.initDataUnsafe.user.first_name}!`;
} else {
    document.getElementById('greeting').innerText = "Salom, Foydalanuvchi!";
}

// Platformani ko'rsatish (Tekshirish uchun)
document.getElementById('platform-info').innerText = `Platforma: ${tg.platform}`;

// Telegram mavzusi o'zgarganda ranglarni yangilash (ixtiyoriy)
tg.onEvent('themeChanged', function() {
    document.body.style.backgroundColor = tg.backgroundColor;
});