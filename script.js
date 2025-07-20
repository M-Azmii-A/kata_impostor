// script.js

// --- 1. DAFTAR KATA ---
// Kata sengaja dibuat berpasangan dan mirip agar menantang
const wordPairs = [
    { innocent: 'PANTAI', impostor: 'GURUN' },
    { innocent: 'DOKTER', impostor: 'MONTIR' },
    { innocent: 'SUSU', impostor: 'SANTAN' },
    { innocent: 'KUCING', impostor: 'HARIMAU' },
    { innocent: 'BULAN', impostor: 'LAMPU' },
    { innocent: 'GULA', impostor: 'GARAM' },
    { innocent: 'SEPEDA', impostor: 'MOTOR' },
];

// --- 2. MENGAMBIL ELEMEN DARI HTML ---
// Layar
const screens = document.querySelectorAll('.screen');
const setupScreen = document.getElementById('setup-screen');
const passDeviceScreen = document.getElementById('pass-device-screen');
const revealRoleScreen = document.getElementById('reveal-role-screen');
const gameplayScreen = document.getElementById('gameplay-screen');

// Tombol
const setupStartButton = document.getElementById('setup-start-button');
const showRoleButton = document.getElementById('show-role-button');
const hideRoleButton = document.getElementById('hide-role-button');
const restartButton = document.getElementById('restart-button');

// Input
const innocentCountInput = document.getElementById('innocent-count');
const impostorCountInput = document.getElementById('impostor-count');

// Elemen Dinamis
const passToPlayerText = document.getElementById('pass-to-player-text');
const roleCard = document.getElementById('role-card');
const playerRoleText = document.getElementById('player-role');
const playerWordText = document.getElementById('player-word');
const roleDescriptionText = document.getElementById('role-description');
const gameSummaryText = document.getElementById('game-summary');

// --- 3. VARIABEL STATE PERMAINAN ---
let roles = [];
let currentPlayerIndex = 0;
let innocentWord = '';
let impostorWord = '';

// --- 4. FUNGSI-FUNGSI PERMAINAN ---

// Fungsi untuk berpindah layar
function switchScreen(screenToShow) {
    screens.forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenToShow).classList.remove('hidden');
}

// Fungsi untuk mengacak array (algoritma Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Fungsi utama untuk memulai permainan dari setup
function setupGame() {
    // 1. Ambil jumlah pemain
    const innocentCount = parseInt(innocentCountInput.value);
    const impostorCount = parseInt(impostorCountInput.value);

    // 2. Buat daftar peran
    roles = [
        ...Array(innocentCount).fill('INNOCENT'),
        ...Array(impostorCount).fill('IMPOSTOR')
    ];
    shuffleArray(roles);

    // 3. Pilih pasangan kata secara acak
    const wordPair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
    innocentWord = wordPair.innocent;
    impostorWord = wordPair.impostor;

    // 4. Reset indeks pemain dan mulai alur
    currentPlayerIndex = 0;
    passToPlayerText.textContent = `Oper perangkat ke Pemain ${currentPlayerIndex + 1}`;
    switchScreen('pass-device-screen');
}

// Fungsi untuk menampilkan peran pemain saat ini
function showPlayerRole() {
    const currentRole = roles[currentPlayerIndex];
    const currentWord = currentRole === 'INNOCENT' ? innocentWord : impostorWord;
    
    playerRoleText.textContent = currentRole;
    playerWordText.textContent = currentWord;
    
    // Sesuaikan tampilan kartu berdasarkan peran
    if (currentRole === 'INNOCENT') {
        roleCard.className = 'card innocent';
        roleDescriptionText.textContent = 'Tugasmu: Jelaskan kata ini agar semua orang percaya kamu bukan Impostor!';
    } else { // IMPOSTOR
        roleCard.className = 'card impostor';
        roleDescriptionText.textContent = 'Tugasmu: Pura-pura mendapat kata yang sama dengan Innocent dan berbaurlah!';
    }
    
    switchScreen('reveal-role-screen');
}

// Fungsi yang berjalan saat pemain menyembunyikan perannya
function hideRoleAndContinue() {
    currentPlayerIndex++;
    // Cek apakah masih ada pemain yang belum lihat peran
    if (currentPlayerIndex < roles.length) {
        passToPlayerText.textContent = `Oper perangkat ke Pemain ${currentPlayerIndex + 1}`;
        switchScreen('pass-device-screen');
    } else {
        // Semua pemain sudah lihat, permainan dimulai
        gameSummaryText.innerHTML = `Total Pemain: ${roles.length} <br> (${innocentCountInput.value} Innocent, ${impostorCountInput.value} Impostor)`;
        switchScreen('gameplay-screen');
    }
}

// Fungsi untuk kembali ke layar awal
function restartGame() {
    switchScreen('setup-screen');
}

// --- 5. EVENT LISTENERS ---
setupStartButton.addEventListener('click', setupGame);
showRoleButton.addEventListener('click', showPlayerRole);
hideRoleButton.addEventListener('click', hideRoleAndContinue);
restartButton.addEventListener('click', restartGame);