/**
 * AI Aunty Promo — Interactive Engine
 * Domain: aunty-apps.web.app
 */

const APPS_DATABASE = [
    {
        id: "jokewala",
        name: "Jokewala",
        playStoreTitle: "Jokewala: Hindi Jokes Chutkule",
        subtitle: "Hindi Jokes Chutkule",
        category: "comedy",
        categoryLabel: "Comedy & Fun",
        packageName: "com.jokewala.app",
        icon: "images/jokewala.webp",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.jokewala.app",
        rating: "4.9 ★",
        downloads: "10K+",
        size: "12 MB",
        badge: "Trending 🔥",
        status: "Active",
        tagline: "10,000+ Desi jokes, Pati-Patni chutkule, Desi audio comedy aur meme jokes — 100% Free & Offline!",
        description: "Jokewala is the ultimate laughter destination designed for Hindi joke lovers. Enjoy unlimited Santa-Banta, Pati-Patni, Desi comedy, WhatsApp status jokes and real audio punches without any internet connection. 100% ad-friendly and family safe.",
        highlights: [
            "10,000+ handpicked Desi Hindi jokes & chutkule",
            "Audio comedy punches with voice punchlines",
            "100% Offline mode — zero internet required",
            "Direct 1-tap WhatsApp & Instagram sharing",
            "Favorites collection & night reading mode"
        ]
    },
    {
        id: "splitbhai",
        name: "SplitBhai",
        playStoreTitle: "SplitBhai: Easy Bill Splitter",
        subtitle: "Easy Bill Splitter",
        category: "finance",
        categoryLabel: "Finance & Money",
        packageName: "com.splitbhai.app",
        icon: "images/splitbhai.webp",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.splitbhai.app",
        rating: "4.8 ★",
        downloads: "5K+",
        size: "14 MB",
        badge: "Smart Utility ⚡",
        status: "Active",
        tagline: "Dosto ke saath hisab-kitab ka tension khatam! Automatic split, zero login, 100% on-device private.",
        description: "SplitBhai eliminates bill disputes between friends, flatmates, and travel groups. Effortlessly add expenses, calculate exact dues, share settlement PDFs, and sync with your team with zero mandatory logins.",
        highlights: [
            "Instant group expense splitting in seconds",
            "Minimal settlement algorithm reduces extra transactions",
            "Multi-currency & custom unequal split support",
            "Direct WhatsApp summary report generation",
            "Works completely offline without forced account signups"
        ]
    },
    {
        id: "smartemi",
        name: "Smart EMI",
        playStoreTitle: "Smart EMI: Loan & EMI Calc",
        subtitle: "Loan & EMI Calc",
        category: "finance",
        categoryLabel: "Finance & Money",
        packageName: "com.smartemi.app",
        icon: "images/smartemi.webp",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.smartemi.app",
        rating: "4.8 ★",
        downloads: "5K+",
        size: "11 MB",
        badge: "Financial Genius 💡",
        status: "Active",
        tagline: "Home loan, car loan ya personal loan? Check your exact monthly EMI, prepayment savings & amortization.",
        description: "Smart EMI is an all-in-one financial decision companion. Compare two loans side-by-side, plan pre-payments to save lakhs in interest, and generate detailed payment schedules instantly.",
        highlights: [
            "Accurate EMI calculation with interactive visual graphs",
            "Side-by-side loan comparison engine",
            "Loan prepayment & interest saving planner",
            "Complete monthly amortization schedule with PDF export",
            "GST, FD, RD, and Flat vs Reducing rate calculators"
        ]
    },
    {
        id: "returnx",
        name: "ReturnX",
        playStoreTitle: "ReturnX - Nivesh Calculator",
        subtitle: "Nivesh Calculator",
        category: "finance",
        categoryLabel: "Finance & Money",
        packageName: "com.returnx.nivesh",
        icon: "images/returnx.webp",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.returnx.nivesh",
        rating: "4.9 ★",
        downloads: "5K+",
        size: "9 MB",
        badge: "Wealth Builder 📈",
        status: "Active",
        tagline: "Calculate Mutual Funds SIP, Lumpsum, SWP, CAGR and Step-Up SIP with realistic inflation adjustments.",
        description: "ReturnX helps smart investors plan their financial freedom. Project wealth accumulation with high-precision compound interest algorithms, customize annual step-up SIPs, and visualize growth timelines.",
        highlights: [
            "SIP, Lumpsum & Step-up SIP growth simulator",
            "SWP (Systematic Withdrawal Plan) retirement calculator",
            "Inflation-adjusted future purchasing power estimate",
            "CAGR, Absolute Return and XIRR tools",
            "Clean visual pie charts & milestone roadmaps"
        ]
    },
    {
        id: "tmplayer",
        name: "TM Player",
        playStoreTitle: "TM Player",
        subtitle: "Offline Music Player",
        category: "music",
        categoryLabel: "Music & Audio",
        packageName: "com.tarunmankar.mediaplayer",
        icon: "images/tmplayer.webp",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.tarunmankar.mediaplayer",
        rating: "4.7 ★",
        downloads: "1K+",
        size: "18 MB",
        badge: "Music Player 🎧",
        status: "Active",
        tagline: "Crystal-clear 320kbps lossless audio, equalizer, folder navigation and lightweight design.",
        description: "TM Player is a high-performance offline music player for Android. Fast audio library scanning, sleek dark mode UI, custom playlists, 10-band equalizer and zero background battery drain.",
        highlights: [
            "High-resolution lossless offline music playback",
            "Professional equalizer with bass boost & reverb",
            "Folder hierarchy browser & instant search",
            "Sleep timer, lyrics support & tag editor",
            "100% offline — zero data usage"
        ]
    },
    {
        id: "tarunmusic",
        name: "Tarun Music",
        playStoreTitle: "Tarun Music: BGM Music",
        subtitle: "BGM Music",
        category: "music",
        categoryLabel: "Music & Audio",
        packageName: "com.tarunmusic.app",
        icon: "images/tarunmusic.webp",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.tarunmusic.app",
        rating: "4.9 ★",
        downloads: "1K+",
        size: "15 MB",
        badge: "BGM Music 🎼",
        status: "Active",
        tagline: "Exclusive relaxing lo-fi beats, background scores and ambient soundtracks.",
        description: "Immerse yourself in original musical compositions and background tracks. High-definition streaming designed for video creators, deep work focus sessions, and mindfulness enthusiasts.",
        highlights: [
            "Stream exclusive cinematic instrumentals & BGM",
            "Copyright-safe creator background tracks",
            "Meditation & deep focus relaxation playlists",
            "Lightweight audio streaming with crystal-clear sound",
            "Ad-light premium audio streaming experience"
        ]
    },
    {
        id: "cleansweep",
        name: "CleanSweep",
        playStoreTitle: "CleanSweep: Storage Cleaner",
        subtitle: "Storage Cleaner",
        category: "utility",
        categoryLabel: "Tools & Cleaner",
        packageName: "com.tarunmankar.cleansweep",
        icon: "images/cleansweep.webp",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.tarunmankar.cleansweep",
        rating: "5.0 ★",
        downloads: "Early Access",
        size: "8 MB",
        badge: "Super Fast 🚀",
        status: "Active",
        tagline: "Boost speed and reclaim GBs of storage! 100% on-device private cleaner — no clouds, no tracking.",
        description: "CleanSweep provides surgical cleanliness for your Android device. Safely scans residual app cache, orphaned files, duplicate media, and heavy WhatsApp downloads while keeping your privacy 100% intact.",
        highlights: [
            "1-tap cache cleaner & deep storage analysis",
            "Dedicated WhatsApp & social media junk remover",
            "Zero cloud sync — your files never leave your device",
            "Duplicate photo & large video finder",
            "Featherlight app size under 10 MB"
        ]
    }
];

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
    initAppGrid();
    initFilters();
    initSearch();
    initModal();
    checkDirectHashOpen();
});

