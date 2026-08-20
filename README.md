# ProfMed Max — klinika veb-sayti

ProfMed Max klinikasi xizmatlari, tibbiy yo‘nalishlari va shifokorlarini tanishtirish hamda bemorlarning qabulga yozilish so‘rovlarini qabul qilish uchun yaratilgan ko‘p tilli landing sahifa. Klinikaga oid dinamik ma’lumotlar backend API’dan olinadi.

## Asosiy imkoniyatlar

- klinika haqida hero va tanishtiruv bo‘limlari;
- tibbiy yo‘nalishlar va xizmatlar katalogi;
- shifokorlar, mutaxassisliklar va tajriba ma’lumotlari;
- klinika ko‘rsatkichlari va statistikasi;
- afzalliklar, bemorlar fikrlari va klinika haqida ma’lumot;
- manzil, telefon, email va ish vaqtini API’dan yuklash;
- Google Maps orqali klinika lokatsiyasini ko‘rsatish;
- qabulga yozilish formasini backendga yuborish;
- ijtimoiy tarmoq havolalarini dinamik yuklash;
- rus, o‘zbek, ingliz, arab va xitoy tillari;
- desktop va mobil qurilmalarga mos responsive interfeys.

## Texnologiyalar

- React 18
- TypeScript
- Vite 6 va SWC
- Tailwind CSS 3
- Axios
- i18next / react-i18next
- Radix UI komponentlari
- Motion animatsiyalari
- Lottie React
- Embla Carousel
- React Hook Form
- Recharts
- Sonner bildirishnomalari
- Lucide React ikonkalari

## Talablar

- Node.js `18+`, `20+` yoki `22+`
- npm
- ProfMed backend API servisiga ulanish

## O‘rnatish va ishga tushirish

```bash
git clone <repository-url>
cd profmedmaxweb
npm ci
npm run dev
```

Vite development serveri konfiguratsiyaga ko‘ra `http://localhost:3000` manzilida ishga tushadi va brauzerni avtomatik ochadi.

## NPM buyruqlari

| Buyruq | Vazifasi |
| --- | --- |
| `npm run dev` | Development serverini ishga tushiradi |
| `npm run build` | Production build yaratadi |

Loyihada hozircha alohida `lint`, `test` va `preview` scriptlari mavjud emas.

## Sahifa bo‘limlari

Loyiha alohida route’larsiz, bitta sahifali landing sifatida ishlaydi. Header va footer havolalari tegishli bo‘limlarga smooth scroll qiladi.

| Anchor | Bo‘lim |
| --- | --- |
| Sahifa boshi | Hero va asosiy klinika ko‘rsatkichlari |
| `#services` | Tibbiy xizmatlar |
| `#doctors` | Shifokorlar |
| `#about` | Klinika haqida |
| `#reviews` | Bemorlar fikrlari |
| `#contacts` | Aloqa ma’lumotlari va xarita |
| `#appointment` | Qabulga yozilish formasi |

Asosiy komponentlar quyidagi tartibda ko‘rsatiladi:

```text
Header
Hero
Department Categories
Medical Services
Trusted Provider
Doctors
Statistics
About
Reviews
Contacts & Appointment
Footer
```

## Backend API

API bazaviy manzili `src/services/api.ts` faylida sozlangan:

```text
https://profmed.pythonanywhere.com
```

Frontend foydalanadigan endpointlar:

| Method va endpoint | Vazifasi |
| --- | --- |
| `GET /category/category/` | Tibbiy kategoriyalar |
| `GET /doctor/doctors/` | Shifokorlar ma’lumotlari |
| `GET /utils/homepage-stats/` | Hero bo‘limidagi statistika |
| `GET /utils/footer-stats/` | Klinikaga oid umumiy ko‘rsatkichlar |
| `GET /utils/location/` | Klinika manzili va koordinatalari |
| `GET /utils/phonenumber/` | Telefon raqamlari |
| `GET /utils/email/` | Email manzillari |
| `GET /utils/worktime/` | Ish vaqti |
| `GET /utils/social-media/` | Ijtimoiy tarmoq havolalari |
| `POST /waitlist/waitlist/` | Qabulga yozilish so‘rovini yuborish |

