const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ru", "uz"];
const currentPathName = window.location.pathname;
let currentLang =
    localStorage.getItem("language") || checkBrowserLang() || "ru";
let currentTexts = {};

const mainTexts = {
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "menu__contact-2": {
        "uz": "BIZ BILAN BOG'LANING",
        "ru": "СВЯЗАТЬСЯ С НАМИ",
    },
    "about": {
        "uz": "'Agro Livestock' kompaniyasi yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "about_cont": {
        "uz": "Kompaniya 2015-yildan buyon faoliyat yuritib keladi.Shu vaqt oralig'ida ko'plab yirik loyihalar amalga oshirildi.Yevropaning bir nechta davlatidan, jumladan Germaniya, Gollandiya, Daniya, Fransiya, Slovakia, Avstriya, Estonia davlatlaridan naslli qoramollar Respublikaning deyarli barcha hududlariga import qilindi.O'zbekiston chorvador fermerlari bilan doimiy hamkorlik, qoramol tanlash jarayonlari va ularga sifatli xizmat ko'rsatish samarali yo'lga qo'yildi.",
        "ru": "Компания работает с 2015 года. За этот период было реализовано множество крупных проектов. Практически во все регионы республики завозился племенной скот из ряда европейских стран, в том числе из Германии, Голландии, Дании, Франции, Словакии, Австрии, Эстонии. Эффективно налажено постоянное сотрудничество с животноводами Узбекистана, процессы селекции крупного рогатого скота и предоставления им качественного обслуживания.",
    },
    "our_partners": {
        "uz": "BIZNING HAMKORLAR",
        "ru": "НАШИ ПАРТНЕРЫ",
    },
    "our_main_partners": {
        "uz": "ASOSIY HAMKORLAR",
        "ru": "ОСНОВНЫЕ ПАРТНЕРЫ",
    },
    "our_vaccines_partners": {
        "uz": "VAKSINA HAMKORLARI",
        "ru": "ПАРТНЕРЫ ВАКЦИНЫ",
    },
    "button_vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "button_cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "our_clients": {
        "uz": "BIZNING MIJOZLAR",
        "ru": "НАШИ КЛИЕНТЫ",
    },
    "contact_with_us": {
        "uz": "BIZ BILAN BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ С НАМИ",
    },
    "contact_manager": {
        "uz": "Telefon raqamingizni qoldiring va shaxsiy menegerimiz sizga tez orada qong’iroq qiladi",
        "ru": "Оставьте свой номер телефона и наш персональный менеджер перезвонит вам в ближайшее время",
    },
    "name": {
        "uz": "Ismingiz",
        "ru": "Имя",
    },
    "phone_number": {
        "uz": "Telefon raqamingiz",
        "ru": "Номер телефона",
    },
    "email": {
        "uz": "Elektron pochtangiz",
        "ru": "Электронная почта",
    },
    "button_send": {
        "uz": "Jo'natish",
        "ru": "Отправить",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },
};

const cowsTexts = {
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__cows_upper": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },
    "simmental": {
        "uz": "SIMMENTAL",
        "ru": "СИММЕНТАЛ",
    },
    "golshteyn": {
        "uz": "GOLSHTEYN QORAMOLI",
        "ru": "ГОЛШТИНСКАЯ ПОРОДА",
    },
    "red_golshteyn": {
        "uz": "QIZIL GOLSHTEYN",
        "ru": "КРАСНАЯ ГОЛШТИНСКАЯ ПОРОДА",
    },
    "shvet": {
        "uz": "SHVET",
        "ru": "ШВИЦКАЯ ПОРОДА",
    },
    "jersey": {
        "uz": "JERSEY",
        "ru": "ДЖЕРСЕЙСКАЯ",
    },
    "danish_red": {
        "uz": "DANIYA QIZIL ZOTI",
        "ru": "КРАСНАЯ ДАТСКАЯ",
    },
    "montbeliard": {
        "uz": "MONTBELIARD ZOTI",
        "ru": "МОНБЕЛЬЯРД",
    },
    "limuzin": {
        "uz": "LIMUZIN QORAMOLI",
        "ru": "ЛИМУЗИНСКАЯ ПОРОДА",
    },
    "sharole": {
        "uz": "SHAROLE",
        "ru": "ШАРОЛЕ",
    },
    "angus": {
        "uz": "SIMMENTAL",
        "ru": "АБЕРДИН-АНГУС",
    },
    "zaanen": {
        "uz": "ZAANEN ZOTI",
        "ru": "ЗААНЕНСКАЯ КОЗА",
    },
    "alp": {
        "uz": "ALP ZOTI",
        "ru": "АЛПИЙСКАЯ КОЗА",
    },
};

const galeryTexts = {
    "galery_title": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "more": {
        "uz": "Ko'proq",
        "ru": "Больше",
    },
    "close_button": {
        "uz": "Yopish",
        "ru": "Закрыть",
    },
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__cows_upper": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },
}

const vaccinesTexts = {
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__cows_upper": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },
    "about_vaccines": {
        "uz": "'RB-51 CZV' VAKSINASI",
        "ru": "ВАКЦИНА 'RB-51 CZV'"
    },
    "about_text": {
        "uz": "Vaksina haqida",
        "ru": "О вакцине"
    },
    "about_descr": {
        "uz": "• RB-51 vaksinasi Amerikaning Kolorado Serum kompaniyasi tomonidan patentlangan va ishlab chiqarilgan. RB-51 vaksinasi sut va go‘sht yo‘nalishidagi qoramollar uchun Qo‘shma Shtatlar qishloq xo‘jalik Departamenti tomonidan tasdiqlangan. Vaksina Xalqaro Epizootik Byuro (OIE) va Yevropa Ittifoqi tomonidan tasdiqlangan. Yevropa, Osiyo va Afrika mamlakatlari uchun mazkur vaksina Ispaniyaning “SZ VACCINES” kompaniyasi tomonidan ishlab chikarilmoqda. RB-51 vaksinasi Brutsellyoz kasaligining oldini olishida eng samarali vosita hisoblanadi.",
        "ru": "Внедрение вакцины РБ-51 не обнаруживается серотоксичными вакцинами, используемыми в ветеринарных лабораториях, обеспечивая при этом иммунитет стад крупного рогатого скота с уровнем защиты от 80% до 85% в зависимости от возраста. Это признано новым эффективным штаммом. Использование вакцины RB-51 позволило полностью улучшить здоровье поголовья животных США и Канады – это сотни миллионов поголовья. В настоящее время вакцина RB-51 широко используется в Бразилии, Мексике, Аргентине – в странах с миллионным поголовьем."
    },
    "illness_about": {
        "uz": "BRUTSILLIOZ KASALLIGI HAQIDA",
        "ru": "О БОЛЕЗНИ БРУЦЕЛЛЁЗ"
    },
    "illness_about-descr": {
        "uz": "• Xayvonlar brusellyozi (qora oqsoq) keng kasallik bo‘lib, xayvonning nerv va yurak tizimi, mushaklariga salbiy ta'siri orqali ularda ommaviy bola tashlash, qisir qolish, mahsuldorlikning kamayishi, mastit va endometrit, yosh mollarning yashovchanligi pasayishi bilan, ba'zan esa klinik belgilarsiz kechadi. Brusellyoz odamlar uchun ham o‘ta xavfli bo‘lib, o‘z vaqtida aniqlanmasa va davolanmasa nogironlikka olib keladi.",
        "ru": "• Бруцеллез животных (черная проказа) – широко распространенное заболевание, поражающее нервную и сердечную системы животных, вызывающее массовые аборты, бесплодие, снижение плодовитости, мастит и эндометрит, а иногда и снижение жизнеспособности молодняка крупного рогатого скота, протекающее без клинических признаков. Бруцеллез также очень опасен для человека и может привести к инвалидности, если его вовремя не обнаружить и не лечить."
    },
    "illness_about_sec": {
        "uz": "• Kasallikning qo‘zg‘atuvchisi brutsella guruxiga mansub bakteriyalar hisoblanadi.",
        "ru": "• Возбудителем заболевания являются бактерии группы бруцелл."
    },
    "illness-add-translate": {
        "uz": "• Brutsellalar tashqi muxit sharoitida ancha chidamlidir. Muzlatilgan go’sht maxsulotida 1,5 yilgacha yashaydi, xom va yaxshi pishirilmagan go’shtda 30 kungacha, brinza va pishloqda 15-40 kungacha, sutda 3-4 kungacha, o’zining yashovchanligini yo’qotmaydi. Suyuqlik muxitida esa 70 darajali issiqlikda 30 daqiqada zararsizlanadi va qaynatilganda darxol zararsizlanadi.",
        "ru": "• Броксельные породы значительны в контексте внешней среды. Он живет в замороженном мясном продукте до 1,5 года. В сыром и плохо приготовленном мясе до 30 дней. В Бринзе и в сыре 15-40 дней. В молоке до 3-4 дней не потеряет свою жизнеспособность. В жидкости при 70 градусов будут нейтрализованы в течение 30 минут, а при кипячении сразу же нейтрализуется."
    },
    "positives_title": {
        "uz": "“RB-51” VAKSINASINING BOSHQA SHU TURDAGI VAKSINALARDAN AFZALLIK TARAFLARI",
        "ru": "ПРЕИМУЩЕСТВА ВАКЦИНЫ «RB-51» ПЕРЕД ДРУГИМИ ВАКЦИНАМИ ЭТОГО ТИПА"
    },
    "positives_titl_2": {
        "uz": "RB-51 vaktsinasini joriy etish veterinariya laboratoriyalarida qo'llaniladigan serotoksik vaktsinalar tomonidan aniqlanmaydi, shu bilan birga qoramol podalari uchun yoshga qarab himoya darajasi 80% dan 85% gacha bo'lgan immunitetni ta'minlaydi. Bu yangi samarali shtamm sifatida tan olingan. RB-51 vaktsinasidan foydalanish Qo'shma Shtatlar va Kanadadagi hayvonlar podalari - yuz millionlab chorva mollarining sog'lig'ini butunlay yaxshiladi. Hozirgi vaqtda RB-51 vaktsinasi Braziliya, Meksika, Argentinada - million chorva mollari bo'lgan mamlakatlarda keng qo'llaniladi.",
        "ru": "Внедрение вакцины RB-51 не обнаруживается серотоксичными вакцинами, используемыми в ветеринарных лабораториях, обеспечивая при этом возрастной уровень защиты от 80% до 85% для стад крупного рогатого скота. Это признано новым эффективным штаммом. Использование вакцины RB-51 полностью улучшило здоровье стад животных – сотен миллионов животных – в США и Канаде. В настоящее время вакцина RB-51 широко используется в Бразилии, Мексике, Аргентине – странах с миллионным поголовьем."
    },
}

