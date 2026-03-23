// script.js

// --- 1. DAFTAR KATA PER TEMA (30 pasang per tema) ---
const themes = {
    semua: {
        label: 'Semua Tema',
        emoji: '🎲',
        pairs: null
    },
    alam: {
        label: 'Alam',
        emoji: '🌿',
        pairs: [
            { innocent: 'PANTAI', impostor: 'GURUN' },
            { innocent: 'GUNUNG', impostor: 'BUKIT' },
            { innocent: 'SUNGAI', impostor: 'DANAU' },
            { innocent: 'HUJAN', impostor: 'KABUT' },
            { innocent: 'POHON', impostor: 'SEMAK' },
            { innocent: 'BATU', impostor: 'PASIR' },
            { innocent: 'HUTAN', impostor: 'KEBUN' },
            { innocent: 'LAUT', impostor: 'KOLAM' },
            { innocent: 'MATAHARI', impostor: 'BULAN' },
            { innocent: 'ANGIN', impostor: 'BADAI' },
            { innocent: 'SALJU', impostor: 'ES BATU' },
            { innocent: 'PETIR', impostor: 'KILAT' },
            { innocent: 'PELANGI', impostor: 'AWAN' },
            { innocent: 'RAWA', impostor: 'LUMPUR' },
            { innocent: 'TEBING', impostor: 'JURANG' },
            { innocent: 'AIR TERJUN', impostor: 'PANCURAN' },
            { innocent: 'PADANG RUMPUT', impostor: 'SAWAH' },
            { innocent: 'GLETSER', impostor: 'KUTUB' },
            { innocent: 'GEYSER', impostor: 'MATA AIR' },
            { innocent: 'LEMBAH', impostor: 'NGARAI' },
            { innocent: 'VULKANO', impostor: 'KAWAH' },
            { innocent: 'TERUMBU KARANG', impostor: 'RUMPUT LAUT' },
            { innocent: 'TUNDRA', impostor: 'STEPA' },
            { innocent: 'MANGROVE', impostor: 'BAKAU' },
            { innocent: 'DELTA', impostor: 'MUARA' },
            { innocent: 'TELUK', impostor: 'SELAT' },
            { innocent: 'PULAU', impostor: 'DARATAN' },
            { innocent: 'GUMUK PASIR', impostor: 'PANTAI PASIR' },
            { innocent: 'AURORA', impostor: 'PELANGI' },
            { innocent: 'BUNGA', impostor: 'JAMUR' },
        ]
    },
    hewan: {
        label: 'Hewan',
        emoji: '🐾',
        pairs: [
            { innocent: 'KUCING', impostor: 'HARIMAU' },
            { innocent: 'ANJING', impostor: 'SERIGALA' },
            { innocent: 'KELINCI', impostor: 'TIKUS' },
            { innocent: 'LUMBA-LUMBA', impostor: 'HIU' },
            { innocent: 'BURUNG', impostor: 'KELELAWAR' },
            { innocent: 'ULAR', impostor: 'CACING' },
            { innocent: 'GAJAH', impostor: 'BADAK' },
            { innocent: 'SINGA', impostor: 'MACAN TUTUL' },
            { innocent: 'KUDA', impostor: 'ZEBRA' },
            { innocent: 'SAPI', impostor: 'KERBAU' },
            { innocent: 'AYAM', impostor: 'BEBEK' },
            { innocent: 'KAMBING', impostor: 'DOMBA' },
            { innocent: 'KERA', impostor: 'GORILA' },
            { innocent: 'PAUS', impostor: 'DUGONG' },
            { innocent: 'PINGUIN', impostor: 'ELANG' },
            { innocent: 'KATAK', impostor: 'SALAMANDER' },
            { innocent: 'BUAYA', impostor: 'KOMODO' },
            { innocent: 'KURA-KURA', impostor: 'TOKEK' },
            { innocent: 'SAPI LAUT', impostor: 'ANJING LAUT' },
            { innocent: 'JERAPAH', impostor: 'UNTA' },
            { innocent: 'RUSA', impostor: 'KIJANG' },
            { innocent: 'BABI', impostor: 'BABI HUTAN' },
            { innocent: 'BERUANG', impostor: 'PANDA' },
            { innocent: 'CHEETAH', impostor: 'SERIGALA' },
            { innocent: 'OCTOPUS', impostor: 'CUMI-CUMI' },
            { innocent: 'KEPITING', impostor: 'UDANG' },
            { innocent: 'LEBAH', impostor: 'TAWON' },
            { innocent: 'KUPU-KUPU', impostor: 'NGENGAT' },
            { innocent: 'SEMUT', impostor: 'RAYAP' },
            { innocent: 'LABA-LABA', impostor: 'KALAJENGKING' },
        ]
    },
    makanan: {
        label: 'Makanan',
        emoji: '🍜',
        pairs: [
            { innocent: 'SUSU', impostor: 'SANTAN' },
            { innocent: 'GULA', impostor: 'GARAM' },
            { innocent: 'NASI', impostor: 'BUBUR' },
            { innocent: 'SATE', impostor: 'BAKSO' },
            { innocent: 'MIE GORENG', impostor: 'KWETIAU' },
            { innocent: 'KOPI', impostor: 'TEH' },
            { innocent: 'ROTI', impostor: 'BISKUIT' },
            { innocent: 'RENDANG', impostor: 'GULAI' },
            { innocent: 'SOTO', impostor: 'RAWON' },
            { innocent: 'GADO-GADO', impostor: 'PECEL' },
            { innocent: 'NASI GORENG', impostor: 'NASI UDUK' },
            { innocent: 'TEMPE', impostor: 'TAHU' },
            { innocent: 'PISANG', impostor: 'PEPAYA' },
            { innocent: 'MANGGA', impostor: 'NANAS' },
            { innocent: 'APEL', impostor: 'PEAR' },
            { innocent: 'DURIAN', impostor: 'NANGKA' },
            { innocent: 'KERUPUK', impostor: 'EMPING' },
            { innocent: 'SAMBAL', impostor: 'SAUS PEDAS' },
            { innocent: 'OPOR AYAM', impostor: 'SEMUR AYAM' },
            { innocent: 'MARTABAK', impostor: 'TERANG BULAN' },
            { innocent: 'ES KRIM', impostor: 'SORBET' },
            { innocent: 'DONAT', impostor: 'ROTI KERING' },
            { innocent: 'PIZZA', impostor: 'FLATBREAD' },
            { innocent: 'BURGER', impostor: 'SANDWICH' },
            { innocent: 'SUSHI', impostor: 'ONIGIRI' },
            { innocent: 'STEAK', impostor: 'DAGING PANGGANG' },
            { innocent: 'AYAM GORENG', impostor: 'AYAM BAKAR' },
            { innocent: 'MISO SOUP', impostor: 'KALDU' },
            { innocent: 'KEJU', impostor: 'MENTEGA' },
            { innocent: 'COKLAT', impostor: 'PERMEN' },
        ]
    },
    transportasi: {
        label: 'Transportasi',
        emoji: '🚗',
        pairs: [
            { innocent: 'SEPEDA', impostor: 'MOTOR' },
            { innocent: 'MOBIL', impostor: 'BUS' },
            { innocent: 'KERETA', impostor: 'TRAM' },
            { innocent: 'PESAWAT', impostor: 'HELIKOPTER' },
            { innocent: 'KAPAL', impostor: 'PERAHU' },
            { innocent: 'TAKSI', impostor: 'OJEK' },
            { innocent: 'TRUK', impostor: 'PICKUP' },
            { innocent: 'AMBULANS', impostor: 'MOBIL PEMADAM' },
            { innocent: 'KERETA CEPAT', impostor: 'KERETA LISTRIK' },
            { innocent: 'FERI', impostor: 'KAPAL SELAM' },
            { innocent: 'SEPEDA LISTRIK', impostor: 'SKUTER LISTRIK' },
            { innocent: 'ANGKUTAN KOTA', impostor: 'MIKROLET' },
            { innocent: 'BAJAJ', impostor: 'BECAK' },
            { innocent: 'GONDOLA', impostor: 'SAMPAN' },
            { innocent: 'KANO', impostor: 'KAYAK' },
            { innocent: 'JET SKI', impostor: 'SPEEDBOAT' },
            { innocent: 'PARASUT', impostor: 'GANTOLE' },
            { innocent: 'BALON UDARA', impostor: 'ZEPPELIN' },
            { innocent: 'ROKET', impostor: 'PESAWAT RUANG ANGKASA' },
            { innocent: 'DRONE', impostor: 'HELIKOPTER MINI' },
            { innocent: 'MOBIL BALAP', impostor: 'MOBIL SPORT' },
            { innocent: 'TRAKTOR', impostor: 'BULDOSER' },
            { innocent: 'FORKLIFT', impostor: 'CRANE' },
            { innocent: 'SKATEBOARD', impostor: 'SEPATU RODA' },
            { innocent: 'SCOOTER', impostor: 'MOPED' },
            { innocent: 'KERETA KUDA', impostor: 'DELMAN' },
            { innocent: 'MONORAIL', impostor: 'MRT' },
            { innocent: 'CABLE CAR', impostor: 'KERETA GANTUNG' },
            { innocent: 'KAPAL PESIAR', impostor: 'YACHT' },
            { innocent: 'HOVERCRAFT', impostor: 'AIRBOAT' },
        ]
    },
    pekerjaan: {
        label: 'Pekerjaan',
        emoji: '💼',
        pairs: [
            { innocent: 'DOKTER', impostor: 'PERAWAT' },
            { innocent: 'GURU', impostor: 'DOSEN' },
            { innocent: 'POLISI', impostor: 'SATPAM' },
            { innocent: 'CHEF', impostor: 'KOKI RUMAHAN' },
            { innocent: 'PILOT', impostor: 'NAHKODA' },
            { innocent: 'MONTIR', impostor: 'TUKANG LAS' },
            { innocent: 'ARSITEK', impostor: 'DESAINER INTERIOR' },
            { innocent: 'PENGACARA', impostor: 'JAKSA' },
            { innocent: 'AKUNTAN', impostor: 'AUDITOR' },
            { innocent: 'WARTAWAN', impostor: 'PENYIAR' },
            { innocent: 'FOTOGRAFER', impostor: 'VIDEOGRAFER' },
            { innocent: 'MUSISI', impostor: 'PENYANYI' },
            { innocent: 'AKTOR', impostor: 'PELAWAK' },
            { innocent: 'ASTRONOT', impostor: 'ILMUWAN ROKET' },
            { innocent: 'KOKI', impostor: 'BAKER' },
            { innocent: 'BARISTA', impostor: 'BARTENDER' },
            { innocent: 'PEMADAM KEBAKARAN', impostor: 'PENYELAMAT' },
            { innocent: 'TENTARA', impostor: 'MARINIR' },
            { innocent: 'HAKIM', impostor: 'NOTARIS' },
            { innocent: 'APOTEKER', impostor: 'DOKTER GIGI' },
            { innocent: 'PSIKOLOG', impostor: 'PSIKIATER' },
            { innocent: 'PETANI', impostor: 'NELAYAN' },
            { innocent: 'PETERNAK', impostor: 'KEBUN BINATANG' },
            { innocent: 'TUKANG KAYU', impostor: 'TUKANG BATU' },
            { innocent: 'PENJAHIT', impostor: 'DESAINER BAJU' },
            { innocent: 'SOPIR', impostor: 'KONDEKTUR' },
            { innocent: 'PELATIH', impostor: 'WASIT' },
            { innocent: 'DOKTER HEWAN', impostor: 'GROOMER HEWAN' },
            { innocent: 'PELUKIS', impostor: 'PEMAHAT' },
            { innocent: 'PROGRAMMER', impostor: 'DATA ANALYST' },
        ]
    },
    teknologi: {
        label: 'Teknologi',
        emoji: '💻',
        pairs: [
            { innocent: 'SMARTPHONE', impostor: 'TABLET' },
            { innocent: 'LAPTOP', impostor: 'KOMPUTER' },
            { innocent: 'WIFI', impostor: 'BLUETOOTH' },
            { innocent: 'KAMERA', impostor: 'WEBCAM' },
            { innocent: 'PRINTER', impostor: 'MESIN FAX' },
            { innocent: 'KEYBOARD', impostor: 'REMOTE' },
            { innocent: 'MOUSE', impostor: 'TRACKPAD' },
            { innocent: 'MONITOR', impostor: 'PROYEKTOR' },
            { innocent: 'HARDDISK', impostor: 'FLASHDISK' },
            { innocent: 'RAM', impostor: 'ROM' },
            { innocent: 'ROUTER', impostor: 'MODEM' },
            { innocent: 'CHARGER', impostor: 'POWER BANK' },
            { innocent: 'HEADPHONE', impostor: 'EARPHONE' },
            { innocent: 'SPEAKER', impostor: 'SUBWOOFER' },
            { innocent: 'MICROPHONE', impostor: 'RECORDER' },
            { innocent: 'SMARTWATCH', impostor: 'FITNESS BAND' },
            { innocent: 'DRONE', impostor: 'RC PLANE' },
            { innocent: 'VR HEADSET', impostor: 'AR GLASSES' },
            { innocent: 'GAME CONSOLE', impostor: 'HANDHELD GAME' },
            { innocent: 'SMART TV', impostor: 'SET-TOP BOX' },
            { innocent: 'AI ASSISTANT', impostor: 'CHATBOT' },
            { innocent: 'CLOUD', impostor: 'SERVER LOKAL' },
            { innocent: 'APLIKASI', impostor: 'WEBSITE' },
            { innocent: 'DATABASE', impostor: 'SPREADSHEET' },
            { innocent: 'PASSWORD', impostor: 'PIN' },
            { innocent: 'EMAIL', impostor: 'PESAN TEKS' },
            { innocent: 'GPS', impostor: 'KOMPAS DIGITAL' },
            { innocent: 'BARCODE', impostor: 'QR CODE' },
            { innocent: 'CPU', impostor: 'GPU' },
            { innocent: 'ANTIVIRUS', impostor: 'FIREWALL' },
        ]
    },
    olahraga: {
        label: 'Olahraga',
        emoji: '⚽',
        pairs: [
            { innocent: 'SEPAK BOLA', impostor: 'FUTSAL' },
            { innocent: 'RENANG', impostor: 'MENYELAM' },
            { innocent: 'LARI', impostor: 'JALAN CEPAT' },
            { innocent: 'TINJU', impostor: 'GULAT' },
            { innocent: 'BASKET', impostor: 'VOLI' },
            { innocent: 'TENIS', impostor: 'BADMINTON' },
            { innocent: 'GOLF', impostor: 'POLO' },
            { innocent: 'RUGBY', impostor: 'AMERICAN FOOTBALL' },
            { innocent: 'BASEBALL', impostor: 'SOFTBALL' },
            { innocent: 'KRIKET', impostor: 'ROUNDERS' },
            { innocent: 'BERSEPEDA', impostor: 'TRIATHLON' },
            { innocent: 'MARATON', impostor: 'SPRINT' },
            { innocent: 'SENAM', impostor: 'AEROBIK' },
            { innocent: 'YOGA', impostor: 'PILATES' },
            { innocent: 'KARATE', impostor: 'TAEKWONDO' },
            { innocent: 'JUDO', impostor: 'AIKIDO' },
            { innocent: 'ANGKAT BESI', impostor: 'POWERLIFTING' },
            { innocent: 'PANAHAN', impostor: 'LEMPAR LEMBING' },
            { innocent: 'LOMPAT TINGGI', impostor: 'LOMPAT JAUH' },
            { innocent: 'LARI GAWANG', impostor: 'LARI ESTAFET' },
            { innocent: 'POLO AIR', impostor: 'RENANG SINKRON' },
            { innocent: 'SELANCAR', impostor: 'WAKEBOARD' },
            { innocent: 'SKI', impostor: 'SNOWBOARD' },
            { innocent: 'PANJAT TEBING', impostor: 'RAPPELLING' },
            { innocent: 'PARALAYANG', impostor: 'TERJUN PAYUNG' },
            { innocent: 'TENIS MEJA', impostor: 'SQUASH' },
            { innocent: 'BILIAR', impostor: 'SNOOKER' },
            { innocent: 'CATUR', impostor: 'GO' },
            { innocent: 'E-SPORT', impostor: 'SIMULASI BALAP' },
            { innocent: 'HOCKEY ES', impostor: 'CURLING' },
        ]
    },
    rumahtangga: {
        label: 'Rumah Tangga',
        emoji: '🏠',
        pairs: [
            { innocent: 'KURSI', impostor: 'BANGKU' },
            { innocent: 'LAMPU', impostor: 'LILIN' },
            { innocent: 'KASUR', impostor: 'SOFA' },
            { innocent: 'PANCI', impostor: 'WAJAN' },
            { innocent: 'SAPU', impostor: 'MOP' },
            { innocent: 'LEMARI', impostor: 'RAK' },
            { innocent: 'KULKAS', impostor: 'FREEZER' },
            { innocent: 'KOMPOR', impostor: 'OVEN' },
            { innocent: 'BLENDER', impostor: 'MIXER' },
            { innocent: 'MESIN CUCI', impostor: 'PENGERING' },
            { innocent: 'VACUUM CLEANER', impostor: 'SAPU LISTRIK' },
            { innocent: 'AC', impostor: 'KIPAS ANGIN' },
            { innocent: 'TELEVISI', impostor: 'RADIO' },
            { innocent: 'MEJA MAKAN', impostor: 'MEJA KOPI' },
            { innocent: 'BANTAL', impostor: 'GULING' },
            { innocent: 'SELIMUT', impostor: 'SPREI' },
            { innocent: 'TIRAI', impostor: 'BLINDS' },
            { innocent: 'KARPET', impostor: 'KESET' },
            { innocent: 'CERMIN', impostor: 'PIGURA' },
            { innocent: 'JAM DINDING', impostor: 'JAM MEJA' },
            { innocent: 'TEMPAT TIDUR', impostor: 'HAMMOCK' },
            { innocent: 'WASTAFEL', impostor: 'BAK MANDI' },
            { innocent: 'SHOWER', impostor: 'BATHTUB' },
            { innocent: 'DISPENSER', impostor: 'TEKO' },
            { innocent: 'RICE COOKER', impostor: 'SLOW COOKER' },
            { innocent: 'TOASTER', impostor: 'MICROWAVE' },
            { innocent: 'EMBER', impostor: 'BAK CUCI' },
            { innocent: 'TANGGA', impostor: 'ESKALATOR' },
            { innocent: 'PINTU', impostor: 'JENDELA' },
            { innocent: 'PAGAR', impostor: 'TEMBOK' },
        ]
    },
};

