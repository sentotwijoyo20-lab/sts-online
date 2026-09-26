function pilihUjian(mode) {
    if (mode !== "gladi" && mode !== "resmi") {
        return;
    }

    window.location.href = "login.html?mode=" + mode;
}

function mulaiLogin() {
    const nama = document.getElementById("nama").value.trim();
    const nis = document.getElementById("nis").value.trim();
    const token = document.getElementById("token").value.trim();

    if (nama === "") {
        alert("Silakan masukkan Nama Lengkap.");
        return;
    }

    if (nis === "") {
        alert("Silakan masukkan NIS / Nomor Peserta.");
        return;
    }

    if (token === "") {
        alert("Silakan masukkan Token Ujian.");
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode") || "gladi";

    localStorage.setItem("namaSiswa", nama);
    localStorage.setItem("nisSiswa", nis);
    localStorage.setItem("tokenUjian", token);
    localStorage.setItem("modeUjian", mode);

    window.location.href = "ujian.html?mode=" + mode;
}

function kembaliKeBeranda() {
    window.location.href = "index.html";
}