const simmentalTexts = {
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__cows_upper": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },


    "main_title-simmental": {
        "uz": "SIMMENTAL",
        "ru": "СИММЕНТАЛ",
    },
    "main_title_descr": {
        "uz": "Flekvieh deb ham ataladi. Ham sut mahsuloti, ham go’sht mahsuloti yetishtirish uchun ideal zot hisoblanadi.",
        "ru": "Также называется Флекви. Это идеальная порода как для молочного, так и для мясного производства.",
    },
    "come_from": {
        "uz": "MARKAZIY YEVROPADAN",
        "ru": "ИЗ ЦЕНТРАЛЬНОЙ ЕВРОПЫ",
    },
    "main_title-simmental-2": {
        "uz": "SIMMENTAL",
        "ru": "СИММЕНТАЛ",
    },
    "alt_name": {
        "uz": "Muqobil nomi",
        "ru": "Другое название",
    },
    "come_from_add": {
        "uz": "Kelib chiqishi",
        "ru": "Происхождение",
    },
    "colour": {
        "uz": "Rangi",
        "ru": "Цвет",
    },
    "hight": {
        "uz": "Balandligi",
        "ru": "Высота",
    },
    "overall_weight": {
        "uz": "Yakuniy og’irligi",
        "ru": "Окончательный вес",
    },
    "lifetime": {
        "uz": "Hayot davomiyligi",
        "ru": "Cрок жизни",
    },
    "about_breed": {
        "uz": "ZOT HAQIDA",
        "ru": "О ПОРОДЕ",
    },

    "about_simmental": {
        "uz": "SIMMENTAL ZOTI HAQIDA",
        "ru": "О ПОРОДЕ СИММЕНТАЛ",
    },
    "about_simmental_descr": {
        "uz": "Fleckvieh mol, deb nomlanuvchi Simmental ikki yo’nalishda foydalanish uchun to’g’ri keladi. Fleckvieh yaxshi parvarishlash, davolash orqali boshqa sutli qoramollarga qiyoslaganda sut mahsuldorligini ta’minlaydi, go’sht mahsuldorligini bir maromda saqlab qolish uchun bunga e’tibor qaratiladi. Fleckviehning go’sht va sut mahsuldorligi uning sog’lomligi, sermahsulligi, hayotiyligi, qat’iyligi va uzoq umr ko’rishi orqali kafolatlangan. Demografik jihatdan Fleckvieh Avstriya bo’ylab juda keng tarqalgan 1,6 million boshli hayvon hisoblanadi. Bular tog’ hududlaridan sharqiy pasttekisliklargacha tarqalgan.",
        "ru": "Симментальский скот, также известный как крупный рогатый скот Флекви, подходит для двустороннего использования. Флекви при хорошем уходе, лечении обеспечивает надой молока по сравнению с другим молочным скотом, уделяется внимание сохранению продуктивности мяса на одном уровне. Мясная и молочная продуктивность Флекви гарантируется ее здоровьем, плодовитостью, жизнеспособностью, выносливостью и долголетием. С демографической точки зрения флекви — очень распространенное животное: по всей Австрии насчитывается 1,6 миллиона голов скота. Они распространены от горных районов до восточных низменностей.",
    },
    // ##############################
    "meat_productivity": {
        "uz": "GO’SHT",
        "ru": "МЯСО",
    },
    "milk_productivity": {
        "uz": "SUT",
        "ru": "МОЛОКО",
    },
    "meat_productivity-add": {
        "uz": "Go’sht mahsuldorligi",
        "ru": "Мясная продуктивность",
    },
    "milk_productivity-add": {
        "uz": "Sut mahsuldorligi",
        "ru": "Молочная продуктивность",
    },
    "marbling": {
        "uz": "Marmarlash",
        "ru": "Мраморность",
    },
    "marbling-add": {
        "uz": "yaxshi marmarlangan",
        "ru": "хорошо мраморный",
    },
    "procent_milk": {
        "uz": "Sut mahsuldorligi (yiliga, litr)",
        "ru": "Надои молока (в год, литры)",
    },
    "content_in_milk": {
        "uz": "Sutdagi yog’ tarkibi",
        "ru": "Содержание жира в молоке",
    },
    "protein_content_in_milk": {
        "uz": "Sutdagi oqsil tarkibi",
        "ru": "Содержание белка в молоке",
    },
    // ##############################
    "oil_composion": {
        "uz": "Yog' tarkibi",
        "ru": "Состав масла",
    },
    "thin": {
        "uz": "ozg'in",
        "ru": "тонкий",
    },
    "structure": {
        "uz": "Paylar bo'linishi strukturasi",
        "ru": "Строение деления сухожилий",
    },
    "structure-add": {
        "uz": "notekis bo‘linadi",
        "ru": "делится неравномерно",
    },
    "fleckvieh": {
        "uz": "Fleckvieh",
        "ru": "Флекви",
    },
    "south_germany": {
        "uz": "Janubiy Germaniya, Shveysariya",
        "ru": "Южная Германия, Швейцария",
    },
    "white_light-skin": {
        "uz": "oq bosh; och dog’li terisi",
        "ru": "белая голова; бледная пятнистая кожа",
    },
    "h160sm": {
        "uz": "160 sm",
        "ru": "160 см",
    },
    "to900kg": {
        "uz": "900 kg gacha",
        "ru": "до 900 кг",
    },
    "long_lived": {
        "uz": "uzoq yashovchi",
        "ru": "долгоживущий",
    },
}