// Render App Grid
function initAppGrid(filteredApps = APPS_DATABASE) {
    const grid = document.getElementById("appsGrid");
    if (!grid) return;

    if (filteredApps.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
                <p style="font-size: 1.2rem; color: var(--text-secondary);">Koi app nahi mila, beta! Dusra keyword try karo.</p>
                <button class="btn btn-secondary" onclick="resetSearch()" style="margin-top: 1rem;">
                    <i class="fas fa-rotate-left"></i> View All Apps
                </button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredApps.map(app => `
        <div class="mobile-app-card glass-panel" onclick="openAppDetail('${app.id}')" data-app-id="${app.id}">
            <div class="card-left">
                <img src="${app.icon}" alt="${app.name}" class="app-icon" loading="lazy">
            </div>
            <div class="card-center">
                <div class="card-title-row">
                    <h3 class="app-title">${app.name}</h3>
                    <span class="badge-cat cat-${app.category}">${app.categoryLabel}</span>
                </div>
                <p class="app-desc">${app.subtitle}</p>
                <div class="app-metrics">
                    <span class="metric-rating"><i class="fas fa-star"></i> ${app.rating}</span>
                    <span><i class="fas fa-download"></i> ${app.downloads}</span>
                    <span>${app.size}</span>
                    <span class="offline-tag"><i class="fas fa-wifi-slash"></i> Offline</span>
                </div>
            </div>
            <div class="card-right" onclick="event.stopPropagation();">
                <a href="${app.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn-app-install" title="Install from Google Play">
                    <i class="fab fa-google-play"></i>
                    <span>GET</span>
                </a>
            </div>
        </div>
    `).join("");
}

// Category Filter Handling
function initFilters() {
    const pills = document.querySelectorAll(".filter-pill-btn");
    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");

            const category = pill.getAttribute("data-category");
            const searchVal = document.getElementById("searchInput")?.value.toLowerCase().trim() || "";

            filterApps(category, searchVal);
        });
    });
}