// Isi pasangan untuk tema "Semua"
themes.semua.pairs = Object.values(themes)
    .filter(t => t.pairs !== null)
    .flatMap(t => t.pairs);

// --- 2. MENGAMBIL ELEMEN DARI HTML ---
const screens = document.querySelectorAll('.screen');
const setupScreen = document.getElementById('setup-screen');
const passDeviceScreen = document.getElementById('pass-device-screen');
const revealRoleScreen = document.getElementById('reveal-role-screen');
const gameplayScreen = document.getElementById('gameplay-screen');

const setupStartButton = document.getElementById('setup-start-button');
const showRoleButton = document.getElementById('show-role-button');
const hideRoleButton = document.getElementById('hide-role-button');
const restartButton = document.getElementById('restart-button');

const innocentCountInput = document.getElementById('innocent-count');
const impostorCountInput = document.getElementById('impostor-count');

const passToPlayerText = document.getElementById('pass-to-player-text');
const roleCard = document.getElementById('role-card');
const playerRoleText = document.getElementById('player-role');
const playerWordText = document.getElementById('player-word');
const roleDescriptionText = document.getElementById('role-description');
const gameSummaryText = document.getElementById('game-summary');
const themeGrid = document.getElementById('theme-grid');

// --- 3. VARIABEL STATE PERMAINAN ---
let roles = [];
let currentPlayerIndex = 0;
let innocentWord = '';
let impostorWord = '';
let selectedTheme = 'semua';