const alpTexts = {
    "milk_productivity-add": {
        "uz": "Sut mahsuldorligi",
        "ru": "Молочная продуктивность",
    },
    "milk_productivity": {
        "uz": "SUT",
        "ru": "МОЛОКО",
    },
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__cows_upper": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },
    // ################
    "alt_name": {
        "uz": "Muqobil nomi",
        "ru": "Другое название",
    },
    "come_from_add": {
        "uz": "Kelib chiqishi",
        "ru": "Происхождение",
    },
    "colour": {
        "uz": "Rangi",
        "ru": "Цвет",
    },
    "hight": {
        "uz": "Balandligi",
        "ru": "Высота",
    },
    "overall_weight": {
        "uz": "Yakuniy og’irligi",
        "ru": "Окончательный вес",
    },
    "lifetime": {
        "uz": "Hayot davomiyligi",
        "ru": "Cрок жизни",
    },
    "about_breed": {
        "uz": "ZOT HAQIDA",
        "ru": "О ПОРОДЕ",
    },
}

const angusTexts = {
    "meat_productivity-add": {
        "uz": "Go'sht mahsuldorligi",
        "ru": "Мясная продуктивность",
    },
    "meat_productivity": {
        "uz": "GO'SHT",
        "ru": "МЯСО",
    },
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__cows_upper": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },
    // ################
    "alt_name": {
        "uz": "Muqobil nomi",
        "ru": "Другое название",
    },
    "come_from_add": {
        "uz": "Kelib chiqishi",
        "ru": "Происхождение",
    },
    "colour": {
        "uz": "Rangi",
        "ru": "Цвет",
    },
    "hight": {
        "uz": "Balandligi",
        "ru": "Высота",
    },
    "overall_weight": {
        "uz": "Yakuniy og’irligi",
        "ru": "Окончательный вес",
    },
    "lifetime": {
        "uz": "Hayot davomiyligi",
        "ru": "Cрок жизни",
    },
    "about_breed": {
        "uz": "ZOT HAQIDA",
        "ru": "О ПОРОДЕ",
    },
}

const zaanenTexts = {
    "milk_productivity-add": {
        "uz": "Sut mahsuldorligi",
        "ru": "Молочная продуктивность",
    },
    "milk_productivity": {
        "uz": "SUT",
        "ru": "МОЛОКО",
    },
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__cows_upper": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },
    // ################
    "alt_name": {
        "uz": "Muqobil nomi",
        "ru": "Другое название",
    },
    "come_from_add": {
        "uz": "Kelib chiqishi",
        "ru": "Происхождение",
    },
    "colour": {
        "uz": "Rangi",
        "ru": "Цвет",
    },
    "hight": {
        "uz": "Balandligi",
        "ru": "Высота",
    },
    "overall_weight": {
        "uz": "Yakuniy og’irligi",
        "ru": "Окончательный вес",
    },
    "lifetime": {
        "uz": "Hayot davomiyligi",
        "ru": "Cрок жизни",
    },
    "about_breed": {
        "uz": "ZOT HAQIDA",
        "ru": "О ПОРОДЕ",
    },
}

const holsteinTexts = {
    "milk_productivity-add": {
        "uz": "Sut mahsuldorligi",
        "ru": "Молочная продуктивность",
    },
    "milk_productivity": {
        "uz": "SUT",
        "ru": "МОЛОКО",
    },
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__cows_upper": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },
    // ################
    "alt_name": {
        "uz": "Muqobil nomi",
        "ru": "Другое название",
    },
    "come_from_add": {
        "uz": "Kelib chiqishi",
        "ru": "Происхождение",
    },
    "colour": {
        "uz": "Rangi",
        "ru": "Цвет",
    },
    "hight": {
        "uz": "Balandligi",
        "ru": "Высота",
    },
    "overall_weight": {
        "uz": "Yakuniy og’irligi",
        "ru": "Окончательный вес",
    },
    "lifetime": {
        "uz": "Hayot davomiyligi",
        "ru": "Cрок жизни",
    },
    "about_breed": {
        "uz": "ZOT HAQIDA",
        "ru": "О ПОРОДЕ",
    },

    // #############

    "main_title-holstein": {
        "uz": "GOLSHTEYN QORAMOLI",
        "ru": "ПОРОДА ГОЛЬШТЕЙН",
    },
    "main_title-holstein-2": {
        "uz": "GOLSHTEYN QORAMOLI",
        "ru": "ПОРОДА ГОЛЬШТЕЙН",
    },
    "main_title_descr-holstein": {
        "uz":"Golshteyn qoramoli juda yuqori sut mahsulotigiga ega.",
        "ru":"Голштинский скот имеет очень высокие надои молока.",
    },
    "come_from-holstein": {
        "uz": "GERMANIYADAN",
        "ru": "ИЗ ГЕРМАНИИ",
    },
    "friesian": {
        "uz": "Holstein-Friesian",
        "ru": "Голштино-Фризская",
    },
    "germany_france": {
        "uz": "Germaniyadan, Fransiya, Estoniya va boshqalar",
        "ru": "Из Германии, Франции, Эстонии и т. д.",
    },
    "red-black": {
        "uz": "Qora va oq yoki qizil va oq mo’yna rang",
        "ru": "Черно-белый или красно-белый цвет меха",
    },
    "h155sm": {
        "uz": "155 sm",
        "ru": "155 см",
    },
    "to700kg": {
        "uz": "700 kg",
        "ru": "700 кг",
    },
    "live_time-durable": {
        "uz": "Bardoshli",
        "ru": "Долговечный",
    },
    "about_breed-holstein": {
        "uz": "GOLSHTEYN QORAMOLI HAQIDA",
        "ru": "О ПОРОДЕ ГОЛЬШТЕЙН",
    },
    "about_breed-holstein-2": {
        "uz": "Golshteyn qoramollari yuqori mahsuldor sigirlar bo’lib, ularning sut mahsuldorligiga katta e’tibor qaratiladi. Yuqori moslashuvchanlik, barqaror salomatlik, yaxshi samaradorligi asosiy va quruq ozuqa assortimenti esa rentabelli va uzoq yashovchi Golshteyn molini yaratish uchun asosiy baza hisoblanadi. Golshteyn sigirning yelini zamonaviy sog’ish texnologiyasiga moslashgan va ko’plab laktatsiyalarni hamda yuqori kunlik mahsuldorlikni kafolatlaydi. Bu zot tarqalgan hududni butun mamalakat bo’ylab topish mumkin.",
        "ru": "Голштинский скот – высокопродуктивные коровы, удою их уделяется большое внимание. Высокая адаптивность, стабильное здоровье, хорошая продуктивность являются ключевыми факторами, а ассортимент сухих кормов является основной, основой для создания прибыльного и долгоживущего скота голштинской породы. Корова голштинской породы адаптирована к современной технологии доения и гарантирует много лактаций и высокую суточную продуктивность. Эту породу можно встретить по всей стране.",
    },
    "procent_milk": {
        "uz": "Sut mahsuldorligi (yiliga, litr)",
        "ru": "Надои молока (в год, литры)",
    },
    "content_in_milk": {
        "uz": "Sutdagi yog’ tarkibi",
        "ru": "Содержание жира в молоке",
    },
    "protein_content_in_milk": {
        "uz": "Sutdagi oqsil tarkibi",
        "ru": "Содержание белка в молоке",
    },
}

