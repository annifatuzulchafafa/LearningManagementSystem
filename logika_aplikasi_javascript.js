tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#fff1f2',
                    500: '#ef4444',
                    600: '#dc2626',
                    700: '#b91c1c',
                    900: '#7f1d1d',
                    dark: '#070707',
                    card: '#111111'
                }
            },
            boxShadow: {
                'glow': '0 0 40px -10px rgba(239, 68, 68, 0.35)',
                'glow-sm': '0 0 20px -5px rgba(239, 68, 68, 0.25)',
            }
        }
    }
};

let currentUploadedImageSrc = 'https://placehold.co/800x450/0f0505/ef4444?text=Praktikum+Color+Grading+SMK';

function switchTab(tabId) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    document.getElementById('view-' + tabId).classList.remove('hidden');

    ['home', 'courses', 'generator', 'studio', 'community'].forEach(t => {
        const btn = document.getElementById('nav-' + t);
        if(btn) {
            if(t === tabId) {
                btn.className = "px-5 py-2 rounded-full text-xs font-bold text-red-500 bg-red-600/15 shadow-sm transition";
            } else {
                btn.className = "px-5 py-2 rounded-full text-xs font-medium text-slate-300 transition hover:text-white hover:bg-neutral-900";
            }
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function fillSampleScript() {
    document.getElementById('scriptSlugline').value = "INT. KELAS MULTIMEDIA - SIANG";
    document.getElementById('scriptAction').value = "Siswa kelas XII menyalakan kamera DSLR di atas tripod, memperhatikan pencahayaan jendela.";
    document.getElementById('scriptCharacter').value = "BIMO";
    document.getElementById('scriptParenthetical').value = "(tersenyum antusias)";
    document.getElementById('scriptDialog').value = "Teman-teman, pastikan sudut pengambilan gambar angle ini tepat agar visualnya sinematik!";
    document.getElementById('scriptVoice').value = "Narator (VO): Belajar videografi di SMK menuntut ketelitian dalam setiap detail adegan.";
    document.getElementById('scriptTransition').value = "CUT TO:";
    alertBox('Contoh naskah standar SMK berhasil dimuat!');
}

function generateStructuredScript() {
    const slug = document.getElementById('scriptSlugline').value.trim() || "INT. STUDIO FILM - PAGI";
    const action = document.getElementById('scriptAction').value.trim() || "Kamera menyorot suasana ruang studio praktik.";
    const character = document.getElementById('scriptCharacter').value.trim() || "SISWA SMK";
    const parenthetical = document.getElementById('scriptParenthetical').value.trim() || "(fokus)";
    const dialog = document.getElementById('scriptDialog').value.trim() || "Mari kita mulai proses syuting adegan pertama.";
    const voice = document.getElementById('scriptVoice').value.trim() || "Talking Voice / VO: Kreatifitas tanpa batas dimulai dari sini.";
    const transition = document.getElementById('scriptTransition').value.trim() || "CUT TO:";

    const statusTag = document.getElementById('outputStatusTag');
    const outputBox = document.getElementById('instantOutputBox');

    statusTag.innerText = "Memproses Format...";
    statusTag.className = "text-xs px-3 py-1 rounded-full bg-red-600/20 text-red-500 font-mono animate-pulse";

    setTimeout(() => {
        statusTag.innerText = "Selesai (Siap Kumpul)";
        statusTag.className = "text-xs px-3 py-1 rounded-full bg-red-600/10 text-red-500 font-mono";

        outputBox.innerHTML = `
            <div class="text-red-500 font-bold border-b border-neutral-900 pb-2 mb-3 flex items-center justify-between">
                <span><i class="fa-solid fa-file-lines mr-1"></i> FORMAT NASKAH & STORYBOARD SIAP UPLOAD</span>
                <span class="text-[10px] text-slate-400">Standar Industri Film</span>
            </div>
            <div class="space-y-4 text-slate-200">
                <div class="bg-neutral-950 p-3.5 rounded-xl border border-neutral-900">
                    <span class="text-red-500 font-bold block text-[11px]">SLUGLINE (Scene Heading):</span>
                    <p class="uppercase font-bold tracking-wide mt-1 text-white">${slug}</p>
                </div>
                <div class="bg-neutral-950 p-3.5 rounded-xl border border-neutral-900">
                    <span class="text-red-500 font-bold block text-[11px]">ACTION LINE (Deskripsi Visual):</span>
                    <p class="text-slate-300 mt-1">${action}</p>
                </div>
                <div class="bg-neutral-950 p-3.5 rounded-xl border border-neutral-900 space-y-2">
                    <span class="text-red-500 font-bold block text-[11px]">KARAKTER & DIALOG (Screenplay Format):</span>
                    <div class="pl-4 space-y-1 border-l-2 border-red-600/60">
                        <p class="font-bold text-rose-400 uppercase">${character}</p>
                        <p class="text-slate-400 italic text-[11px]">${parenthetical}</p>
                        <p class="text-white">"${dialog}"</p>
                    </div>
                </div>
                <div class="bg-neutral-950 p-3.5 rounded-xl border border-neutral-900">
                    <span class="text-red-500 font-bold block text-[11px]">TALKING VOICE / VOICE OVER (VO):</span>
                    <p class="text-slate-300 mt-1 italic">${voice}</p>
                </div>
                <div class="bg-neutral-950 p-3.5 rounded-xl border border-neutral-900 flex items-center justify-between">
                    <span class="text-red-500 font-bold text-[11px]">TRANSISI:</span>
                    <span class="uppercase font-bold tracking-wider text-rose-400">${transition}</span>
                </div>
            </div>
        `;
        alertBox('Naskah dan storyboard berhasil disusun dalam format standar industri!');
    }, 500);
}

function copyToClipboard() {
    const slug = document.getElementById('scriptSlugline').value.trim() || "INT. STUDIO FILM - PAGI";
    const action = document.getElementById('scriptAction').value.trim() || "";
    const character = document.getElementById('scriptCharacter').value.trim() || "";
    const parenthetical = document.getElementById('scriptParenthetical').value.trim() || "";
    const dialog = document.getElementById('scriptDialog').value.trim() || "";
    const transition = document.getElementById('scriptTransition').value.trim() || "";

    let cleanText = `${slug}\n\n`;
    if(action) cleanText += `${action}\n\n`;
    if(character) {
        cleanText += `${character.toUpperCase()}\n`;
        if(parenthetical) cleanText += `${parenthetical}\n`;
        if(dialog) cleanText += `"${dialog}"\n\n`;
    }
    if(transition) cleanText += `${transition}\n`;

    if(navigator.clipboard) {
        navigator.clipboard.writeText(cleanText).then(() => {
            alertBox('Naskah bersih berhasil disalin ke Clipboard!');
        }).catch(() => {
            alertBox('Berhasil disalin!');
        });
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = cleanText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alertBox('Berhasil disalin!');
    }
}

function downloadAsDocx() {
    const slug = document.getElementById('scriptSlugline').value.trim() || "INT. STUDIO FILM - PAGI";
    const action = document.getElementById('scriptAction').value.trim() || "";
    const character = document.getElementById('scriptCharacter').value.trim() || "";
    const parenthetical = document.getElementById('scriptParenthetical').value.trim() || "";
    const dialog = document.getElementById('scriptDialog').value.trim() || "";
    const voice = document.getElementById('scriptVoice').value.trim() || "";
    const transition = document.getElementById('scriptTransition').value.trim() || "";

    let cleanText = `FORMAT NASKAH & STORYBOARD STANDAR INDUSTRI SMK\n`;
    cleanText += `===============================================\n\n`;
    cleanText += `SLUGLINE:\n${slug}\n\n`;
    if(action) cleanText += `ACTION LINE:\n${action}\n\n`;
    if(character) {
        cleanText += `KARAKTER & DIALOG:\n`;
        cleanText += `          ${character.toUpperCase()}\n`;
        if(parenthetical) cleanText += `        ${parenthetical}\n`;
        if(dialog) cleanText += `     "${dialog}"\n\n`;
    }
    if(voice) {
        cleanText += `TALKING VOICE / VOICE OVER (VO):\n`;
        cleanText += `${voice}\n\n`;
    }
    if(transition) cleanText += `TRANSISI:\n                                                       ${transition}\n`;

    const blob = new Blob([cleanText], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Naskah_Film_Lengkap_VoiceOver.doc';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alertBox('File dokumen lengkap beserta Voice Over berhasil diunduh!');
}

function openModal(modalId) {
    if(modalId === 'loginModal' || modalId === 'registerModal') {
        document.getElementById('authTitle').innerText = modalId === 'loginModal' ? 'Masuk ke LMS SMK' : 'Pendaftaran Akun Siswa SMK';
        document.getElementById('authModal').classList.remove('hidden');
        document.getElementById('authModal').classList.add('flex');
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    document.getElementById(modalId).classList.remove('flex');
}

function openCourseDetail(courseName) {
    document.getElementById('courseModalTitle').innerText = courseName;
    document.getElementById('courseModal').classList.remove('hidden');
    document.getElementById('courseModal').classList.add('flex');
}

function openVideoPlayer(title, url) {
    document.getElementById('modalVideoTitle').innerText = title;
    const vid = document.getElementById('modalVideoElement');
    vid.src = url;
    document.getElementById('videoModal').classList.remove('hidden');
    document.getElementById('videoModal').classList.add('flex');
    vid.play().catch(e => console.log("Autoplay prevented:", e));
}

function closeVideoPlayer() {
    const vid = document.getElementById('modalVideoElement');
    vid.pause();
    document.getElementById('videoModal').classList.add('hidden');
    document.getElementById('videoModal').classList.remove('flex');
}

function alertBox(msg) {
    document.getElementById('alertMessage').innerText = msg;
    const alertEl = document.getElementById('customAlert');
    alertEl.classList.remove('hidden');
    setTimeout(() => {
        alertEl.classList.add('hidden');
    }, 4000);
}

function handleAuthSubmit(e) {
    e.preventDefault();
    closeModal('authModal');
    alertBox('Login berhasil! Selamat datang di dashboard pembelajaran siswa SMK.');
}

function handleMediaUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    currentUploadedImageSrc = url;
    const container = document.getElementById('simMediaContainer');
    const videoEl = document.getElementById('simVideoElement');

    if (file.type.startsWith('video/')) {
        container.style.backgroundImage = 'none';
        videoEl.src = url;
        videoEl.classList.remove('hidden');
        videoEl.play().catch(e => console.log("Auto play prevented", e));
        alertBox('Video berhasil dimuat ke dalam Simulator Color Grading!');
    } else if (file.type.startsWith('image/')) {
        videoEl.pause();
        videoEl.classList.add('hidden');
        container.style.backgroundImage = `url('${url}')`;
        alertBox('Foto berhasil dimuat ke dalam Simulator Color Grading!');
    } else {
        alertBox('Format file tidak didukung. Harap unggah foto atau video.');
    }
}

function saveGradedImage() {
    const contrast = document.getElementById('rangeContrast').value;
    const saturation = document.getElementById('rangeSaturation').value;
    const temp = parseInt(document.getElementById('rangeTemp').value);
    const lutVal = document.getElementById('selectLUT').value;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = currentUploadedImageSrc.startsWith('blob:') ? currentUploadedImageSrc : 'https://placehold.co/1280x720/0f0505/ef4444?text=Praktikum+Color+Grading+SMK';

    img.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || 1280;
        canvas.height = img.naturalHeight || 720;
        const ctx = canvas.getContext('2d');

        ctx.filter = `contrast(${contrast}%) saturate(${saturation}%)`;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.filter = 'none';

        if (lutVal === 'tealOrange') {
            ctx.fillStyle = 'rgba(13, 148, 136, 0.25)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(249, 115, 22, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else if (lutVal === 'cyberpunk') {
            ctx.fillStyle = 'rgba(236, 72, 153, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else if (lutVal === 'warmCinematic') {
            ctx.fillStyle = 'rgba(245, 158, 11, 0.25)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        if (temp !== 0) {
            ctx.fillStyle = temp > 0 ? `rgba(255, 100, 0, ${Math.abs(temp)/200})` : `rgba(0, 150, 255, ${Math.abs(temp)/200})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        const dataUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = `Hasil_Color_Grading_${lutVal}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        alertBox('Hasil Color Grading berhasil disimpan murni tanpa watermark (.png)!');
    };

    img.onerror = function() {
        alertBox('Gagal merender gambar. Pastikan file media valid.');
    };
}

function updateColorGrading() {
    const lutVal = document.getElementById('selectLUT').value;
    const lutText = document.getElementById('selectLUT').options[document.getElementById('selectLUT').selectedIndex].text;
    const contrast = document.getElementById('rangeContrast').value;
    const saturation = document.getElementById('rangeSaturation').value;
    const temp = parseInt(document.getElementById('rangeTemp').value);

    document.getElementById('valLUT').innerText = lutText;
    document.getElementById('dispLUT').innerText = lutText;

    document.getElementById('valContrast').innerText = contrast + '%';
    document.getElementById('valSaturation').innerText = saturation + '%';
    
    let tempLabel = "Normal (0)";
    if(temp > 0) tempLabel = `Hangat (+${temp})`;
    else if(temp < 0) tempLabel = `Dingin (${temp})`;
    document.getElementById('valTemp').innerText = tempLabel;

    const container = document.getElementById('simMediaContainer');
    const videoEl = document.getElementById('simVideoElement');
    const gradeOverlay = document.getElementById('colorGradeOverlay');
    const tintOverlay = document.getElementById('colorTintOverlay');

    const filterStr = `contrast(${contrast}%) saturate(${saturation}%)`;
    container.style.filter = filterStr;
    videoEl.style.filter = filterStr;

    if(lutVal === 'tealOrange') {
        gradeOverlay.style.backgroundColor = 'rgba(13, 148, 136, 0.25)';
        tintOverlay.style.backgroundColor = 'rgba(249, 115, 22, 0.2)';
        tintOverlay.style.opacity = '1';
    } else if(lutVal === 'cyberpunk') {
        gradeOverlay.style.backgroundColor = 'rgba(236, 72, 153, 0.3)';
        tintOverlay.style.backgroundColor = 'rgba(59, 130, 246, 0.3)';
        tintOverlay.style.opacity = '1';
    } else if(lutVal === 'noir') {
        container.style.filter = `grayscale(100%) contrast(${contrast}%)`;
        videoEl.style.filter = `grayscale(100%) contrast(${contrast}%)`;
        gradeOverlay.style.backgroundColor = 'rgba(0,0,0,0.2)';
        tintOverlay.style.opacity = '0';
    } else if(lutVal === 'warmCinematic') {
        gradeOverlay.style.backgroundColor = 'rgba(245, 158, 11, 0.25)';
        tintOverlay.style.opacity = '1';
    } else {
        gradeOverlay.style.backgroundColor = 'rgba(100, 100, 100, 0.15)';
        tintOverlay.style.opacity = '0';
    }

    if(temp !== 0) {
        tintOverlay.style.backgroundColor = temp > 0 ? `rgba(255, 100, 0, ${Math.abs(temp)/100})` : `rgba(0, 150, 255, ${Math.abs(temp)/100})`;
        tintOverlay.style.opacity = '0.7';
    }

    const adviceEl = document.getElementById('gradingAdvice');
    if(lutVal === 'tealOrange') {
        adviceEl.innerText = "Teal & Orange memberikan kontras sinematik Hollywood yang sangat populer untuk film pendek SMK.";
    } else if(lutVal === 'cyberpunk') {
        adviceEl.innerText = "Nuansa neon futuristik ideal untuk video musik atau fiksi ilmiah modern.";
    } else if(lutVal === 'noir') {
        adviceEl.innerText = "Gaya monokrom hitam putih menonjolkan dramatisasi dan emosi adegan klasik.";
    } else {
        adviceEl.innerText = "Pengaturan warna seimbang siap untuk dikumpulkan ke guru pengampu.";
    }
}