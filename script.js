// script.js

// --- 1. DAFTAR KATA PER TEMA ---
const themes = {
    semua: {
        label: 'Semua Tema',
        emoji: '🎲',
        pairs: null // akan diisi dari semua tema
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

// Restore preference on load (follows system preference if no saved setting)
(function() {
    const saved = localStorage.getItem('darkMode');
    if (saved === '1' || (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        applyDarkMode(true);
    }
})();