const red_holsteinTexts = {
    "milk_productivity-add": {
        "uz": "Sut mahsuldorligi",
        "ru": "Молочная продуктивность",
    },
    "milk_productivity": {
        "uz": "SUT",
        "ru": "МОЛОКО",
    },
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__cows_upper": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },
    // ################
    "alt_name": {
        "uz": "Muqobil nomi",
        "ru": "Другое название",
    },
    "come_from_add": {
        "uz": "Kelib chiqishi",
        "ru": "Происхождение",
    },
    "colour": {
        "uz": "Rangi",
        "ru": "Цвет",
    },
    "hight": {
        "uz": "Balandligi",
        "ru": "Высота",
    },
    "overall_weight": {
        "uz": "Yakuniy og’irligi",
        "ru": "Окончательный вес",
    },
    "lifetime": {
        "uz": "Hayot davomiyligi",
        "ru": "Cрок жизни",
    },
    "about_breed": {
        "uz": "ZOT HAQIDA",
        "ru": "О ПОРОДЕ",
    },
    // #############33

    "main_title-red-holstein": {
        "uz": "QIZIL GOLSHTEYN QORAMOLI",
        "ru": "КРАСНАЯ ПОРОДА ГОЛЬШТЕЙН",
    },
    "main_title-red-holstein-2": {
        "uz": "QIZIL GOLSHTEYN QORAMOLI",
        "ru": "КРАСНАЯ ПОРОДА ГОЛЬШТЕЙН",
    },
    "main_title_descr-red-holstein": {
        "uz":"Qizil golshteyn shimoliy Yevropa tarqalgan yuqori sut mahsuldorligiga ega bo’lgan zotidir.",
        "ru":"Красная голштинская порода – порода с высоким удоем, распространенная в Северной Европе.",
    },
    "come_from-holstein": {
        "uz": "GERMANIYADAN",
        "ru": "ИЗ ГЕРМАНИИ",
    },
    "germany_france": {
        "uz": "Germaniyadan, Fransiya",
        "ru": "Из Германии, Франции",
    },
    "red-white": {
        "uz": "Och qizil va oq mo’yna",
        "ru": "Светло-красный и белый мех",
    },
    "h170sm": {
        "uz": "170 sm",
        "ru": "170 см",
    },
    "to1000kg": {
        "uz": "1000 kg",
        "ru": "1000 кг",
    },
    "live_time-durable": {
        "uz": "Bardoshli",
        "ru": "Долговечный",
    },
    "about_breed-red-holstein": {
        "uz": "QIZIL GOLSHTEYN QORAMOLI HAQIDA",
        "ru": "О КРАСНОЙ ПОРОДЕ ГОЛЬШТЕЙН",
    },
    "about_breed-holstein-2": {
        "uz": "Qizil golshteyn mahsuldorligi kuchli sut zotidir. Zotning kelib chiqiishi Germaniya hisoblanadi va u shimoliy Amerikagacha yetib borgan. Qizil Golshteyn kam muskulli, nozik tana tuzulishiga ega. Bu, ayniqsa, boqishda samarali hisoblanadi. Sutchilikka asoslangan fermerlar orasida qizil Golshteyn juda sevimli zot hisoblanadi, chunki yaxshi oziqlantirish asosida juda yaxshi sut mahsuldorligiga erishiladi.",
        "ru": "Красная голштинская порода – высокопродуктивная молочная порода. Родиной породы является Германия, а дошла она и до Северной Америки. У красной голштинской породы худощавое телосложение с небольшим количеством мышц. Особенно эффективен при кормлении. Красная голштинская порода — любимая порода среди молочных фермеров из-за ее превосходных надоев молока, основанных на хорошем питании.",
    },
    "procent_milk": {
        "uz": "Sut mahsuldorligi (yiliga, litr)",
        "ru": "Надои молока (в год, литры)",
    },
    "content_in_milk": {
        "uz": "Sutdagi yog’ tarkibi",
        "ru": "Содержание жира в молоке",
    },
    "protein_content_in_milk": {
        "uz": "Sutdagi oqsil tarkibi",
        "ru": "Содержание белка в молоке",
    },
}

const shvetTexts = {
    "milk_productivity-add": {
        "uz": "Sut mahsuldorligi",
        "ru": "Молочная продуктивность",
    },
    "milk_productivity": {
        "uz": "SUT",
        "ru": "МОЛОКО",
    },
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__cows_upper": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },
    // ################
    "alt_name": {
        "uz": "Muqobil nomi",
        "ru": "Другое название",
    },
    "come_from_add": {
        "uz": "Kelib chiqishi",
        "ru": "Происхождение",
    },
    "colour": {
        "uz": "Rangi",
        "ru": "Цвет",
    },
    "hight": {
        "uz": "Balandligi",
        "ru": "Высота",
    },
    "overall_weight": {
        "uz": "Yakuniy og’irligi",
        "ru": "Окончательный вес",
    },
    "lifetime": {
        "uz": "Hayot davomiyligi",
        "ru": "Cрок жизни",
    },
    "about_breed": {
        "uz": "ZOT HAQIDA",
        "ru": "О ПОРОДЕ",
    },
    // ################

    "main_title-holstein": {
        "uz": "SHVET ZOTI",
        "ru": "ШВИЦКАЯ ПОРОДА",
    },
    "main_title-holstein-2": {
        "uz": "SHVET ZOTI",
        "ru": "ШВИЦКАЯ ПОРОДА",
    },
    "main_title_descr-holstein": {
        "uz":"Sutchilikka asoslangan sog’lom zotdir, lekin ularni go’sht zotlariga chatishtirib birlashtirsa ham bo’ladi.",
        "ru":"Это здоровая порода, основанная на молочном животноводстве, но ее также можно скрещивать с мясными породами.",
    },
    "come_from-holstein": {
        "uz": "SVEYTSARIYADAN",
        "ru": "ИЗ ШВЕЙЦАРИИ",
    },
    "friesian": {
        "uz": "Jigarrang qoramol",
        "ru": "Коричневый скот",
    },
    "germany_france": {
        "uz": "Shveytsariyadan",
        "ru": "Из Швейцарии",
    },
    "red-black": {
        "uz": "Kulrang-jigarrang mo’yna",
        "ru": "Серо-коричневый мех",
    },
    "h155sm": {
        "uz": "155 sm",
        "ru": "155 см",
    },
    "to700kg": {
        "uz": "750 kg",
        "ru": "750 кг",
    },
    "live_time-durable": {
        "uz": "Bardoshli",
        "ru": "Долговечный",
    },
    "about_breed-holstein": {
        "uz": "SHVET HAQIDA",
        "ru": "О ШВИЦКОЙ ПОРОДЕ",
    },
    "about_breed-holstein-2": {
        "uz": "Shvet qoramol zotining kelib chiqishi Alp tog’lari hududi hisoblanib, u yerda keng tarqalgan. U sutga asoslangan sog’lom zotdir, lekin ularni go’sht zotlariga chatishtirib birlashtirsa ham bo’ladi. Shvet baquvvat, intensiv va ekstensiv boqishga mo’ljallangan. Shvet suti yaxshi oqsil mahsuldorligi bilan ham ajralib turadi. Bundan tashqari Shvet yuqori oziqlanish holati va optimal oziqlanuvchi zot hisoblanadi.",
        "ru": "Родиной шведской породы крупного рогатого скота считается регион Альп, где она широко распространена. Это здоровая порода на основе молока, но возможно их сочетание и с мясными породами. Швет предназначен для энергичного, интенсивного и экстенсивного кормления. Шветовое молоко также характеризуется хорошей белковой продуктивностью. Кроме того, швет – порода с высоким упитанностью и оптимальным питанием.",
    },
    "procent_milk": {
        "uz": "Sut mahsuldorligi (yiliga, litr)",
        "ru": "Надои молока (в год, литры)",
    },
    "content_in_milk": {
        "uz": "Sutdagi yog’ tarkibi",
        "ru": "Содержание жира в молоке",
    },
    "protein_content_in_milk": {
        "uz": "Sutdagi oqsil tarkibi",
        "ru": "Содержание белка в молоке",
    },
}

