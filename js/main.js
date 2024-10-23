const mediaQuery = window.matchMedia('(max-width: 768px)');
const mediaSquery = window.matchMedia('(min-width: 768px)');
$(window).on("scroll", function () {
  if ($(window).scrollTop() == 0 && mediaSquery.matches) {
    $('.hamburger span').css('background-color', '#093C76');
    $('.scroll').css('background-color', 'transparent');
    $('.logo-box, .nav-actions a, .register-btn').css('color', '#093C76');
    $('.register-btn').css('color', '#093C76')
    $('.register-btn').css('background-color', '#f8dc0e')

  } else {
    $('.scroll').css('background-color', '#093C76');
    $('.hamburger span').css('background-color', '#fff');
    $('.scroll').css('transition', 'background-color 0.3s ease');
    $('.logo-box, .nav-actions a').css('color', '#fff');
    $('.logo-box, .nav-actions a').css('transition', '0.3s');
    $('.register-btn').css('color', '#093C76');
    $('.register-btn').css('background-color', '#fff');
    $('.selected-option').css('background-color', '#fff');
  }
});

const translations = {
  uz: {
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    courses: "Kurslarimiz",
    exams: "Imtihonlar",
    contact: "Kontaktlar",
    consulting: "Konsultatsiya",
    register: "Ro'yhatdan o'tish",
    register2: "Ro'yhatdan o'tish",
    info: "BIZ NAFAQAT NEMIS TILINI O'RGATAMIZ, BALKI HAR BIR INSONNING YANGI IMKONIYATLAR UCHUN ESHIKLARINI OCHAMIZ!",
    test: "Test",
    testknowlenge: "Bilim darajangizni sinab ko'ring",
    takeconsult: "Konsultatsiya olish",
    try: "Sinash",
    a1: "Yangi boshlovchilar uchun. Har kuni muloqot uchun asosiy grammatika va oddiy iboralarni o‘rganing.",
    a2: "Boshlang‘ich bilimlarga ega bolganlar uchun. Lug‘at boyligini kengaytirish va murakkab tuzilmalarni o‘rganish.",
    b1: "Til asoslari bilan tanish talabalar uchun. O‘z fikrlarini ifoda etishni va kundalik vaziyatlarni muhokama qilishni o‘rganing.",
    b2: "Ishonchli foydalanuvchilar uchun. Ijtimoiy va professional mavzularda muloqot qilish ko‘nikmalarini rivojlantirish.",
    contactinfo: "Kontakt ma'lumot",
    phone: "Telefon:",
    email: "Email:",
    address: "Manzil:",
    main: "Asosiy",
    socials: "Ijtimoiy tarmoqlarimiz",
    rights: "© Sprachschule. Hamma huquqlar himoyalangan.",
    feedback: "So'rov qoldiring va menejerimiz siz bilan bog'lanadi.",
    send: "Jo'natish",
    weopened: "Biz ochildik!",
    orderplace: "Kurslarimizga yozilish",
    aboutcenter: "Oquv markazimiz haqida",
    aboutus: "Bizning nemiz tiliga ixtisoslashgan o’quv markazimiz 2013 yildan boshlab faoliyat yuritib kelmoqda va siz u bizning markazimizda nafaqat nemis tilini o’rganish balki bu orqali qanday imkoniyatlarga ega bo’lishingiz xaqida ham ma’lumotga ega bo’lasiz. Yevropada asosiy tillardan biri bo’lgan Nemis tilini bilish orqali siz  yevropada ishlash, sayoxat qilish va ushbu tilda yozilgan adabiyotlar bilan tanishish imkoniga ega bo’lgan holda o’zingizning shaxsiy imkoniyatlaringizni keskin oshira olasiz. Shuningdek nemis madaniyati bilan ham yaqinroq tanishishingiz mumkin.  Bizning ta’lim markazimizda barcha til darajalari uchun (A1-C1)  nemis tili kurslari va kasbga yo’naltirish kurslari taklif qilinadi. Darslar Yevropa standartlariga muvofiq olib boriladi.   Bizning o’quv markazda faqat yuqori malakali Xalqaro C2 darajadagi sertifikatlarga ega bo’lgan o'qituvchilar dars berishini ta'minlaymiz.  Bizning kurslarda o’qib chiqish orqali siz ÖSD, Goethe Zertifikat, TestDaF, ECL kabi xalqaro tan olingan sertifikatlarga ega bo’lishingiz mumkin.  Siz bilan hamkorlik qilishdan va xar doim sizga yordam berishdan mamnunmiz.  Hurmat bilan  “Sprachschule” Jamoasi",
    consultdescr: "Bizning kompaniyamiz, nemis tilini o‘rganishga va Germaniyaga moslashishga yordam berish uchun jismoniy va yuridik shaxslar uchun professional konsultatsiya xizmatlarini taklif etadi.",
    phisical: "Jismoniy shaxslar uchun",
    juridik: "Yuridik shaxslar uchun",
    juridikdescr: "Biz nemis tilini o‘rganish va boshqa mamlakatga ko‘chib o‘tish jarayoni ko‘plab savollar va shubhalar tug‘dirishi mumkinligini tushunamiz. Bizning jamoamiz sizga har bir bosqichda qo‘llab-quvvatlash va yordam berishga tayyor. Biz quyidagi masalalarda konsultatsiya taqdim etamiz:",
    juridikfirst: "Germaniyaga ish uchun safar tayyorgarligi: sizga muvaffaqiyatli ko‘chib o‘tish va ishga joylashish uchun qanday qadamlar qo‘yish kerakligini tushuntiramiz.",
    juridiksecond: "Viza hujjatlarini rasmiylashtirish: biz sizga viza olish uchun zarur hujjatlarni yig‘ish va rasmiylashtirishda yordam beramiz.",
    juridikthird: "Nemis tilini o‘rganish: mutaxassislarimiz sizning ehtiyojlaringiz va maqsadlaringizga muvofiq A1 dan C1 darajagacha bo‘lgan individual ta’lim dasturini ishlab chiqadilar.",
    juridikfourth: "Til sertifikatini olish: zarur imtihonlar haqida ma’lumot beramiz va ularni topshirishga tayyorgarlik ko‘rishda yordam beramiz.",
    juridikfifth: "Ish beruvchilarni qidirish bo‘yicha maslahatlar: Germaniyada ish topishda samarali bo‘lishingiz uchun tavsiyalar va manbalar bilan o‘rtoqlashamiz.",
    phisicaldescr: "Shuningdek, biz chet eldan malakali mutaxassislarni jalb qilmoqchi bo‘lgan kompaniyalar uchun kompleks konsultatsiya xizmatlarini taklif etamiz. Bizning jamoamiz sizga quyidagi jihatlarda yordam beradi:",
    phisicalfirst: "Muvofiq nomzodlarni qidirish: biz eng yaxshi iqtidorlarni topish va jalb qilish uchun turli platformalar va usullardan foydalanamiz.",
    phisicalsecond: "Onlayn suhbatlarni tashkil etish: sizga masofaviy asosda nomzodlar bilan suhbat o‘tkazishda yordam beramiz, bu esa sizga qulaylik va moslashuvchanlik taqdim etadi.",
    phisicalthird: "B1-B2 darajasida tanlangan nomzodlarni qabul qilish: biz sizning kompaniyangizda ishlashga tayyor bo‘lgan mos til darajasiga ega nomzodlarni tanlab olamiz.",
    phisicalfourth: "Nomzodlarni Germaniyada yashashga tayyorlash: yangi xodimlaringiz tezroq moslashishlari uchun madaniy xususiyatlar va Germaniyada yashash haqida zarur ma’lumotlar taqdim etamiz.",
    phisicalfifth: "Viza hujjatlarini tayyorlashda yordam: biz sizning biznesingiz va nomzodlar uchun Germaniyada qonuniy ishga joylashish uchun zarur bo‘lgan barcha viza hujjatlarini rasmiylashtirishni o'rgatamiz.",
    phisicalsixth: "Kondidatlar xujjatini tan olish uchun tayyorlash: nomzodlarning Germaniyadagi malakasini tan olish uchun zarur hujjatlarni tayyorlashda qo‘llab-quvvatlaymiz.",
    consultend: "Biz bilan bog‘laning, konsultatsiya xizmatlarimiz haqida ko‘proq ma’lumot oling va ehtiyojlaringizga mos individual taklifni oling!",
    formconsult: "Konsultatsiyaga yozilish",
    a1price: "600.000 so'm/oy",
    a2price: "800.000 so'm/oy",
    b1price: "1.000.000 so'm/oy",
    b2price: "1.200.000 so'm/oy",
  },
  de: {
    home: "Startseite",
    about: "Über uns",
    courses: "Unsere Kurse",
    exams: "Prüfungen",
    contact: "Kontakt",
    consulting: "Beratung",
    register: "Anmeldung",
    register2: "Anmeldung",
    info: "WIR UNTERRICHTEN NICHT NUR DEUTSCH, SONDERN ALLE NEUEN SPRACHEN WIR ÖFFNEN DIE TÜREN FÜR CHANCEN!",
    test: "Prüfen",
    testknowlenge: "Testen Sie Ihren Wissensstand",
    takeconsult: "Lassen Sie sich beraten",
    try: "Probieren Sie es aus",
    a1: "Für Anfänger. Grundlegende Grammatik für die alltägliche Kommunikation und lerne einfache Sätze.",
    a2: "Für diejenigen, die über Grundkenntnisse verfügen. Wortschatzreichtum Erweiterung und Untersuchung komplexer Strukturen.",
    b1: "Für Studierende, die mit den Grundlagen der Sprache vertraut sind. Drücken Sie Ihre Gedanken aus lernen, Alltagssituationen zu kommunizieren und zu besprechen.",
    b2: "Für vertrauenswürdige Benutzer. Zu gesellschaftlichen und beruflichen Themen Entwicklung von Kommunikationsfähigkeiten.",
    contactinfo: "Kontaktinformationen",
    phone: "Telefonnummer:",
    email: "E-Mail:",
    address: "Adresse:",
    main: "Hauptsächlich",
    socials: "Unsere sozialen Netzwerke",
    rights: "© Sprachschule. Alle Rechte vorbehalten.",
    feedback: "Hinterlassen Sie eine Anfrage und unser Manager wird sich mit Ihnen in Verbindung setzen.",
    send: "Versand",
    weopened: "Wir haben geöffnet!",
    orderplace: "Anmeldung",
    aboutcenter: "Über unser Schulungszentrum",
    aboutus: "Unser auf die deutsche Sprache spezialisiertes Bildungszentrum ist seit 2013 tätig. Hier lernen Sie nicht nur die deutsche Sprache, sondern erhalten auch Informationen darüber, welche Möglichkeiten sich Ihnen dadurch eröffnen. Durch die Beherrschung der deutschen Sprache, die eine der wichtigsten Sprachen in Europa ist, können Sie Ihre persönlichen Chancen erheblich erweitern, indem Sie in Europa arbeiten, reisen und Zugang zu in dieser Sprache verfasster Literatur erhalten. Außerdem haben Sie die Möglichkeit, die deutsche Kultur besser kennenzulernen. In unserem Bildungszentrum bieten wir Deutschkurse für alle Niveaus (A1-C1) sowie berufsorientierte Kurse an. Der Unterricht wird nach europäischen Standards durchgeführt. Wir legen großen Wert darauf, dass bei uns ausschließlich hochqualifizierte Lehrkräfte mit internationalen C2-Zertifikaten unterrichten. Nach erfolgreichem Abschluss unserer Kurse haben Sie die Möglichkeit, international anerkannte Zertifikate wie ÖSD, Goethe-Zertifikat, TestDaF oder ECL zu erwerben. Wir freuen uns auf die Zusammenarbeit mit Ihnen und stehen Ihnen jederzeit gerne zur Verfügung. Mit freundlichen Grüßen, Ihr Team der „Sprachschule“",
    consultdescr: "Unser Unternehmen bietet professionelle Beratungsleistungen für Einzelpersonen und juristische Personen, um ihnen beim Erlernen der deutschen Sprache und bei der Anpassung an Deutschland zu helfen.",
    phisical: "Für Einzelpersonen",
    juridik: "Für juristische Personen",
    juridikdescr: "Wir verstehen, dass der Prozess des Deutschlernens und des Umzugs in ein anderes Land viele Fragen und Zweifel aufwerfen kann. Unser Team ist bereit, Sie bei jedem Schritt zu unterstützen und zu helfen. Wir beraten Sie zu folgenden Themen:",
    juridikfirst: "Vorbereitung einer beruflich bedingten Reise nach Deutschland: Wir erklären Ihnen, welche Schritte Sie für einen erfolgreichen Umzug und eine erfolgreiche Ansiedlung unternehmen müssen.",
    juridiksecond: "Bearbeitung von Visumunterlagen: Wir helfen Ihnen bei der Zusammenstellung und Bearbeitung der für die Erteilung eines Visums erforderlichen Unterlagen.",
    juridikthird: "Deutsch lernen: Unsere Experten gestalten ein individuelles Studienprogramm von A1 bis C1 ganz nach Ihren Bedürfnissen und Zielen.",
    juridikfourth: "Erlangung eines Sprachzertifikats: Wir informieren Sie über die notwendigen Prüfungen und helfen Ihnen bei der Vorbereitung auf das Bestehen dieser.",
    juridikfifth: "Tipps zur Jobsuche: Wir geben Tipps und Ressourcen weiter, die Ihnen dabei helfen, effektiv einen Job in Deutschland zu finden.",
    phisicaldescr: "Wir bieten auch komplexe Beratungsleistungen für Unternehmen an, die qualifizierte Fachkräfte aus dem Ausland gewinnen möchten. Unser Team unterstützt Sie in folgenden Aspekten:",
    phisicalfirst: "Suche nach den richtigen Kandidaten: Wir nutzen unterschiedliche Plattformen und Methoden, um die besten Talente zu finden und zu gewinnen.",
    phisicalsecond:"Vereinbaren Sie Online-Interviews: Wir helfen Ihnen bei Vorstellungsgesprächen mit Kandidaten aus der Ferne und bieten Ihnen Komfort und Flexibilität.",
    phisicalthird: "Aufnahme ausgewählter Kandidaten auf B1-B2-Niveau: Wir wählen Kandidaten mit entsprechendem Sprachniveau aus, die bereit sind, in Ihrem Unternehmen zu arbeiten.",
    phisicalfourth: "Vorbereitung der Kandidaten auf das Leben in Deutschland: Wir vermitteln die notwendigen Informationen über kulturelle Besonderheiten und das Leben in Deutschland, damit sich Ihre neuen Mitarbeiter schneller einleben können.",
    phisicalfifth: "Unterstützung bei der Vorbereitung von Visa-Dokumenten: Wir schulen Sie darin, alle notwendigen Visa-Dokumente für Ihr Unternehmen und Ihre Kandidaten vorzubereiten, um legal in Deutschland arbeiten zu können",
    phisicalsixth: "Vorbereitung der Kandidatendokumente für die Anerkennung: Wir unterstützen Kandidaten bei der Vorbereitung der notwendigen Dokumente für die Anerkennung ihrer Qualifikationen in Deutschland.",
    consultend: "Kontaktieren Sie uns, erfahren Sie mehr über unsere Beratungsleistungen und erhalten Sie ein individuelles, auf Ihre Bedürfnisse zugeschnittenes Angebot!",
    formconsult: "Melden Sie sich für eine Beratung an",
    a1price: "600.000 Soums/Monat",
    a2price: "800.000 Soums/Monat",
    b1price: "1.000.000 Soums/Monat",
    b2price: "1.200.000 Soums/Monat",
  },
};



