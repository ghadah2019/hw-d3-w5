// let pinkbttn1 = document.getElementById("pinkbtn")

// let pinkImage = document.getElementById("img-red-color")


// pinkbttn1.addEventListener("click", function(){
//     pinkImage.src = "https://media.discordapp.net/attachments/1160867985909620917/1171498629563949116/PTgQlim.png?ex=655ce61e&is=654a711e&hm=2b2a7c0ad2bfbfe71d5d4b699d522108001636b6e6196841676a939705be7bbb&=&width=1064&height=1064"; // Replace "specific-image.jpg" with the path to your specific image
//   });


let pinkButton = document.getElementById("pink-button");
let blackButton = document.getElementById("black-button");
let purpleButton = document.getElementById("purple-button");
const brownButton = document.getElementById("brown-button");
const redButton = document.getElementById("red-button");
const watchImage = document.getElementById("watch-image");


pinkButton.addEventListener("click", function() {
  changeImage("https://media.discordapp.net/attachments/1160867985909620917/1171498630767714364/baig.png?ex=655ce61e&is=654a711e&hm=e7b0684fd403617bce0195a2ebb927dc6e3cd787351eadcb66c8a39ecf113b8a&=&width=1064&height=1064");
});

blackButton.addEventListener("click", function() {
  changeImage("https://media.discordapp.net/attachments/1160867985909620917/1171498631245869096/black.png?ex=655ce61f&is=654a711f&hm=55910816d057a66cb520fdd4e2731c4be7c1fb2538a7a7b7361eaacc7d2764f1&=&width=1064&height=1064");
});

purpleButton.addEventListener("click", function() {
  changeImage("https://media.discordapp.net/attachments/1160867985909620917/1171498628930621541/purp.png?ex=655ce61e&is=654a711e&hm=6e69d2e6c5afd8bcfc0dfe5b768b2b2f908ef6ecaf58db0a9974340aad2d0725&=&width=1064&height=1064");
});

brownButton.addEventListener("click", function() {
  changeImage("https://media.discordapp.net/attachments/1160867985909620917/1171498630306345000/burb.png?ex=655ce61e&is=654a711e&hm=dc43c1d5b5a8424be99843460efb57823db9d2f377c19355060a19fcf2b4926a&=&width=1064&height=1064");
});

redButton.addEventListener("click", function() {
  changeImage("https://media.discordapp.net/attachments/1160867985909620917/1171498629563949116/PTgQlim.png?ex=655ce61e&is=654a711e&hm=2b2a7c0ad2bfbfe71d5d4b699d522108001636b6e6196841676a939705be7bbb&=&width=1064&height=1064");
});

function changeImage(imageUrl) {
  watchImage.src = imageUrl;
}

setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour]"),
  minuteHand = document.querySelector("[data-minute]"),
  secondHand = document.querySelector("[data-second]");

function setClock() {
  const currentDate = new Date(),
    secondsRatio = currentDate.getSeconds() / 60,
    minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60,
    hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}
function setRotation(element, rotation) {
  element.style.setProperty("--rotation", rotation * 360);
}
setClock();


function changeLanguage(lang) {
    var htmlTag = document.querySelector('html');
    htmlTag.setAttribute('lang', lang);
    if (lang === 'ar') {
        // htmlTag.setAttribute('dir', 'rtl');
        translateToArabic();
    } else {
        // htmlTag.setAttribute('dir', 'ltr');
        translateToEnglish();
    }
}

function translateToArabic() {
    document.getElementById('homeLink').textContent = 'الرئيسية';
    document.getElementById('productsLink').textContent = 'المنتجات';
    document.getElementById('aboutLink').textContent = 'عن المتجر';
    document.getElementById('contactLink').textContent = 'اتصل بنا';
    document.getElementById('pageTitle').textContent = 'اكتشف موقعنا';
   
   
    document.getElementById('textAboutWatch').textContent = 'ساعة Apple Watch هي ساعة ذكية شهيرة طورتها شركة Apple Inc. وهي تقدم مجموعة من الميزات وتأتي في نماذج مختلفة، كل منها مزود بمجموعة من الإمكانات الخاصة به مثل تتبع الصحة واللياقة البدنية، ومراقبة تخطيط القلب والأكسجين في الدم، والإشعارات والاتصالات، وApple Watch. يدفع. فيما يتعلق بالألوان، تقدم Apple خيارات ألوان مختلفة لأحزمة Apple Watch. وفيما يتعلق بالألوان، تقدم Apple خيارات ألوان مختلفة لأحزمة Apple Watch. يمكنك الاختيار من بين هذه العقيد';
}

function translateToEnglish() {
    document.getElementById('homeLink').textContent = 'Home';
    document.getElementById('productsLink').textContent = 'Products';
    document.getElementById('aboutLink').textContent = 'About';
    document.getElementById('contactLink').textContent = 'Contact';
    document.getElementById('pageTitle').textContent = 'discover our store';
  
    document.getElementById('textAboutWatch').textContent = 'The Apple Watch is a popular smartwatch developed by Apple Inc. It offers a range of features and comes in various models, each with its own set of capabilities such as Health and Fitness Tracking, ECG and Blood Oxygen Monitoring, Notifications and Communication, and Apple Pay. Regarding colors, Apple offers different color options for the Apple Watch bands.Regarding colors, Apple offers different color options for the Apple Watch bands. you can choose among these color';
}