const jerseyTexts = {
    "milk_productivity-add": {
        "uz": "Sut mahsuldorligi",
        "ru": "Молочная продуктивность",
    },
    "milk_productivity": {
        "uz": "SUT",
        "ru": "МОЛОКО",
    },
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__cows_upper": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },
    // ################
    "alt_name": {
        "uz": "Muqobil nomi",
        "ru": "Другое название",
    },
    "come_from_add": {
        "uz": "Kelib chiqishi",
        "ru": "Происхождение",
    },
    "colour": {
        "uz": "Rangi",
        "ru": "Цвет",
    },
    "hight": {
        "uz": "Balandligi",
        "ru": "Высота",
    },
    "overall_weight": {
        "uz": "Yakuniy og’irligi",
        "ru": "Окончательный вес",
    },
    "lifetime": {
        "uz": "Hayot davomiyligi",
        "ru": "Cрок жизни",
    },
    "about_breed": {
        "uz": "ZOT HAQIDA",
        "ru": "О ПОРОДЕ",
    },
    // ######################

    "main_title-holstein": {
        "uz": "JERSEY ZOTI",
        "ru": "ДЖЕРСЕЙСКАЯ ПОРОДА",
    },
    "main_title-holstein-2": {
        "uz": "JERSEY ZOTI",
        "ru": "ДЖЕРСЕЙСКАЯ ПОРОДА",
    },
    "main_title_descr-holstein": {
        "uz":"Jersey qoramoli ayniqsa moslashuvchan va murakkab bo’lmagan zot hisoblanadi. bu asosan sut yetishtirish uchun boqiladi.",
        "ru":"Джерсийский крупный рогатый скот — особенно гибкая и несложная порода. В основном его выращивают для производства молока.",
    },
    "come_from-holstein": {
        "uz": "ISLANDIYADAN",
        "ru": "ИЗ ИСЛАНДИИ",
    },
    "germany_france": {
        "uz": "Islandiya",
        "ru": "Из Исландии",
    },
    "red-black": {
        "uz": "Ko’pincha och jigarrang mo’yna",
        "ru": "Зачастую светло-коричневый мех.",
    },
    "h155sm": {
        "uz": "135 sm",
        "ru": "135 см",
    },
    "to700kg": {
        "uz": "400 kg gacha",
        "ru": "до 400 кг",
    },
    "live_time-durable": {
        "uz": "Bardoshli",
        "ru": "Долговечный",
    },
    "about_breed-holstein": {
        "uz": "JERSEY ZOTI HAQIDA",
        "ru": "О ДЖЕРСЕЙСКОЙ ПОРОДЕ",
    },
    "about_breed-holstein-2": {
        "uz": "Jersey Qoramoli dastlab Jersey kanal orolidan kelib chiqqan. U dunyodagi eng qadimiy zotlardan hisoblanadi va dunyo bo’ylab o’z xususiyati bo’yicha yuqori baholanadi. Katta afzalliklariga: yuqori sut mahsuldorligi, baquvvat, chidamliligi va hayvonning yuvosh xususiyati kiradi. Bundan tashqari Jersey qoramollari sermahsul, uzoq yashovchi, boqishda kam sarf-xarajatli va tug’ish jarayonlari murakkab kechmaydi. Jersey qoramollari har qanday holatlatga va moslashuvchanlik xususiyatiga ega turli boqish shakllariga to’g’ri keladi. Sut yetishtirish uchun ozuqadan juda samarali foydalaniladi.",
        "ru": "Джерсийский скот изначально возник с острова Джерси. Она считается одной из старейших пород в мире и высоко ценится за свои характеристики во всем мире. К основным преимуществам относятся: высокие надои, сила, выносливость и покладистость животного. Кроме того, джерсейский скот отличается продуктивностью, долголетием, малозатратностью в кормлении, а процессы отела не сложны. Джерсейский скот подходит для любых условий и гибких форм кормления. Корм используются очень эффективно для производства молока.",
    },
    "procent_milk": {
        "uz": "Sut mahsuldorligi (yiliga, litr)",
        "ru": "Надои молока (в год, литры)",
    },
    "content_in_milk": {
        "uz": "Sutdagi yog’ tarkibi",
        "ru": "Содержание жира в молоке",
    },
    "protein_content_in_milk": {
        "uz": "Sutdagi oqsil tarkibi",
        "ru": "Содержание белка в молоке",
    },
}

const danishTexts = {
    "milk_productivity-add": {
        "uz": "Sut mahsuldorligi",
        "ru": "Молочная продуктивность",
    },
    "milk_productivity": {
        "uz": "SUT",
        "ru": "МОЛОКО",
    },
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__cows_upper": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },
    // ################
    "alt_name": {
        "uz": "Muqobil nomi",
        "ru": "Другое название",
    },
    "come_from_add": {
        "uz": "Kelib chiqishi",
        "ru": "Происхождение",
    },
    "colour": {
        "uz": "Rangi",
        "ru": "Цвет",
    },
    "hight": {
        "uz": "Balandligi",
        "ru": "Высота",
    },
    "overall_weight": {
        "uz": "Yakuniy og’irligi",
        "ru": "Окончательный вес",
    },
    "lifetime": {
        "uz": "Hayot davomiyligi",
        "ru": "Cрок жизни",
    },
    "about_breed": {
        "uz": "ZOT HAQIDA",
        "ru": "О ПОРОДЕ",
    },
    // ######################

    "main_title-holstein": {
        "uz": "DANIYA QIZIL ZOTI",
        "ru": "КРАСНАЯ ДАТСКАЯ ПОРОДА",
    },
    "main_title-holstein-2": {
        "uz": "DANIYA QIZIL ZOTI",
        "ru": "КРАСНАЯ ДАТСКАЯ",
    },
    "main_title_descr-holstein": {
        "uz":"JDaniya qizil zoti chidamli qoramol zotidir. u ayniqsa sut yetishtirishga to’g’ri keladi.",
        "ru":"Датская красная порода — выносливая порода крупного рогатого скота. Он особенно подходит для производства молока.",
    },
    "come_from-holstein": {
        "uz": "DANIYADAN",
        "ru": "ИЗ ДАНИИ",
    },
    "alt_name-holstein": {
        "uz":"Daniya sutli qoramollari",
        "ru":"Датский молочный скот",
    },
    "germany_france": {
        "uz": "Daniyadan",
        "ru": "Из Дании",
    },
    "red-black": {
        "uz": "Qizil mo’yna",
        "ru": "Красный мех",
    },
    "h155sm": {
        "uz": "140 sm",
        "ru": "140 см",
    },
    "to700kg": {
        "uz": "900 kg gacha",
        "ru": "до 900 кг",
    },
    "live_time-durable": {
        "uz": "Bardoshli",
        "ru": "Долговечный",
    },
    "about_breed-holstein": {
        "uz": "DANIYA QIZIL ZOTI HAQIDA",
        "ru": "О ДАНСКОЙ КРАСНОЙ ПОРОДЕ",
    },
    "about_breed-holstein-2": {
        "uz": "Daniya nomidan ham ko’rinib turibdiki, Daniyada paydo bo’lgan. Bu uzoq yashovchi va chidamlilik xususiyatiga ega zotdir. Daniya zoti sut mahsuldorligini yaxshilash uchun chatishtirib birlashtirishda juda ham mashhurdir. Genetik jihatdan zot Angler qoramoliga yaqin turadi.",
        "ru": "Как видно из названия Дания, оно возникло в Дании. Это долгоживущая и выносливая порода. Датская порода очень популярна в скрещивании для улучшения молочной продуктивности. Генетически порода близка к Англерскому скоту.",
    },
    "procent_milk": {
        "uz": "Sut mahsuldorligi (yiliga, litr)",
        "ru": "Надои молока (в год, литры)",
    },
    "content_in_milk": {
        "uz": "Sutdagi yog’ tarkibi",
        "ru": "Содержание жира в молоке",
    },
    "protein_content_in_milk": {
        "uz": "Sutdagi oqsil tarkibi",
        "ru": "Содержание белка в молоке",
    },
}

