// Every word on the page, in both languages. The screenshots are the real app with sample data.
export type Lang = 'uz' | 'ru'

export const BOT_URL = 'https://t.me/ustaxonauz_bot?start'
export const APP_URL = 'https://app.ustaxona.uz'
export const NEXURA_URL = 'https://nexura.uz'

export const STATUSES = ['accepted', 'in_progress', 'ready', 'handed_over'] as const
export type Status = (typeof STATUSES)[number]

const uz = {
  title: 'Ustaxona: taʼmirxona uchun ilova',
  description:
    'Buyurtmalar, mijozlar va qarzlar bitta ilovada, mijoz esa buyurtma holatini Telegramda bilib turadi. Telefon, noutbuk, avtomobil va maishiy texnika ustaxonalari uchun.',
  nav: { how: 'Qanday ishlaydi', features: 'Imkoniyatlar', other: 'Русский', otherHref: '/ru', start: 'Boshlash' },
  hero: {
    title: 'Ustaxonangiz bitta ilovada',
    text: 'Buyurtmalar, mijozlar va qarzlar bir joyda, mijoz esa taʼmir holatini Telegramda bilib turadi. Telefon, noutbuk, avtomobil yoki maishiy texnika: qaysi taʼmir boʻlmasin.',
    start: 'Telegram botda boshlash',
    login: 'Ilovaga kirish',
    caption: 'Ilovadan skrinshotlar, namunaviy maʼlumotlar bilan.',
    alt: { desk: 'Buyurtmalar roʻyxati: holati, mijozi, summasi va muddati', phone: 'Telefondagi buyurtmalar roʻyxati' },
  },
  demo: {
    title: 'Mijoz har qadamni koʻradi',
    text: 'Usta holatni oʻzgartiradi, mijoz shu zahoti Telegramda xabar oladi. Qoʻngʻiroq qilib soʻrash shart emas. Tugmani bosib koʻring.',
    shop: 'Ustaxona ilovasi',
    chat: 'Mijozning Telegrami',
    bot: 'Ustaxona bot',
    restart: 'Qaytadan',
    actions: { accepted: 'Ishni boshlash', in_progress: 'Tayyor deb belgilash', ready: 'Mijozga topshirish' },
    statuses: { accepted: 'Qabul qilindi', in_progress: 'Taʼmirlanmoqda', ready: 'Tayyor', handed_over: 'Topshirildi' },
    customer: 'Jasur Karimov',
    problem: 'Ekran singan, sensor ishlamayapti',
    works: 'Bajarilgan ishlar',
    parts: 'Ehtiyot qismlar',
    total: 'Jami',
    money: 'soʻm',
    lines: [
      { kind: 'work', name: 'Ekran almashtirish', price: 150_000 },
      { kind: 'part', name: 'Ekran (original)', price: 950_000 },
    ],
    notes: {
      accepted: 'Holati oʻzgarganda xabar beramiz.',
      in_progress: '',
      ready: 'Buyurtmangiz tayyor, olib ketishingiz mumkin.',
      handed_over: 'Xizmat sizga yoqdimi? Baholang:',
    },
  },
  features: [
    {
      title: 'Mijoz va uning qarzi',
      text: 'Har bir mijozning buyurtmalari, toʻlovlari va qarzi bitta sahifada. Kim qancha qarz ekani doim aniq, qarzdorlar alohida roʻyxatda.',
      image: 'desk-customer',
      phoneImage: 'phone-customer',
      alt: 'Mijoz sahifasi: buyurtmalari, balansi va toʻlovlar tarixi',
    },
    {
      title: 'Hisobotlar',
      text: 'Bugun, hafta yoki oy boʻyicha: nechta buyurtma, qancha pul tushdi, qaysi qismlar koʻp ketdi. Muddati oʻtgan buyurtmalar ham shu yerda.',
      image: 'desk-reports',
      phoneImage: 'phone-reports',
      alt: 'Hisobotlar: hozirgi holat, buyurtmalar va pul',
    },
    {
      title: 'Jamoa bilan',
      text: 'Ustalarni havola orqali taklif qiling. Kim buyurtmani qabul qilgani va kim topshirgani yozib boriladi.',
      image: 'desk-order',
      phoneImage: 'phone-team',
      alt: 'Buyurtma sahifasi: ishlar, qismlar, muddat va kim qabul qilgani',
    },
  ],
  phone: {
    title: 'Telefonda ham',
    text: 'Kompyuter shart emas: ilova telefonda va Telegram ichida ishlaydi.',
    alt: 'Telefondagi buyurtma sahifasi',
  },
  kinds: {
    title: 'Qaysi taʼmir boʻlsa ham',
    list: ['Telefon', 'Planshet', 'Noutbuk', 'Kompyuter', 'Printer', 'Televizor', 'Kir yuvish mashinasi', 'Muzlatgich',
      'Konditsioner', 'Suv isitgich', 'Gaz plita', 'Changyutgich', 'Avtomobil'],
  },
  cta: {
    title: 'Boshlash uchun bitta qadam',
    text: 'Botga telefon raqamingizni yuboring: roʻyxatdan oʻtish shu. Keyin ilovada ustaxonangizni oching.',
    start: 'Telegram botda boshlash',
    bot: 'Ustaxona bot',
    // the bot's real first message and its contact button (backend app/bot.py)
    greeting: 'Assalomu alaykum! Ustaxonalar sizni telefon raqamingiz orqali taniydi. Raqamingizni yuborsangiz, barcha buyurtmalaringizni shu yerda koʻrasiz va tayyor boʻlganda xabar olasiz. Raqamingiz faqat shu maqsadda ishlatiladi.',
    press: 'Pastdagi tugmani bosing.',
    share: '📱 Raqamni yuborish',
  },
  footer: { app: 'Ilova', bot: 'Telegram bot', by: 'Nexura mahsuloti' },
}

