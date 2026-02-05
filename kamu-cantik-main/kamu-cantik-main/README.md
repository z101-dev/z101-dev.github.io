# 💞 Ciee Mau Nge-Bucin yaa

Pasti kalian datang dari Video TikTok [ini](https://vt.tiktok.com/ZSko23Mnh/) yaa
<br />(atau engga juga gapapa si..)

---

## 🔧 Cara Install

1. Pastikan Node.js sudah terinstal  
   👉 [https://nodejs.org](https://nodejs.org)

2. Clone project ini:
```bash
git clone https://github.com/USERNAME/kamu-cantik.git
cd kamu-cantik
```

3. Install dependensi:
```bash
npm install
```

4. Jalankan aplikasi:
```bash
npm run app
```

---

## 💡 Struktur Folder

```
.
├── public/
│   ├── index.html        ← halaman utama (tampilan lirik)
│   ├── style.css         ← style font
│   └── images/           ← icon tombol (close, maximize, minimize)
├── icon.ico              ← icon window
├── main.js               ← file utama Electron
├── server.js             ← server untuk render halaman
├── start.js              ← script untuk jalankan server + Electron
├── preload.js            ← untuk komunikasi aman antara UI & Electron
├── package.json
└── README.md
```

---

## 📥 Kontribusi

Silakan fork dan pull request jika kamu ingin:

- Menambahkan lirik lagu baru
- Menambahkan background GIF/animasi lainnya
- Membuat aplikasi ini jadi playlist lirik

---

## 🧙‍♂️ Developer

Dibuat dengan 💕 oleh **Rajendra Verrill Hafizha**  
Proyek ini bagian dari OMANIAOZANIA Productions ❤️

---

## 📦 Build ke .exe (opsional)

Untuk membuat versi `.exe`, gunakan:

```bash
npm install --save-dev electron-packager
npx electron-packager . kamu-cantik --platform=win32 --arch=x64 --icon=icon.ico
```

---