const montbeliardTexts = {
    "meat_productivity-add": {
        "uz": "Go'sht mahsuldorligi",
        "ru": "Мясная продуктивность",
    },
    "meat_productivity": {
        "uz": "GO'SHT",
        "ru": "МЯСО",
    },
    "milk_productivity-add": {
        "uz": "Sut mahsuldorligi",
        "ru": "Молочная продуктивность",
    },
    "milk_productivity": {
        "uz": "SUT",
        "ru": "МОЛОКО",
    },
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__cows_upper": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },
    "alt_name": {
        "uz": "Muqobil nomi",
        "ru": "Другое название",
    },
    "come_from_add": {
        "uz": "Kelib chiqishi",
        "ru": "Происхождение",
    },
    "colour": {
        "uz": "Rangi",
        "ru": "Цвет",
    },
    "hight": {
        "uz": "Balandligi",
        "ru": "Высота",
    },
    "overall_weight": {
        "uz": "Yakuniy og’irligi",
        "ru": "Окончательный вес",
    },
    "lifetime": {
        "uz": "Hayot davomiyligi",
        "ru": "Cрок жизни",
    },
    "about_breed": {
        "uz": "ZOT HAQIDA",
        "ru": "О ПОРОДЕ",
    },
    // ######################

    "main_title-holstein": {
        "uz": "MONTBELIARD ZOTI",
        "ru": "ПОРОДА МОНБЕЛЬЯРД",
    },
    "main_title-holstein-2": {
        "uz": "MONTBELIARD ZOTI",
        "ru": "ПОРОДА МОНБЕЛЬЯРД",
    },
    "main_title_descr-holstein": {
        "uz":"Montbeliard qoramoli sut va pishloq yetishtirishda mashhur zotdir.",
        "ru":"Монбельярский скот — популярная порода для производства молока и сыра.",
    },
    "come_from-holstein": {
        "uz": "FRANTSIYADAN",
        "ru": "ИЗ ФРАНЦИИ",
    },
    "germany_france": {
        "uz": "Fransiyadan",
        "ru": "Из Франции",
    },
    "red-black": {
        "uz": "Qizil va oq mo’yna",
        "ru": "Красный и белый мех",
    },
    "h155sm": {
        "uz": "150 sm",
        "ru": "150 см",
    },
    "to700kg": {
        "uz": "700 kg gacha",
        "ru": "до 700 кг",
    },
    "live_time-durable": {
        "uz": "Bardoshli",
        "ru": "Долговечный",
    },
    "about_breed-holstein": {
        "uz": "MONTBELIARD ZOTI HAQIDA",
        "ru": "О ПОРОДЕ МОНБЕЛЬЯРД",
    },
    "about_breed-holstein-2": {
        "uz": "Montbeliard qoramolini asosan Fransiyaning shu nomli Montbeliard hududidan topish mumkin. Yuqori chastota sababli turli pishloq variantlari va past sonli xujayra-to’qimalari ayniqsa sut va pishloq yetishtirish uchun laktatsiya davrida katta yoshdagilarida taxminan 7480 litr atrofida bo’ladi. Montbeliard qoramoli Golshteyn qoramoliga nisbatan, yuqori serunumdorlik va uzoq yashovshanlikka ega, lekin kamroq sut beradi. Shuningdek ularning go’sht xususiyatlari ham Golshteyn qoramolinikiga ko’ra yaxshiroqdir.",
        "ru": "Монбельярский скот можно встретить в основном в одноименном регионе Монбельяр во Франции. Из-за высокой частоты различных вариантов сыра и малого количества клеток-тканей, особенно для производства молока и сыра, в период лактации взрослая особь составляет около 7480 литров. По сравнению с голштинским скотом монбельярский скот имеет более высокую сывороточную продуктивность и продолжительность жизни, но дает меньше молока. Также их мясные характеристики лучше, чем у голштинского скота.",
    },
    "procent_milk": {
        "uz": "Sut mahsuldorligi (yiliga, litr)",
        "ru": "Надои молока (в год, литры)",
    },
    "content_in_milk": {
        "uz": "Sutdagi yog’ tarkibi",
        "ru": "Содержание жира в молоке",
    },
    "protein_content_in_milk": {
        "uz": "Sutdagi oqsil tarkibi",
        "ru": "Содержание белка в молоке",
    },
    "marbling-add": {
        "uz": "Marmarlash",
        "ru": "Мраморность",
    },
    "marbling-value": {
        "uz": "bir paytda marmarlanadi",
        "ru": "мраморный в одно время",
    },
    "color-2": {
        "uz":"Ragni",
        "ru":"Цвет",
    },
    "color-value": {
        "uz":"bir xil qizil rang",
        "ru":"тот же красный цвет",
    },
    "structure-2": {
        "uz":"Muskul-pay to'qima strukturasi",
        "ru":"Строение мышечной ткани",
    },
    "structure-value": {
        "uz":"ayrim joylarida kam",
        "ru":"в некоторых местах меньше",
    },
}