// Search Handling
function initSearch() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;

    searchInput.addEventListener("input", (e) => {
        const activeCategory = document.querySelector(".filter-pill-btn.active")?.getAttribute("data-category") || "all";
        filterApps(activeCategory, e.target.value.toLowerCase().trim());
    });
}

function filterApps(category, search) {
    let results = APPS_DATABASE;

    if (category && category !== "all") {
        results = results.filter(app => app.category === category);
    }

    if (search) {
        results = results.filter(app => 
            app.name.toLowerCase().includes(search) ||
            app.subtitle.toLowerCase().includes(search) ||
            app.tagline.toLowerCase().includes(search) ||
            app.description.toLowerCase().includes(search)
        );
    }

    initAppGrid(results);
}

window.resetSearch = function() {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = "";
    const pills = document.querySelectorAll(".filter-pill-btn");
    pills.forEach(p => p.classList.remove("active"));
    pills[0]?.classList.add("active");
    initAppGrid(APPS_DATABASE);
};

// Modal Details Handler
function initModal() {
    const overlay = document.getElementById("appModalOverlay");
    const closeBtn = document.getElementById("modalCloseBtn");

    if (closeBtn && overlay) {
        closeBtn.addEventListener("click", closeModal);
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) closeModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });
}

window.openAppDetail = function(appId) {
    const app = APPS_DATABASE.find(a => a.id === appId || (appId === "studioplayer" && a.id === "tmplayer") || (appId === "zenwave" && a.id === "tarunmusic"));
    if (!app) return;

    // Update modal elements
    document.getElementById("modalAppIcon").src = app.icon;
    document.getElementById("modalAppName").textContent = app.name;
    document.getElementById("modalAppSubtitle").textContent = app.subtitle;
    document.getElementById("modalAppPackage").textContent = app.packageName;
    
    document.getElementById("modalAppRating").textContent = app.rating;
    document.getElementById("modalAppDownloads").textContent = app.downloads;
    document.getElementById("modalAppSize").textContent = app.size;
    
    document.getElementById("modalAppDescription").textContent = app.description;

    const highlightsList = document.getElementById("modalHighlightsList");
    if (highlightsList) {
        highlightsList.innerHTML = app.highlights.map(h => `
            <li><i class="fas fa-check-circle"></i> <span>${h}</span></li>
        `).join("");
    }

    const playBtn = document.getElementById("modalPlayStoreBtn");
    if (playBtn) {
        playBtn.href = app.playStoreUrl;
    }

    const fullPageBtn = document.getElementById("modalFullPageBtn");
    if (fullPageBtn) {
        fullPageBtn.href = `app.html?id=${app.id}`;
    }

    // Show modal
    const overlay = document.getElementById("appModalOverlay");
    if (overlay) {
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    // Update URL hash for easy sharing
    window.location.hash = `app-${app.id}`;
};

window.closeModal = function() {
    const overlay = document.getElementById("appModalOverlay");
    if (overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }
    if (window.location.hash.startsWith("#app-")) {
        history.replaceState(null, null, ' ');
    }
};

// Check if user loaded URL with a specific #app-id
function checkDirectHashOpen() {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#app-")) {
        const id = hash.replace("#app-", "");
        openAppDetail(id);
    }
}



// Universal Share / Copy Link
window.shareSite = function(title = "AI Aunty Apps | Official Apps Hub", url = window.location.href) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: "Check out official Android Apps on AI Aunty Apps!",
            url: url
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(url).then(() => {
            showToast("Link copied to clipboard! 📋");
        });
    }
};

function showToast(message) {
    let toast = document.getElementById("siteToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "siteToast";
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("active");
    setTimeout(() => {
        toast.classList.remove("active");
    }, 2800);
}
