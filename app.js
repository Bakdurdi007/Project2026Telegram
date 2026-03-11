const tg = window.Telegram.WebApp;

// Oynani maksimal kengaytirish
tg.expand();

// Muhim: Telegram Desktop ba'zan tayyor bo'lishini kutadi
tg.ready();

// Kompyuter versiyasi uchun qo'shimcha "zarba"
if (tg.platform === 'tdesktop' || tg.platform === 'macos') {
    // Agar dastur ruxsat bersa, to'liq ekran so'raymiz
    if (tg.requestFullscreen) {
        tg.requestFullscreen();
    }
}



// Telegram Web App obyektini chaqirib olish
const tg = window.Telegram.WebApp;

// Qurilma kompyuter (Desktop) ekanligini tekshirish
// Telegram kompyuter va veb versiyalari: 'macos', 'tdesktop', 'weba', 'webk'
const desktopPlatforms = ['macos', 'tdesktop', 'weba', 'webk', 'unigram'];
const isDesktop = desktopPlatforms.includes(tg.platform);

if (isDesktop) {
    // Agar kompyuter bo'lsa, oynani to'liq ekranga (fullscreen) yoyish
    if (tg.requestFullscreen) {
        tg.requestFullscreen();
    } else {
        tg.expand(); // Eski versiyalar uchun zaxira holat
    }
} else {
    // Agar telefon bo'lsa, pastdan chiqadigan odatiy oynani kattalashtirish
    // Agar telefonda faqat yarim ekran bo'lib (expand bo'lmasdan) ochilishini xohlasangiz,
    // pastdagi qatorni o'chirib tashlashingiz mumkin.
    tg.expand();
}

// Web App tayyor ekanligini bildirish
tg.ready();

// Ismni ekranga chiqarish qismi
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const userName = tg.initDataUnsafe.user.first_name;
    const greetingEl = document.getElementById('greeting');
    if (greetingEl) {
        greetingEl.innerText = `Salom, ${userName}!`;
    }
}