const limousinTexts = {
    "meat_productivity-add": {
        "uz": "Go'sht mahsuldorligi",
        "ru": "Мясная продуктивность",
    },
    "meat_productivity": {
        "uz": "GO'SHT",
        "ru": "МЯСО",
    },
    "milk_productivity-add": {
        "uz": "Sut mahsuldorligi",
        "ru": "Молочная продуктивность",
    },
    "milk_productivity": {
        "uz": "SUT",
        "ru": "МОЛОКО",
    },
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__cows_upper": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },
    "alt_name": {
        "uz": "Muqobil nomi",
        "ru": "Другое название",
    },
    "come_from_add": {
        "uz": "Kelib chiqishi",
        "ru": "Происхождение",
    },
    "colour": {
        "uz": "Rangi",
        "ru": "Цвет",
    },
    "hight": {
        "uz": "Balandligi",
        "ru": "Высота",
    },
    "overall_weight": {
        "uz": "Yakuniy og’irligi",
        "ru": "Окончательный вес",
    },
    "lifetime": {
        "uz": "Hayot davomiyligi",
        "ru": "Cрок жизни",
    },
    "about_breed": {
        "uz": "ZOT HAQIDA",
        "ru": "О ПОРОДЕ",
    },

    // #################################
    
    "main_title-holstein": {
        "uz": "LIMUZIN ZOTI",
        "ru": "ПОРОДА ЛИМУЗИН",
    },
    "main_title-holstein-2": {
        "uz": "LIMUZIN ZOTI",
        "ru": "ПОРОДА ЛИМУЗИН",
    },
    "main_title_descr-holstein": {
        "uz":"Limuzin qoramoli ayniqsa, muskulli va yuqori go’sht mahsuldorligiga ega.",
        "ru":"Лимузинский скот отличается особой мускулистостью и высокой мясной продуктивностью.",
    },
    "come_from-holstein": {
        "uz": "FRANTSIYADAN",
        "ru": "ИЗ ФРАНЦИИ",
    },
    "germany_france": {
        "uz": "Fransiyadan",
        "ru": "Из Франции",
    },
    "red-black": {
        "uz": "Qizil-jigarrangdan bug’doy ranggacha",
        "ru": "Цвет от красно-коричневого до пшеничного",
    },
    "h155sm": {
        "uz": "150 sm",
        "ru": "150 см",
    },
    "to700kg": {
        "uz": "1400 kg gacha",
        "ru": "до 1400 кг",
    },
    "live_time-durable": {
        "uz": "Juda uzoq yashovchi",
        "ru": "Очень долгоживущий",
    },
    "about_breed-holstein": {
        "uz": "LIMUZIN ZOTI HAQIDA",
        "ru": "О ПОРОДЕ ЛИМУЗИН",
    },
    "about_breed-holstein-2": {
        "uz": "Limuzin qoramoli Fransiyaning shu nomli Limuzin hududidan kelib chiqqan bolib, bugungi kunda asosan go’sht mahsuldorligi uchun yetishtiriladi. Tirik vazni bilan 1,4 tonnali buqalarni ozuqaga katta e’tibor berish natijasida juda yaxshi vazn oladilar va uning go’shti yuqori sifatga ega bo’ladi. Sho’x Limuzin qoramoli ajoyib moslashuvchanlik darajasiga ega va juda bardoshli, uzoq yashovchidir. Biroq uning suti erta tug’ilganlari va ularga foyda bo’lishi uchun ona suti vazivasini bajarishga xizmat qiladi.",
        "ru": "Долгоживущий лимузинский скот возник в регионе Лимузин во Франции, и сегодня его разводят в основном для производства мяса. Бычки живой массой 1,4 тонны набирают очень хороший вес, а их мясо имеет высокое качество в результате большого внимания к кормлению. Рогатый лимузинский скот обладает превосходным уровнем адаптируемости, очень вынослив и долговечен. Однако ее молоко служит для выполнения долга материнского молока на благо недоношенных детей.",
    },
    "procent_milk": {
        "uz": "Sut mahsuldorligi (yiliga, litr)",
        "ru": "Надои молока (в год, литры)",
    },
    "content_in_milk": {
        "uz": "Sutdagi yog’ tarkibi",
        "ru": "Содержание жира в молоке",
    },
    "protein_content_in_milk": {
        "uz": "Sutdagi oqsil tarkibi",
        "ru": "Содержание белка в молоке",
    },
    "marbling-add": {
        "uz": "Marmarlash",
        "ru": "Мраморность",
    },
    "marbling-value": {
        "uz": "bir paytda marmarlanadi",
        "ru": "мраморный в одно время",
    },
    "color-2": {
        "uz":"Ragni",
        "ru":"Цвет",
    },
    "color-value": {
        "uz":"Qizg'ich, qizil",
        "ru":"красноватый",
    },
    "structure-2": {
        "uz":"Muskul-pay to'qima strukturasi",
        "ru":"Строение мышечной ткани",
    },
    "structure-value": {
        "uz":"mayda muskul-paylar",
        "ru":"маленькие мышцы",
    },
}

const charolaisTexts = {
    "meat_productivity-add": {
        "uz": "Go'sht mahsuldorligi",
        "ru": "Мясная продуктивность",
    },
    "meat_productivity": {
        "uz": "GO'SHT",
        "ru": "МЯСО",
    },
    "menu__about": {
        "uz": "BIZ HAQIMIZDA",
        "ru": "О НАС",
    },
    "menu__cows": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__cows_upper": {
        "uz": "ZOTLAR",
        "ru": "ПОРОДЫ",
    },
    "menu__vaccines": {
        "uz": "VAKSINALAR",
        "ru": "ВАКЦИНЫ",
    },
    "menu__galery": {
        "uz": "GALEREYA",
        "ru": "ГАЛЕРЕЯ",
    },
    "menu__partners": {
        "uz": "HAMKORLAR",
        "ru": "ПАРТНЕРЫ",
    },
    "menu__clients": {
        "uz": "MIJOZLAR",
        "ru": "КЛИЕНТЫ",
    },
    "menu__contact": {
        "uz": "BOG'LANISH",
        "ru": "СВЯЗАТЬСЯ",
    },
    "menu__cows-2": {
        "uz": "Zotlar",
        "ru": "Породы",
    },
    "menu__vaccines-2": {
        "uz": "Vaksinalar",
        "ru": "Вакцины",
    },
    "menu__galery-2": {
        "uz": "Galereya",
        "ru": "Галерея",
    },
    "menu__partners-2": {
        "uz": "Hamkorlar",
        "ru": "Партнеры",
    },
    "menu__contact-3": {
        "uz": "Bog'lanish",
        "ru": "Связаться",
    },
    "footer_about": {
        "uz": "Yevropadan naslli qoramollar, chorvachilik komplekslari uchun uskunalar yetkazib berish, qoramollarni oziqlantirish texnalogiyasini o'rgatish va ba'zi dori-vositalari importi bilan shug'ullanib keladi.",
        "ru": "Компания «Агро Livestock» занимается поставками племенного скота, оборудования для животноводческих комплексов, обучением технологии кормления скота и импортом некоторых медикаментов из Европы.",
    },
    "footer_main": {
        "uz": "ASOSIY",
        "ru": "ОСНОВНЫЕ",
    },
    "footer_info": {
        "uz": "MA'LUMOT",
        "ru": "ИНФОРМАЦИЯ",
    },
    "footer_phone": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "footer_phone-2": {
        "uz": "TELEFON",
        "ru": "ТЕЛЕФОН",
    },
    "privacy_polity": {
        "uz": "Agro Livestock | Barcha huquqlar himoyalangan.",
        "ru": "Agro Livestock | Все права защищены.",
    },
    // ################
    "alt_name": {
        "uz": "Muqobil nomi",
        "ru": "Другое название",
    },
    "come_from_add": {
        "uz": "Kelib chiqishi",
        "ru": "Происхождение",
    },
    "colour": {
        "uz": "Rangi",
        "ru": "Цвет",
    },
    "hight": {
        "uz": "Balandligi",
        "ru": "Высота",
    },
    "overall_weight": {
        "uz": "Yakuniy og’irligi",
        "ru": "Окончательный вес",
    },
    "lifetime": {
        "uz": "Hayot davomiyligi",
        "ru": "Cрок жизни",
    },
    "about_breed": {
        "uz": "ZOT HAQIDA",
        "ru": "О ПОРОДЕ",
    },
    // #################################
    
    "main_title-holstein": {
        "uz": "SHAROLE ZOTI",
        "ru": "ПОРОДА ШАРОЛЕ",
    },
    "main_title-holstein-2": {
        "uz": "SHAROLE ZOTI",
        "ru": "ПОРОДА ШАРОЛЕ",
    },
    "main_title_descr-holstein": {
        "uz":"Fransuz sharole qoramoli ayniqsa qulay so’yishga erishiladigan va go’sht yetishtirishga to’g’ri keladi.",
        "ru":"Французский скот Шароле особенно подходит для убоя и производства мяса.",
    },
    "come_from-holstein": {
        "uz": "FRANTSIYADAN",
        "ru": "ИЗ ФРАНЦИИ",
    },
    "germany_france": {
        "uz": "Fransiyadan",
        "ru": "Из Франции",
    },
    "red-black": {
        "uz": "Krem rang",
        "ru": "Кремового цвета",
    },
    "h155sm": {
        "uz": "150 sm",
        "ru": "150 см",
    },
    "to700kg": {
        "uz": "1100 kg gacha",
        "ru": "до 1100 кг",
    },
    "live_time-durable": {
        "uz": "bardoshli",
        "ru": "долгоживущий",
    },
    "about_breed-holstein": {
        "uz": "SHAROLE QORAMOLI HAQIDA",
        "ru": "О ШАРОЛЬСКОМ СКОТЕ",
    },
    "about_breed-holstein-2": {
        "uz": "Fransuz Sharole qoramoli Burgund hududidan kelib chiqqan bo’lib, o’zini och rangli terisi orqali boshqa qoramol zotlariga qaraganda ancha issiqqa chidamlidir. U juda yaxshi ozuqani hazm qiluvchi va o’ziga asosiy ozuqa orqali kunga 1400 gr vazn oladi.O’sining yuqori vaznligi sababli go’sht yetishtirishga juda mosdir va juda yaxshi qulay so’yish imkoniyatiga ega, qoramolning 70 % lariga shu usuldan foydalanadi. Bu zotning go’shtida yog’ qizmi ozdir.",
        "ru": "Французский скот Шароле происходит из Бургундии и более устойчив к жаре, чем другие породы крупного рогатого скота, из-за бледной кожи. Он очень хорошо переваривает пищу и набирает 1400 г веса в день за счет основного корма. Благодаря большому весу жира он очень пригоден для производства мяса и имеет очень хороший удобный метод убоя, его используют 70% крупного рогатого скота. метод. В мясе этой породы мало жира.",
    },
    "marbling-add": {
        "uz": "Marmarlash",
        "ru": "Мраморность",
    },
    "marbling-value": {
        "uz": "Yaxshi marmarlanadi",
        "ru": "Хорошо мраморный",
    },
    "color-2": {
        "uz":"Hidi",
        "ru":"Запах",
    },
    "color-value": {
        "uz":"Xushbo'y",
        "ru":"Ароматный",
    },
    "structure-2": {
        "uz":"Xususiyati",
        "ru":"Характеристика",
    },
    "structure-value": {
        "uz":"Juda kam miqdordagi to’yingan yog‘ kislotalar",
        "ru":"Очень мало насыщенных жирных кислот",
    },
}
// Проверка пути страницы сайта
function checkPagePathName() {
    switch (currentPathName) {
        case "/index.html":
            currentTexts = mainTexts;
            break;
        case "/cowses.html":
            currentTexts = cowsTexts;
            break;
        case "/galery.html":
            currentTexts = galeryTexts;
            break;
        case "/vaccines.html":
            currentTexts = vaccinesTexts;
            break;
        case "/cows_info/simmental_info.html":
            currentTexts = simmentalTexts
            break;
        case "/cows_info/alp_info.html":
            currentTexts = alpTexts
            break;
        case "/cows_info/angus_info.html":
            currentTexts = angusTexts
            break;
        case "/cows_info/bueffel_info.html":
            currentTexts = zaanenTexts
            break;
        case "/cows_info/charolais_info.html":
            currentTexts = charolaisTexts
            break;
        case "/cows_info/danish_info.html":
            currentTexts = danishTexts
            break;
        case "/cows_info/holstein_info.html":
            currentTexts = holsteinTexts
            break;
        case "/cows_info/jersey_info.html":
            currentTexts = jerseyTexts
            break;
        case "/cows_info/limousin_info.html":
            currentTexts = limousinTexts
            break;
        case "/cows_info/montbeliar_info.html":
            currentTexts = montbeliardTexts
            break;
        case "/cows_info/red_holstein_info.html":
            currentTexts = red_holsteinTexts
            break;
        case "/cows_info/shvet_info.html":
            currentTexts = shvetTexts
            break;
        default:
            currentTexts = mainTexts;
            break;
    }
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
    for (const key in currentTexts) {
        let elem = document.querySelector(`[data-lang=${key}]`);
        if (elem) {
            elem.textContent = currentTexts[key][currentLang];
        }
    }
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (!event.target.classList.contains("header__btn_active")) {
            currentLang = event.target.dataset.btn;
            localStorage.setItem("language", event.target.dataset.btn);
            resetActiveClass(langButtons, "header__btn_active");
            btn.classList.add("header__btn_active");
            changeLang();
        }
    });
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
    arr.forEach((elem) => {
        elem.classList.remove(activeClass);
    });
}