// --- 4. RENDER TEMA ---
function renderThemes() {
    themeGrid.innerHTML = '';
    Object.entries(themes).forEach(([key, theme]) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'theme-btn' + (key === selectedTheme ? ' active' : '');
        btn.dataset.theme = key;
        btn.innerHTML = `<span class="theme-emoji">${theme.emoji}</span><span class="theme-name">${theme.label}</span>`;
        btn.addEventListener('click', () => selectTheme(key));
        themeGrid.appendChild(btn);
    });
}

function selectTheme(key) {
    selectedTheme = key;
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === key);
    });
}

// --- 5. FUNGSI-FUNGSI PERMAINAN ---
function switchScreen(screenToShow) {
    screens.forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenToShow).classList.remove('hidden');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function setupGame() {
    const innocentCount = parseInt(innocentCountInput.value);
    const impostorCount = parseInt(impostorCountInput.value);

    roles = [
        ...Array(innocentCount).fill('INNOCENT'),
        ...Array(impostorCount).fill('IMPOSTOR')
    ];
    shuffleArray(roles);

    const activePairs = themes[selectedTheme].pairs;
    const wordPair = activePairs[Math.floor(Math.random() * activePairs.length)];
    innocentWord = wordPair.innocent;
    impostorWord = wordPair.impostor;

    currentPlayerIndex = 0;
    passToPlayerText.textContent = `Oper perangkat ke Pemain ${currentPlayerIndex + 1}`;
    switchScreen('pass-device-screen');
}

