/* style.css */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;900&display=swap');

/* ===== CSS VARIABLES — LIGHT MODE ===== */
:root {
    --bg: #f0f2f5;
    --card-bg: #ffffff;
    --text: #1c1e21;
    --text-muted: #444;
    --border: #dddfe2;
    --input-bg: #ffffff;
    --surface: #f0f2f5;
    --theme-btn-bg: #f7f8fa;
    --theme-btn-border: #e4e6ea;
    --theme-btn-color: #444;
    --theme-btn-hover-bg: #e8f0fe;
    --shadow: 0 6px 24px rgba(0, 0, 0, 0.10);
    --blue: #1877f2;
    --blue-hover: #166fe5;
    --green: #42b72a;
    --green-hover: #36a420;
    --red: #fa383e;
    --toggle-bg: #e4e6ea;
    --toggle-color: #1c1e21;
}

/* ===== DARK MODE ===== */
body.dark {
    --bg: #18191a;
    --card-bg: #242526;
    --text: #e4e6eb;
    --text-muted: #b0b3b8;
    --border: #3a3b3c;
    --input-bg: #3a3b3c;
    --surface: #3a3b3c;
    --theme-btn-bg: #2d2e2f;
    --theme-btn-border: #3a3b3c;
    --theme-btn-color: #c9ccd1;
    --theme-btn-hover-bg: #1d3461;
    --shadow: 0 6px 24px rgba(0, 0, 0, 0.40);
    --blue: #2d88ff;
    --blue-hover: #4399ff;
    --green: #45bd62;
    --green-hover: #58c974;
    --red: #ff4d52;
    --toggle-bg: #3a3b3c;
    --toggle-color: #e4e6eb;
}

/* ===== BASE ===== */
body {
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: var(--bg);
    color: var(--text);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    text-align: center;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* ===== DARK MODE TOGGLE ===== */
#darkmode-toggle {
    position: fixed;
    top: 16px;
    right: 16px;
    width: 42px;
    height: 42px;
    border-radius: 50% !important;
    border: none;
    background: var(--toggle-bg);
    color: var(--toggle-color);
    font-size: 1.2em;
    cursor: pointer;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    transition: background 0.3s ease, transform 0.2s ease;
    padding: 0 !important;
    width: 42px !important;
}

#darkmode-toggle:hover {
    transform: scale(1.12) rotate(18deg) !important;
}

/* ===== SCREENS & CARDS ===== */
.screen {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}

.card {
    background-color: var(--card-bg);
    padding: 30px 40px;
    border-radius: 16px;
    box-shadow: var(--shadow);
    max-width: 460px;
    margin: auto;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.card p {
    color: var(--text-muted);
}

.hidden {
    display: none;
}

/* ===== INPUTS ===== */
.input-group {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

input[type="number"] {
    width: 60px;
    padding: 8px;
    border: 1px solid var(--border);
    border-radius: 6px;
    font-size: 1.1em;
    text-align: center;
    font-family: inherit;
    background-color: var(--input-bg);
    color: var(--text);
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;
}

/* ===== THEME SECTION ===== */
.theme-section {
    margin: 22px 0 24px;
    text-align: left;
}

.theme-label {
    display: block;
    font-weight: 700;
    font-size: 0.95em;
    color: var(--text-muted);
    margin-bottom: 12px;
    transition: color 0.3s;
}

.theme-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
}

.theme-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 10px 6px;
    border: 2px solid var(--theme-btn-border);
    border-radius: 10px;
    background: var(--theme-btn-bg);
    cursor: pointer;
    transition: all 0.18s ease;
    font-family: inherit;
    width: 100%;
    color: var(--theme-btn-color);
}

.theme-btn:hover {
    border-color: var(--blue);
    background: var(--theme-btn-hover-bg);
    transform: translateY(-1px);
}

.theme-btn.active {
    border-color: var(--blue);
    background: var(--blue);
    color: white;
    box-shadow: 0 3px 10px rgba(24, 119, 242, 0.35);
}

.theme-emoji { font-size: 1.5em; line-height: 1; }
.theme-name  { font-size: 0.72em; font-weight: 700; text-align: center; line-height: 1.2; }

/* ===== MAIN BUTTONS ===== */
button:not(.theme-btn):not(#darkmode-toggle) {
    width: 100%;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    font-size: 1.1em;
    font-weight: 700;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.1s;
    font-family: inherit;
}

button:not(.theme-btn):not(#darkmode-toggle):active {
    transform: scale(0.98);
}

#setup-start-button, #show-role-button {
    background-color: var(--blue);
}
#setup-start-button:hover, #show-role-button:hover {
    background-color: var(--blue-hover);
}

#hide-role-button, #restart-button {
    background-color: var(--green);
}
#hide-role-button:hover, #restart-button:hover {
    background-color: var(--green-hover);
}

/* ===== ROLE CARD ===== */
#role-card.innocent { border-top: 5px solid var(--blue); }
#role-card.impostor { border-top: 5px solid var(--red); }

#player-role {
    font-size: 2.5em;
    font-weight: 900;
    margin: 10px 0;
}

.innocent #player-role { color: var(--blue); }
.impostor #player-role { color: var(--red); }

#player-word {
    font-size: 2em;
    font-weight: 900;
    background-color: var(--surface);
    color: var(--text);
    padding: 15px;
    border-radius: 10px;
    margin: 20px 0;
    letter-spacing: 0.03em;
    transition: background-color 0.3s, color 0.3s;
}

/* ===== GAME SUMMARY ===== */
#game-summary {
    background: var(--surface);
    border-radius: 10px;
    padding: 14px 18px;
    margin: 16px 0;
    font-size: 0.97em;
    line-height: 1.7;
    color: var(--text-muted);
    transition: background-color 0.3s, color 0.3s;
}