const ru: typeof uz = {
  title: 'Ustaxona: приложение для мастерской',
  description:
    'Заказы, клиенты и долги в одном приложении, а клиент узнаёт статус заказа в Telegram. Для мастерских по ремонту телефонов, ноутбуков, автомобилей и бытовой техники.',
  nav: { how: 'Как это работает', features: 'Возможности', other: 'Oʻzbekcha', otherHref: '/', start: 'Начать' },
  hero: {
    title: 'Ваша мастерская в\u00a0одном приложении', // no lone «в» at a line end
    text: 'Заказы, клиенты и долги в одном месте, а клиент узнаёт о ремонте в Telegram. Телефоны, ноутбуки, автомобили или бытовая техника: любой ремонт.',
    start: 'Начать в Telegram-боте',
    login: 'Войти в приложение',
    caption: 'Снимки экрана приложения с примерными данными.',
    alt: { desk: 'Список заказов: статус, клиент, сумма и срок', phone: 'Список заказов на телефоне' },
  },
  demo: {
    title: 'Клиент видит каждый шаг',
    text: 'Мастер меняет статус, и клиент сразу получает сообщение в Telegram. Звонить и спрашивать не нужно. Нажмите кнопку.',
    shop: 'Приложение мастерской',
    chat: 'Telegram клиента',
    bot: 'Ustaxona бот',
    restart: 'Сначала',
    actions: { accepted: 'Начать работу', in_progress: 'Отметить готовым', ready: 'Выдать клиенту' },
    statuses: { accepted: 'Принят', in_progress: 'В работе', ready: 'Готов', handed_over: 'Выдан' },
    customer: 'Жасур Каримов',
    problem: 'Разбит экран, не работает сенсор',
    works: 'Выполненные работы',
    parts: 'Запчасти',
    total: 'Итого',
    money: 'сум',
    lines: [
      { kind: 'work', name: 'Замена экрана', price: 150_000 },
      { kind: 'part', name: 'Дисплей (оригинал)', price: 950_000 },
    ],
    notes: {
      accepted: 'Сообщим, когда статус изменится.',
      in_progress: '',
      ready: 'Заказ готов, можно забирать.',
      handed_over: 'Как вам обслуживание? Оцените:',
    },
  },
  features: [
    {
      title: 'Клиент и его долг',
      text: 'Заказы, платежи и долг каждого клиента на одной странице. Всегда видно, кто сколько должен, должники в отдельном списке.',
      image: 'desk-customer',
      phoneImage: 'phone-customer',
      alt: 'Страница клиента: заказы, баланс и история платежей',
    },
    {
      title: 'Отчёты',
      text: 'За день, неделю или месяц: сколько заказов, сколько денег пришло, какие запчасти уходят чаще. Просроченные заказы тоже здесь.',
      image: 'desk-reports',
      phoneImage: 'phone-reports',
      alt: 'Отчёты: что сейчас, заказы и деньги',
    },
    {
      title: 'Вместе с командой',
      text: 'Приглашайте мастеров по ссылке. Видно, кто принял заказ и кто его выдал.',
      image: 'desk-order',
      phoneImage: 'phone-team',
      alt: 'Страница заказа: работы, запчасти, срок и кто принял',
    },
  ],
  phone: {
    title: 'И на телефоне',
    text: 'Компьютер не нужен: приложение работает на телефоне и прямо в Telegram.',
    alt: 'Страница заказа на телефоне',
  },
  kinds: {
    title: 'Любой ремонт',
    list: ['Телефоны', 'Планшеты', 'Ноутбуки', 'Компьютеры', 'Принтеры', 'Телевизоры', 'Стиральные машины', 'Холодильники',
      'Кондиционеры', 'Водонагреватели', 'Газовые плиты', 'Пылесосы', 'Автомобили'],
  },
  cta: {
    title: 'Начать можно за минуту',
    text: 'Отправьте боту свой номер телефона: это и есть регистрация. Затем откройте мастерскую в приложении.',
    start: 'Начать в Telegram-боте',
    bot: 'Ustaxona бот',
    greeting: 'Здравствуйте! Мастерские узнают вас по номеру телефона. Отправьте номер — и вы увидите здесь все свои заказы и получите сообщение, когда они будут готовы. Номер используется только для этого.',
    press: 'Нажмите кнопку ниже.',
    share: '📱 Отправить номер',
  },
  footer: { app: 'Приложение', bot: 'Telegram-бот', by: 'Продукт Nexura' },
}

export const CONTENT = { uz, ru }
export type Content = typeof uz