function showPlayerRole() {
    const currentRole = roles[currentPlayerIndex];
    const currentWord = currentRole === 'INNOCENT' ? innocentWord : impostorWord;

    playerRoleText.textContent = currentRole;
    playerWordText.textContent = currentWord;

    if (currentRole === 'INNOCENT') {
        roleCard.className = 'card innocent';
        roleDescriptionText.textContent = 'Tugasmu: Jelaskan kata ini agar semua orang percaya kamu bukan Impostor!';
    } else {
        roleCard.className = 'card impostor';
        roleDescriptionText.textContent = 'Tugasmu: Pura-pura mendapat kata yang sama dengan Innocent dan berbaurlah!';
    }

    switchScreen('reveal-role-screen');
}

function hideRoleAndContinue() {
    currentPlayerIndex++;
    if (currentPlayerIndex < roles.length) {
        passToPlayerText.textContent = `Oper perangkat ke Pemain ${currentPlayerIndex + 1}`;
        switchScreen('pass-device-screen');
    } else {
        const themeLabel = themes[selectedTheme].label;
        gameSummaryText.innerHTML = `
            Total Pemain: ${roles.length} &nbsp;|&nbsp; Tema: <strong>${themes[selectedTheme].emoji} ${themeLabel}</strong><br>
            (${innocentCountInput.value} Innocent, ${impostorCountInput.value} Impostor)
        `;
        switchScreen('gameplay-screen');
    }
}

function restartGame() {
    switchScreen('setup-screen');
}

// --- 6. EVENT LISTENERS ---
setupStartButton.addEventListener('click', setupGame);
showRoleButton.addEventListener('click', showPlayerRole);
hideRoleButton.addEventListener('click', hideRoleAndContinue);
restartButton.addEventListener('click', restartGame);

// Init
renderThemes();

// --- DARK MODE ---
const darkmodeToggle = document.getElementById('darkmode-toggle');

function applyDarkMode(isDark) {
    document.body.classList.toggle('dark', isDark);
    darkmodeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDark ? '1' : '0');
}

darkmodeToggle.addEventListener('click', () => {
    applyDarkMode(!document.body.classList.contains('dark'));
});

(function() {
    const saved = localStorage.getItem('darkMode');
    if (saved === '1' || (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        applyDarkMode(true);
    }
})();