const selectTrigger = document.querySelector('.selected-option');
const languageOptions = document.querySelector('.language-options');
const currentFlag = document.querySelector('.current-flag');
const selectedLanguage = document.querySelector('.selected-language');


selectTrigger.addEventListener("click", () => {
  languageOptions.classList.toggle("open");
});


document.querySelectorAll('.language-options li').forEach(option => {
  option.addEventListener("click", () => {
    const selectedLang = option.getAttribute("data-lang");


    currentFlag.src = option.querySelector("img").src;
    selectedLanguage.textContent = selectedLang.toUpperCase();


    languageOptions.classList.remove("open");


    updateLanguage(selectedLang);


    localStorage.setItem('selectedLanguage', selectedLang);

    if (selectedLang == 'uz') {
      document.querySelector('#name').placeholder = 'Ism';
      document.querySelector('#lastname').placeholder = 'Familiya';
      document.querySelector('#age').placeholder = 'Yosh';
      document.querySelector('#phone').placeholder = 'Telefon raqam';
      document.querySelector('#message').placeholder = 'Xabar';
    }
    if (selectedLang == 'de') {
      document.querySelector('#age').placeholder = 'Jung';
      document.querySelector('#name').placeholder = 'Name';
      document.querySelector('#lastname').placeholder = 'Nachname';
      document.querySelector('#phone').placeholder = 'Telefonnummer';
      document.querySelector('#message').placeholder = 'Nachricht';
    }
  });
});


function updateLanguage(language) {
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });
}


window.onload = () => {
  const savedLang = localStorage.getItem('selectedLanguage') || 'uz'; // По умолчанию Узбекский язык
  updateLanguage(savedLang);


  const selectedOption = document.querySelector(`.language-options li[data-lang="${savedLang}"]`);
  if (selectedOption) {
    currentFlag.src = selectedOption.querySelector("img").src;
    selectedLanguage.textContent = savedLang.toUpperCase();
  }
};






function selectLevel(level) {
  // Перенаправление на ту же страницу с параметром level
  window.location.href = `form.html?level=${level}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const selectElement = document.getElementById("course-select");

  // Получите параметры из URL
  const urlParams = new URLSearchParams(window.location.search);
  const level = urlParams.get("level"); // Получаем значение level

  // Установите выбранное значение
  if (level) {
    selectElement.value = level;
  }
});


window.addEventListener('DOMContentLoaded', () => {
  menu = document.querySelector('.navbar-nav');
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



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = document.querySelector('.navbar').offsetHeight;

    window.scrollTo({
      top: target.offsetTop - offset,
    });
  });
});