Axios client quyidagi ishlarni bajaradi:

- JSON so‘rov sarlavhalarini o‘rnatadi;
- mavjud access tokenni `Authorization: Bearer <token>` sifatida yuboradi;
- `GET` so‘rovlariga brauzer keshini chetlab o‘tish uchun timestamp qo‘shadi;
- API so‘rovlariga `Accept-Language` sarlavhasini yuboradi.

## Environment va konfiguratsiya

Backend URL hozir kod ichida yozilgan. Development, staging va production muhitlarini ajratish uchun uni `VITE_API_URL` environment o‘zgaruvchisiga ko‘chirish tavsiya etiladi:

```env
VITE_API_URL=https://api.example.com
```

Vite frontendga uzatadigan environment o‘zgaruvchilar `VITE_` prefiksi bilan boshlanishi kerak. `.env*` fayllarini maxfiy ma’lumotlar bilan Git repoga qo‘shmang.

## Tarjimalar

Tarjimalar build ichiga to‘g‘ridan-to‘g‘ri import qilinadi:

```text
src/public/locales/ru/translation.json
src/public/locales/uz/translation.json
src/public/locales/en/translation.json
src/public/locales/ar/translation.json
src/public/locales/zh/translation.json
```

Standart va fallback til — rus tili. Foydalanuvchi tanlagan til `localStorage`dagi `selected-language` kalitida saqlanadi.

Yangi interfeys matni qo‘shilganda barcha beshta tarjima faylida bir xil kalit yaratilishi kerak. Shifokor va kategoriya API modellari ham tilga mos alohida maydonlarni saqlaydi.

## Qabulga yozilish formasi

Forma quyidagi ma’lumotlarni qabul qiladi:

- ism va familiya;
- email;
- telefon raqami;
- qo‘shimcha xabar.

So‘rov `POST /waitlist/waitlist/` endpointiga yuboriladi. Natija muvaffaqiyatli yoki xato bo‘lsa, foydalanuvchiga Sonner toast bildirishnomasi ko‘rsatiladi.

## Loyiha tuzilishi

```text
src/
├── assets/                    # lokal rasmlar va Lottie animatsiyalari
├── components/
│   ├── ui/                    # umumiy Radix/Tailwind UI komponentlari
│   ├── Header.tsx             # navigatsiya va til tanlash
│   ├── Hero.tsx               # bosh sahifa va asosiy statistika
│   ├── DepartmentCategory.tsx # tibbiy yo‘nalishlar
│   ├── Doctors.tsx            # shifokorlar ro‘yxati
│   ├── Contacts.tsx           # kontaktlar, xarita va qabul formasi
│   └── Footer.tsx             # footer va dinamik aloqa ma’lumotlari
├── services/                  # Axios client, API servislar va turlar
├── types/                     # umumiy TypeScript interfeyslari
├── public/locales/            # beshta til uchun tarjimalar
├── App.tsx                    # landing bo‘limlari kompozitsiyasi
├── i18n.js                    # i18next konfiguratsiyasi
└── main.tsx                   # ilovaning kirish nuqtasi
```

## Production build

```bash
npm run build
```

Build natijasi `dist/` papkasida yaratiladi. Sayt bitta sahifali va route ishlatmaydi, shu sababli oddiy statik hostingda joylashtirish mumkin.

## Ishlab chiqish eslatmalari

- Yangi API funksiyalarini `src/services/<domain>/` ichida service va type fayllariga ajrating.
- Yangi matnlarni barcha beshta locale fayliga qo‘shing.
- API response formatlari tegishli TypeScript interfeyslariga mos bo‘lishi kerak.
- Backend bazaviy URLni komponentlarda takrorlamasdan umumiy Axios client orqali ishlating.
- O‘zgarishlarni yuborishdan oldin `npm run build`ni bajaring.
