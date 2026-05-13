// ═══════════ YOUTUBE MUSIC PLAYER ═══════════
let ytPlayer;
let isPlaying = false;

function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('ytplayer', {
        height: '0',
        width: '0',
        videoId: 'xm0zT8Sim3c',
        playerVars: {
            'autoplay': 1,
            'loop': 1,
            'playlist': 'xm0zT8Sim3c' // Required for loop to work
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    document.getElementById('musicControls').style.display = 'flex';
    ytPlayer.setVolume(document.getElementById('volSlider').value * 100);
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        isPlaying = true;
        document.getElementById('musicPlayBtn').textContent = '⏸';
    } else {
        isPlaying = false;
        document.getElementById('musicPlayBtn').textContent = '▶';
    }
}

function togglePlay() {
    if(!ytPlayer) return;
    if (isPlaying) {
        ytPlayer.pauseVideo();
    } else {
        ytPlayer.playVideo();
    }
}

function setVol(v) {
    if (ytPlayer && ytPlayer.setVolume) {
        ytPlayer.setVolume(v * 100);
    }
}

// ═══════════ QUIZ DATA ═══════════
const questions = [
{ text: "What is your primary goal for this trip?", opts: [
{ t: "Modern efficiency and high tech urban life", ico: "🚄", sc: { japan: 3, hongkong: 2 } },
{ t: "Complete isolation and natural beauty", ico: "🌴", sc: { philippines: 3, indonesia: 2 } },
{ t: "Deep immersion in ancient heritage", ico: "🏛️", sc: { china: 3, india: 2, russia: 1 } },
{ t: "Authentic local life on a budget", ico: "🍜", sc: { vietnam: 3, india: 2 } }
]},
{ text: "Which standout feature matters most to you?", opts: [
{ t: "High end shopping and skyscrapers", ico: "🏙️", sc: { hongkong: 3, japan: 2 } },
{ t: "Pristine beaches and green landscapes", ico: "🏝️", sc: { indonesia: 3, philippines: 2 } },
{ t: "Museums, palaces, and landmarks", ico: "🏰", sc: { russia: 3, china: 2 } },
{ t: "Street food and bustling markets", ico: "🥟", sc: { vietnam: 3, india: 2 } }
]},
{ text: "Where would we find you at 10:00 PM?", opts: [
{ t: "At a high end rooftop bar overlooking the city", ico: "🍸", sc: { hongkong: 3, japan: 2 } },
{ t: "In a quiet villa listening to the waves", ico: "🌊", sc: { indonesia: 3, philippines: 2 } },
{ t: "Walking through illuminated historic squares", ico: "✨", sc: { russia: 3, china: 2 } },
{ t: "In a crowded night market eating local snacks", ico: "🥡", sc: { vietnam: 3, india: 2 } }
]},
{ text: "What kind of adventure are you looking for?", opts: [
{ t: "Navigating complex subway systems in a mega city", ico: "🚇", sc: { japan: 3, hongkong: 2 } },
{ t: "Island hopping, diving, or mountain trekking", ico: "🤿", sc: { philippines: 3, indonesia: 2 } },
{ t: "Exploring massive historical sites and palaces", ico: "👑", sc: { china: 3, russia: 2 } },
{ t: "Wandering through chaotic, colorful local streets", ico: "🛺", sc: { india: 3, vietnam: 2 } }
]},
{ text: "How do you view your travel budget?", opts: [
{ t: "I want a luxury experience, no matter the cost", ico: "💎", sc: { hongkong: 3, japan: 2 } },
{ t: "I want mid range comfort close to nature", ico: "🌿", sc: { indonesia: 3, philippines: 2 } },
{ t: "I want to invest in rich cultural experiences", ico: "🎭", sc: { russia: 3, china: 2 } },
{ t: "I want the best value for money possible", ico: "🎒", sc: { vietnam: 3, india: 2 } }
]},
// Q6-10 (after midbreak)
{ text: "Which climate is your deal breaker?", opts: [
{ t: "I love the cold or crisp, snowy air", ico: "❄️", sc: { russia: 3, japan: 2 } },
{ t: "I want tropical sun and a sea breeze", ico: "☀️", sc: { philippines: 3, indonesia: 2 } },
{ t: "I prefer mild, seasonal weather for walking", ico: "🍂", sc: { china: 3, japan: 2 } },
{ t: "I do not mind heat and humidity if the vibe is right", ico: "🌡️", sc: { india: 3, vietnam: 2 } }
]},
{ text: "What kind of wellness do you seek?", opts: [
{ t: "High tech spas and luxury hotel service", ico: "🛁", sc: { hongkong: 3, japan: 2 } },
{ t: "Spiritual healing and natural seclusion", ico: "🧘", sc: { indonesia: 3, philippines: 2 } },
{ t: "Intellectual stimulation through art and history", ico: "🎨", sc: { russia: 3, china: 2 } },
{ t: "Simple happiness through vibrant energy and food", ico: "😊", sc: { vietnam: 3, india: 2 } }
]},
{ text: "What is your ideal trip duration?", opts: [
{ t: " Weekend 3-4 day ", ico: "⚡", sc: { hongkong: 3, japan: 2 } },
{ t: "A relaxing 1 week ", ico: "🏖️", sc: { philippines: 3, indonesia: 2 } },
{ t: "A 10 day grand tour of historical sites", ico: "🗺️", sc: { china: 3, russia: 2 } },
{ t: "An unpredictable, long term exploration", ico: "🐌", sc: { india: 3, vietnam: 2 } }
]},
{ text: "Which scenery makes your heart beat faster?", opts: [
{ t: "A neon lit skyline reflecting on the water", ico: "🌃", sc: { hongkong: 3, japan: 2 } },
{ t: "A volcano or a hidden turquoise lagoon", ico: "🌋", sc: { indonesia: 3, philippines: 2 } },
{ t: "Red squares, golden domes, or great walls", ico: "🏯", sc: { russia: 3, china: 2 } },
{ t: "Rice paddies or colorful, chaotic riverbanks", ico: "🌾", sc: { vietnam: 3, india: 2 } }
]},
{ text: "How do you want to feel when you return home?", opts: [
{ t: "Refined and impressed by human innovation", ico: "🚀", sc: { japan: 3, hongkong: 2 } },
{ t: "Recharged and reconnected with the earth", ico: "🌱", sc: { indonesia: 3, philippines: 2 } },
{ t: "Enriched by a deeper understanding of history", ico: "📖", sc: { china: 3, russia: 2 } },
{ t: "Gritty, inspired, and full of stories", ico: "✍️", sc: { india: 3, vietnam: 2 } }
]}
];

// Added Auto Image Paths (e.g. foodImg: "japaneat.jpg", tipImg: "japantips.jpg")
const countries = {
japan: { name: "Japan", native: "日本", from: "TOKYO (HND)", flight: "JL 0724", flag: "🇯🇵", emoji: "🗼", city: "Kyoto", greeting: "HAVE A NICE TRIP!", img: "image/characters/japan.png", traits: { culture: 85, nature: 60, urban: 90, wellness: 80, adventure: 65 },
food: "Fresh sashimi at the morning fish market paired with warm miso soup and authentic sushi", foodHeadline: "Where Every Bite is an Art Form", foodImg: "japaneat.jpg",
tip: "Wearing a kimono in Asakusa was such a fun way to experience traditional Japanese culture. Walking around the temples and streets made everything feel beautiful and memorable.re in Japan.", tipHeadline: "Asakusa Kimono Experience", tipImg: "japantips.jpg"
},
hongkong: { name: "Hong Kong", native: "香港", from: "HONG KONG (HKG)", flight: "CX 0724", flag: "🇭🇰", emoji: "🏙️", city: "Victoria Peak", greeting: "HAVE A NICE TRIP!", img: "image/characters/hongkong.png", traits: { culture: 55, nature: 30, urban: 95, wellness: 70, adventure: 75 },
food: "Michelin starred dim sum or perfectly roasted goose with crispy golden skin", foodHeadline: "A City That Eats Seriously", foodImg: "hongkongeat.jpg",
tip: "Ride the historic Tram on the upper deck outside rush hours for breezy city views", tipHeadline: "Slow Down on the Fast Tram", tipImg: "hongkongtips.jpg"
},
philippines: { name: "Philippines", native: "PHILIPPINES", from: "MANILA (MNL)", flight: "PR 0724", flag: "🇵🇭", emoji: "🏝️", city: "Palawan", greeting: "ENJOY YOUR JOURNEY!", img: "image/characters/philippines.png", traits: { culture: 45, nature: 95, urban: 25, wellness: 70, adventure: 90 },
food: "Classic Adobo Filipino style or the refreshing shaved ice dessert Halo Halo", foodHeadline: "Sweet, Sour and Totally Addictive", foodImg: "philippineseat.jpg",
tip: "Rent a small boat to a private island and dive the coral reefs with no one around", tipHeadline: "Your Own Private Island", tipImg: "philippinestips.jpg"
},
indonesia: { name: "Indonesia", native: "INDONESIA", from: "JAKARTA (CGK)", flight: "GA 0724", flag: "🇮🇩", emoji: "🌺", city: "Bali", greeting: "HAVE A NICE TRIP!", img: "image/characters/indonesia.png", traits: { culture: 70, nature: 90, urban: 30, wellness: 85, adventure: 80 },
food: "Sizzling Nasi Goreng and rich peanut sauce chicken satay straight off the grill", foodHeadline: "Spice, Smoke and Soul", foodImg: "indonesiaeat.jpg",
tip: "Wake early for sunrise yoga in a bright green rice terrace in Ubud to recharge your spirit", tipHeadline: "Sunrise Ritual in Ubud", tipImg: "indonesiatips.jpg"
},
india: { name: "India", native: "भारत", from: "NEW DELHI (DEL)", flight: "AI 0724", flag: "🇮🇳", emoji: "🕌", city: "Jaipur", greeting: "HAVE A SAFE JOURNEY!", img: "image/characters/india.png", traits: { culture: 95, nature: 60, urban: 50, wellness: 55, adventure: 90 },
food: "Fragrant Masala curry paired with freshly baked Naan bread straight from the tandoor", foodHeadline: "Spices That Tell a Thousand Stories", foodImg: "indiaeat.jpg",
tip: "Visit the Taj Mahal at the crack of dawn before crowds arrive for the purest experience", tipHeadline: "Beat the Crowd at the Taj", tipImg: "indiatips.jpg"
},
china: { name: "China", native: "中国", from: "BEIJING (PEK)", flight: "CA 0724", flag: "🇨🇳", emoji: "🏯", city: "Xi'an", greeting: "HAVE A SAFE JOURNEY!", img: "image/characters/china.png", traits: { culture: 90, nature: 65, urban: 70, wellness: 50, adventure: 70 },
food: "Crispy Peking duck or juicy soup dumplings bursting with rich broth", foodHeadline: "Centuries of Flavor on a Plate", foodImg: "chinaeat.jpg",
tip: "Walk the Great Wall in a less restored section to truly feel the weight of history", tipHeadline: "Find the Untouched Wall", tipImg: "chinatips.jpg"
},
vietnam: { name: "Vietnam", native: "VIET NAM", from: "HANOI (HAN)", flight: "VN 0824", flag: "🇻🇳", emoji: "🛶", city: "Hanoi", greeting: "HAVE A WONDERFUL JOURNEY!", img: "image/characters/vietname.png", traits: { culture: 70, nature: 75, urban: 45, wellness: 55, adventure: 85 },
food: "Steaming hot Pho with rich broth and a creamy Vietnamese Egg Coffee", foodHeadline: "Street Food that Stops You in Your Tracks", foodImg: "vietnameat.jpg",
tip: "Pull up a tiny plastic chair on the sidewalk, eat street food, and soak up real local life", tipHeadline: "Sit Low, Eat Well", tipImg: "vietnamtips.jpg"
},
russia: { name: "Russia", native: "ROSSIYA", from: "MOSCOW (SVO)", flight: "SU 0724", flag: "🇷🇺", emoji: "⛪", city: "St. Petersburg", greeting: "HAVE A SAFE FLIGHT!", img: "image/characters/russia.png", traits: { culture: 88, nature: 55, urban: 65, wellness: 40, adventure: 60 },
food: "Vibrant red Borscht soup and delicate Russian style pancakes called Blini", foodHeadline: "Warmth in Every Bowl", foodImg: "russiaeat.jpg",
tip: "Explore the Moscow Metro stations that look more like royal palaces than transit hubs", tipHeadline: "The Most Beautiful Subway on Earth", tipImg: "russiatips.jpg"
}
};

let cur = 0, ans = [], scores = {}, midbreakShown = false;
let currentResultKey = '';
const resultAlternates = {};
const resultScores = {};

function initScores() { scores = { japan: 0, hongkong: 0, philippines: 0, indonesia: 0, india: 0, china: 0, vietnam: 0, russia: 0 }; }

function showPage(id) {
document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
document.getElementById(id).classList.add('active');
window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showStory() {
    showPage('story');
    // Ensure music plays when they start the experience
    if (ytPlayer && !isPlaying) {
        togglePlay();
    }
}

function startQuiz() {
initScores(); ans = []; cur = 0; midbreakShown = false;
showPage('quiz');
renderQ();
}

function renderQ() {
const q = questions[cur];
const total = questions.length;
document.getElementById('qCurrent').textContent = cur + 1;
document.getElementById('qNum').textContent = 'Question ' + String(cur + 1).padStart(2, '0');
document.getElementById('qText').textContent = q.text;
document.getElementById('progFill').style.width = ((cur + 1) / total * 100) + '%';
const box = document.getElementById('optsBox');
box.innerHTML = '';
q.opts.forEach((o, i) => {
const btn = document.createElement('button');
btn.className = 'opt-btn' + (ans[cur] === i ? ' selected' : '');
btn.innerHTML = `<span class="opt-ico">${o.ico}</span><span>${o.t}</span>`;
btn.onclick = () => selectOpt(i);
box.appendChild(btn);
});
document.getElementById('btnBack').style.visibility = cur === 0 ? 'hidden' : 'visible';
const nextBtn = document.getElementById('btnNext');
nextBtn.textContent = cur === total - 1 ? '🎉 See My Results' : 'Next →';
nextBtn.disabled = ans[cur] === undefined;
}

function selectOpt(i) {
ans[cur] = i;
const buttons = document.querySelectorAll('.opt-btn');
buttons.forEach((b, j) => b.classList.toggle('selected', j === i));
const chosen = buttons[i];
if (chosen) {
  chosen.classList.add('sparkle');
  chosen.addEventListener('animationend', () => chosen.classList.remove('sparkle'), { once: true });
}
document.getElementById('btnNext').disabled = false;
}

function goNext() {
if (ans[cur] === undefined) return;
if (cur === 4 && !midbreakShown) {
midbreakShown = true;
cur++;
showPage('midbreak');
const tt = document.getElementById('tearTicket');
tt.classList.remove('tearing');
return;
}
if (cur === questions.length - 1) { calcScores(); showPage('transit'); showTransitThenResult(); return; }
cur++; renderQ();
}
function goPrev() { if (cur > 0) { cur--; renderQ(); } }

function showTransitThenResult() {
  const transitTitle = document.querySelector('.transit-title');
  if (transitTitle) transitTitle.textContent = 'Drag the plane to your destination.';
  resetTransitPlane();
}

let isDraggingPlane = false;
let dragOffsetX = 0;
let trackBounds = null;
let trackEndX = 0;

function resetTransitPlane() {
  const plane = document.getElementById('flightPlane');
  const track = document.querySelector('.flight-track');
  if (!plane || !track) return;
  plane.style.left = '0px';
  plane.classList.remove('dragging');
  trackBounds = track.getBoundingClientRect();
  trackEndX = trackBounds.width - plane.offsetWidth;
  plane.onpointerdown = startPlaneDrag;
  window.onpointermove = onPlaneDrag;
  window.onpointerup = endPlaneDrag;
  window.onpointercancel = endPlaneDrag;
}

function startPlaneDrag(event) {
  if (event.pointerType && event.pointerType === 'mouse' && event.button !== 0) return;
  const plane = event.currentTarget;
  if (!plane) return;
  isDraggingPlane = true;
  dragOffsetX = event.clientX - plane.getBoundingClientRect().left;
  plane.classList.add('dragging');
  plane.setPointerCapture(event.pointerId);
}

function onPlaneDrag(event) {
  if (!isDraggingPlane) return;
  const plane = document.getElementById('flightPlane');
  if (!plane || !trackBounds) return;
  let x = event.clientX - trackBounds.left - dragOffsetX;
  x = Math.max(0, Math.min(x, trackEndX));
  plane.style.left = x + 'px';
}

function endPlaneDrag(event) {
  if (!isDraggingPlane) return;
  isDraggingPlane = false;
  const plane = document.getElementById('flightPlane');
  if (!plane || !trackBounds) return;
  plane.classList.remove('dragging');
  const currentX = parseFloat(plane.style.left || '0');
  if (currentX >= trackEndX - 8) {
    const transitTitle = document.querySelector('.transit-title');
    if (transitTitle) transitTitle.textContent = 'Destination locked!';
    setTimeout(() => {
      showPage('result');
      showResult();
    }, 600);
  }
}

// ═══════════ TEAR TICKET ═══════════
let tearDone = false;

function tearTicket() {
if (tearDone) return;
tearDone = true;
const wrap = document.getElementById('tearTicket');
wrap.classList.add('tearing');
setTimeout(() => {
tearDone = false;
showPage('quiz');
renderQ();
}, 900);
}

function calcScores() {
initScores();
questions.forEach((q, qi) => {
if (ans[qi] !== undefined) {
Object.entries(q.opts[ans[qi]].sc).forEach(([c, pts]) => { scores[c] += pts; });
}
});
}

function resolveImagePath(fileName) {
  if (!fileName || !fileName.trim()) return '';
  const normalized = fileName.trim().replace(/^\.\/?/, '');
  return normalized.startsWith('http') || normalized.startsWith('/') || normalized.startsWith('image/')
    ? normalized
    : 'image/' + normalized;
}

function showResult() {
const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
const mainKey = sorted[0][0];
const altKey2 = sorted[1][0];
const altKey3 = sorted[2][0];
const t1 = countries[mainKey];
const t2 = countries[altKey2];
const t3 = countries[altKey3];