// Проверка активной кнопки
function checkActiveLangButton() {
    switch (currentLang) {
        case "ru":
            document
                .querySelector('[data-btn="ru"]')
                .classList.add("header__btn_active");
            break;
        case "uz":
            document
                .querySelector('[data-btn="uz"]')
                .classList.add("header__btn_active");
            break;

        default:
            document
                .querySelector('[data-btn="ru"]')
                .classList.add("header__btn_active");
            break;
    }
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
    const navLang = navigator.language.slice(0, 2).toLowerCase();
    const result = allLangs.some((elem) => {
        return elem === navLang;
    });
    if (result) {
        return navLang;
    }
}

console.log("navigator.language", checkBrowserLang());


function consoleBG() {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const mediaSquery = window.matchMedia('(min-width: 768px)');
    let hoverPrev = document.querySelector('.preview');
    if ($(window).scrollTop() == 0 && mediaSquery.matches) {
        $('#scroll').css('background', 'none');
        $('#scroll').css('transition', '0.5s all');
        $('.header__logo_link').css('color', '#03463F');
        $('.header__logo_link-a').css('color', '#03463F');
        $('.menu__link').css('color', '#03463F');
        $('.menu__link:hover').css('color', '#03463F');
        $('.menu__link:after').css('background', '#03463F');
        $('.menu__link:hover:after').css('background', '#03463F');
        $('.hamburger_span').css('background', '#03463F');
        $('.header__btn').css('color', '#03463F');
        $('.header__btn').css('border-color', '#03463F');
    }
    else {
        $('#scroll').css('background', 'rgba(3, 70, 63, 0.80)');
        $('.header__logo_link').css('color', '#fff');
        $('.menu__link').css('color', '#fff');
        $('.menu__link:hover').css('color', '#fff');
        $('.hamburger_span').css('background', '#fff');
        $('.header__logo_link-a').css('color', '#fff');
        $('.header__btn').css('color', '#fff');
        $('.header__btn').css('border-color', '#fff');
    }
    if ($(window).scrollTop() == 0 && mediaQuery.matches) {
        $('.menu__link').css('color', '#fff');
        $('#scroll').css('background', 'none');
        $('.hamburger_span').css('background', '#03463F');
        $('.header__logo_link').css('color', '#03463F');
        $('.header__logo_link-a').css('color', '#03463F');

    }
}

consoleBG();

$(window).scroll(function () {
    consoleBG();
});

window.addEventListener('DOMContentLoaded', () => {
    menu = document.querySelector('.menu');
    menuItem = document.querySelectorAll('.menu__item');
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

function VidView() {
    let btnFirst = document.querySelector('.a1_position');
    let btnSecond = document.querySelector('.a2_position');
    let btnThird = document.querySelector('.a3_position');
    let btnFourth = document.querySelector('.a4_position');
    let btnFifth = document.querySelector('.a5_position');
    let btnSixth = document.querySelector('.a6_position');
    let btnSeventh = document.querySelector('.a7_position');
    let btnEighth = document.querySelector('.a8_position');
    let btnNinth = document.querySelector('.a9_position');
    let btnTenth = document.querySelector('.a10_position');

    btnFirst.addEventListener('click', () => {
        window.location = 'htmltovid/vidfirst.html';
    })
    btnSecond.addEventListener('click', () => {
        window.location = 'htmltovid/vidsecond.html';
    })
    btnThird.addEventListener('click', () => {
        window.location = "htmltovid/vidthird.html";
    })
    btnFourth.addEventListener('click', () => {
        window.location = "htmltovid/vidfourth.html";
    })
    btnFifth.addEventListener('click', () => {
        window.location = "htmltovid/vidfifth.html";
    })
    btnSixth.addEventListener('click', () => {
        window.location = "htmltovid/vidsixth.html";
    })
    btnSeventh.addEventListener('click', () => {
        window.location = "htmltovid/vidseventh.html";
    })
    btnEighth.addEventListener('click', () => {
        window.location = "htmltovid/videighth.html";
    })
    btnNinth.addEventListener('click', () => {
        window.location = "htmltovid/vidninth.html";
    })
    btnTenth.addEventListener('click', () => {
        window.location = "htmltovid/vidtenth.html";
    })
}


VidView();

window.addEventListener("mousewheel", function (e) {
    if (e.ctrlKey) {
        e.preventDefault();
        return false;
    }
}, { passive: false });