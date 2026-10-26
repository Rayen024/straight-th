# Design Brief — Website Pembelajaran Membuat Kabel Straight

**Versi:** 1.0  
**Status:** Design direction untuk disetujui sebelum implementasi  
**Produk:** Website Pembelajaran Membuat Kabel Straight  
**Pengguna utama:** Siswa SMK TJKT Fase E/Kelas X  
**Fokus pembelajaran:** Kabel UTP Cat 5e, alat dan bahan, keselamatan kerja, standar T568B, simulasi susunan warna, prosedur pembuatan, pengujian LAN tester, dan evaluasi akhir.

---

## Ringkasan keputusan desain

Website ini akan menggunakan pendekatan **“workshop digital yang bersih”**: antarmuka terasa modern dan ramah seperti platform belajar, tetapi visual inti—kabel, pin RJ45, alat, dan langkah kerja—harus cukup kontras serta presisi untuk membantu siswa memahami prosedur teknis.

Dua referensi yang diberikan memiliki kualitas yang akan diadopsi secara selektif:
- **Referensi dashboard aset kripto:** panel putih, sidebar gelap, kartu dengan sudut membulat, hierarki yang jelas, dan penggunaan warna sebagai pembeda informasi.
- **Referensi dashboard kursus:** aksen biru yang tegas, kartu materi berwarna, navigasi samping, indikator progres, dan pemisahan area konten yang mudah dipindai.

Produk ini **bukan dashboard analitik**. Karena itu, layout tidak akan meniru tabel aset, grafik finansial, widget promosi, atau kalender yang tidak relevan. Struktur akan dioptimalkan untuk urutan belajar dan latihan kabel.

### Keputusan desain utama

1. **Warna utama adalah biru elektrik yang terkontrol**, bukan warna-warni di seluruh halaman. Biru menandai tindakan utama, navigasi aktif, dan progres.
2. **Latar utama abu-biru sangat muda, permukaan putih, teks navy gelap.** Kombinasi ini mempertahankan kesan bersih dari referensi dan membantu fokus pada ilustrasi kabel.
3. **Warna kabel harus mengikuti identitas materi T568B**, bukan palet dekoratif. Setiap kabel selalu memiliki label teks selain warna.
4. **Simulasi mendapat ruang visual paling besar di antara fitur belajar.** Area konektor dan delapan slot tidak boleh diperlakukan sebagai kartu kecil atau dekorasi.
5. **Navigasi belajar bersifat jelas dan dapat diprediksi.** Siswa selalu tahu modul yang sedang dibuka, langkah berikutnya, dan cara kembali.
6. **MVP tidak memerlukan login, dashboard guru, backend, atau penyimpanan permanen.** Progres hanya boleh diklaim tersimpan selama sesi, kecuali keputusan produk berubah.

---

## 1. Design principles — tiga aturan wajib

### Prinsip 1 — Learn by doing, satu tugas utama pada satu waktu

Setiap layar harus membantu siswa memahami satu konsep atau menyelesaikan satu tugas yang jelas. Materi pengantar tidak boleh bersaing dengan terlalu banyak kartu, promosi, atau statistik. Pada simulasi, perhatian utama harus tertuju pada kabel, slot konektor, dan tindakan untuk memeriksa jawaban.

**Aturan penerapan**
- Setiap layar memiliki satu *primary action* yang paling menonjol.
- Materi panjang dipecah menjadi bagian ringkas dengan ilustrasi yang relevan.
- Pada simulasi, tombol **Periksa Jawaban** menjadi tindakan utama; **Atur Ulang** menjadi tindakan sekunder.
- Jangan menampilkan komponen dekoratif yang tidak mendukung tujuan belajar.

**Alasan:** Pengguna utama adalah siswa kelas X yang masih membangun pemahaman dasar dan perlu petunjuk prosedural, bukan dashboard yang padat informasi.

### Prinsip 2 — Presisi teknis lebih penting daripada dekorasi

Visual komponen dan susunan kabel harus membantu pemahaman yang benar. Tampilan yang menarik tidak boleh mengaburkan urutan T568B, membedakan warna hanya lewat persepsi visual, atau menyamakan hasil simulasi dengan hasil uji kabel fisik.

**Aturan penerapan**
- Tampilkan nomor pin 1–8 dan nama warna secara eksplisit.
- Warna putih bergaris harus dibedakan dari warna solid melalui pola/garis dan label, bukan hanya nilai warna.
- Umpan balik menyebutkan pin yang benar atau perlu diperbaiki.
- Pada simulasi dan panduan, selalu bedakan “susunan simulasi benar” dari “kabel fisik sudah berfungsi”.
- Ilustrasi alat harus diberi nama dan fungsi.

**Alasan:** Ketepatan susunan warna dan pemahaman prosedur merupakan inti pembelajaran. Ambiguitas visual dapat mengajarkan konsep yang salah.

### Prinsip 3 — Aksesibel, responsif, dan dapat dipulihkan

Semua tugas inti harus bisa diselesaikan dengan mouse, layar sentuh, atau keyboard. Kesalahan pengguna harus bisa diperbaiki tanpa memulai dari awal, kecuali pengguna sengaja memilih reset.

**Aturan penerapan**
- Sediakan interaksi alternatif untuk drag-and-drop: pilih kabel, lalu pilih slot.
- Semua kontrol memiliki label, status fokus, dan area sentuh yang memadai.
- Berikan pesan kesalahan yang menjelaskan masalah dan langkah perbaikan.
- Jangan mengandalkan hover, warna, atau ikon tanpa label sebagai satu-satunya petunjuk.
- Reset simulasi meminta konfirmasi jika pengguna telah mengisi beberapa slot.

**Alasan:** Website digunakan lintas perangkat dan oleh pemula dengan tingkat kenyamanan digital yang beragam.

---

## 2. Visual direction

### 2.1 Mood dan karakter

**Kata kunci:** jelas, teknis, ramah, terarah, modern, praktis, ringan.

Antarmuka harus terasa seperti **ruang praktik digital yang tertata**, bukan aplikasi perusahaan yang dingin dan bukan permainan anak-anak. Gunakan permukaan putih, latar abu-biru lembut, aksen biru kuat, ilustrasi alat yang mudah dikenali, serta kartu dengan radius sedang.

### 2.2 Cara mengadaptasi referensi

| Unsur referensi | Keputusan | Penerapan pada produk |
|---|---|---|
| Panel putih besar pada dashboard aset | Adopsi | Konten utama berada di permukaan putih dengan ruang napas yang cukup. |
| Sidebar gelap dan ikon navigasi | Adaptasi | Navigasi desktop memakai sidebar navy; setiap item memiliki ikon dan teks, bukan ikon saja. |
| Kartu berwarna pada dashboard kursus | Adopsi terbatas | Warna lembut membedakan kelompok materi atau status, bukan setiap elemen secara acak. |
| Aksen biru kuat | Adopsi | Tombol utama, progres, tautan aktif, dan fokus interaktif. |
| Grafik, tabel aset, widget promosi | Hindari | Tidak relevan dengan tujuan belajar kabel straight. |
| Banyak kartu dan panel sekaligus | Hindari | Konten disusun menurut alur belajar, bukan memenuhi layar dengan widget. |
| Ilustrasi komponen yang realistis | Prioritas | Konektor RJ45, kabel, tang crimping, dan LAN tester perlu mudah dikenali. |

### 2.3 Tata letak dan bentuk

- **Desktop:** sidebar tetap di kiri; area konten memiliki lebar terkontrol dan tidak membentang terlalu lebar.
- **Tablet:** navigasi menyusut menjadi sidebar ringkas atau drawer; konten utama tetap menjadi fokus.
- **Mobile:** navigasi menjadi menu drawer dan indikator bagian aktif yang ringkas; tombol utama mudah dijangkau.
- **Kartu:** radius 16 px sebagai default; panel simulasi dapat memakai radius 20 px.
- **Ikon:** satu gaya garis yang konsisten; gunakan label teks untuk navigasi.
- **Ilustrasi:** utamakan SVG atau aset tajam dengan latar bersih. Jangan memakai foto stok dekoratif yang tidak menunjukkan bagian komponen secara jelas.
- **Gerakan:** animasi singkat hanya untuk perpindahan kabel, status jawaban, dan progres. Hormati preferensi `prefers-reduced-motion`.

### 2.4 Yang harus dihindari

- Gradien mencolok pada setiap kartu.
- Warna neon, efek kaca (*glassmorphism*) yang menurunkan kontras, dan bayangan berat.
- Teks abu-abu sangat pucat seperti pada sebagian elemen referensi kursus.
- Ikon tanpa teks untuk menu utama.
- Simulasi yang hanya mengandalkan drag-and-drop.
- Konektor terlalu kecil, miring, atau penuh efek perspektif sehingga nomor pin sulit dibaca.
- Label “berhasil” yang menyiratkan kabel fisik telah lolos pengujian.
- Menampilkan fitur yang belum ada, seperti login, dashboard guru, leaderboard, atau sertifikat.

---

## 3. Design tokens

Token berikut adalah baseline desain dan perlu diterapkan konsisten melalui variabel CSS/Tailwind theme. Warna status dan warna kabel memiliki fungsi semantik yang berbeda.

### 3.1 Palet warna UI

| Token | Hex | Penggunaan |
|---|---|---|
| `color-brand-700` | `#1D4ED8` | Biru utama untuk tombol dan tautan aktif |
| `color-brand-600` | `#2563EB` | Hover tombol utama dan aksen interaktif |
| `color-brand-100` | `#DBEAFE` | Latar pilihan aktif atau sorotan lembut |
| `color-brand-50` | `#EFF6FF` | Latar panel informasi biru |
| `color-ink-950` | `#111827` | Teks utama dan judul |
| `color-ink-700` | `#374151` | Teks isi sekunder |
| `color-ink-500` | `#6B7280` | Teks bantuan dan metadata yang tetap terbaca |
| `color-border` | `#E5E7EB` | Border kartu, input, dan pemisah |
| `color-surface` | `#FFFFFF` | Kartu dan panel konten |
| `color-canvas` | `#F3F6FB` | Latar halaman abu-biru muda |
| `color-sidebar` | `#111827` | Sidebar desktop |
| `color-sidebar-text` | `#D1D5DB` | Teks navigasi sidebar |
| `color-success-700` | `#15803D` | Status benar/lulus |
| `color-success-50` | `#F0FDF4` | Latar pesan sukses |
| `color-warning-800` | `#92400E` | Peringatan keselamatan atau perhatian |
| `color-warning-50` | `#FFFBEB` | Latar pesan peringatan |
| `color-danger-700` | `#B91C1C` | Kesalahan dan validasi gagal |
| `color-danger-50` | `#FEF2F2` | Latar pesan kesalahan |
| `color-info-800` | `#075985` | Informasi teknis |
| `color-info-50` | `#F0F9FF` | Latar informasi teknis |

**Aturan kontras:** teks normal harus memenuhi WCAG AA, minimal 4.5:1 terhadap latarnya. Teks besar minimal 3:1. Jangan memakai `color-ink-500` untuk teks kecil di atas latar berwarna tanpa menguji kontras aktual. Status harus dibedakan melalui ikon dan teks, bukan warna saja.

### 3.2 Warna kabel T568B

Warna berikut adalah token ilustrasi materi dan bukan warna dekoratif UI. Label tekstual wajib tampil pada daftar kabel dan hasil penilaian.

| Token | Label | Tampilan yang direncanakan |
|---|---|---|
| `wire-white-orange` | Putih-oranye | Dasar putih dengan garis oranye |
| `wire-orange` | Oranye | Oranye solid |
| `wire-white-green` | Putih-hijau | Dasar putih dengan garis hijau |
| `wire-blue` | Biru | Biru solid |
| `wire-white-blue` | Putih-biru | Dasar putih dengan garis biru |
| `wire-green` | Hijau | Hijau solid |
| `wire-white-brown` | Putih-cokelat | Dasar putih dengan garis cokelat |
| `wire-brown` | Cokelat | Cokelat solid |

**Urutan pin T568B yang harus ditampilkan:**  
1. Putih-oranye · 2. Oranye · 3. Putih-hijau · 4. Biru · 5. Putih-biru · 6. Hijau · 7. Putih-cokelat · 8. Cokelat.

Warna kabel harus direpresentasikan dengan pola yang jelas. Untuk kabel putih bergaris, garis harus cukup tebal untuk terlihat pada layar kecil; nama warna tetap tersedia sebagai teks/label yang dapat dibaca pembaca layar.

### 3.3 Tipografi

**Pilihan font: `Inter` dengan fallback `Arial, sans-serif`.**

Alasan:
- Bentuk huruf sans-serif modern dan netral cocok untuk produk pembelajaran teknis.
- Keterbacaan baik untuk instruksi pendek, label pin, dan teks antarmuka.
- Angka serta karakter yang jelas membantu membedakan nomor pin, skor, dan langkah.
- Tidak terlalu dekoratif sehingga visual komponen tetap menjadi fokus.

Jika font eksternal gagal dimuat, layout harus tetap berfungsi menggunakan fallback sistem. Jangan memakai font display atau font tulisan tangan untuk isi materi.

| Token | Ukuran / line-height | Berat | Penggunaan |
|---|---|---|---|
| `text-display` | 36 / 44 px | 700 | Judul hero desktop |
| `text-h1` | 30 / 38 px | 700 | Judul halaman |
| `text-h2` | 24 / 32 px | 700 | Judul bagian utama |
| `text-h3` | 20 / 28 px | 600 | Judul kartu/kelompok |
| `text-h4` | 18 / 26 px | 600 | Judul komponen |
| `text-body-lg` | 18 / 28 px | 400 | Pengantar atau instruksi penting |
| `text-body` | 16 / 24 px | 400 | Isi materi utama |
| `text-body-sm` | 14 / 20 px | 400 | Deskripsi pendukung |
| `text-label` | 14 / 20 px | 600 | Label input dan status |
| `text-caption` | 12 / 16 px | 500 | Metadata nonkritis |

Ukuran isi utama tidak boleh turun di bawah 16 px pada mobile untuk paragraf penting. Label pin boleh lebih ringkas hanya jika tetap terbaca dan tidak menjadi satu-satunya cara mengenali warna.

### 3.4 Skala spacing

Gunakan basis 4 px dengan skala utama berikut.

| Token | Nilai | Penggunaan |
|---|---:|---|
| `space-1` | 4 px | Jarak ikon dan teks yang sangat dekat |
| `space-2` | 8 px | Jarak elemen dalam kontrol |
| `space-3` | 12 px | Jarak label dan deskripsi |
| `space-4` | 16 px | Padding kontrol dan jarak elemen terkait |
| `space-5` | 20 px | Jarak antarbagian kecil |
| `space-6` | 24 px | Padding kartu standar |
| `space-8` | 32 px | Jarak antarbagian konten |
| `space-10` | 40 px | Jarak bagian besar |
| `space-12` | 48 px | Pemisah bagian pada desktop |
| `space-16` | 64 px | Ruang hero/section besar |

**Aturan:** gunakan jarak lebih rapat untuk elemen yang saling berkaitan dan jarak lebih lebar untuk memisahkan kelompok konten. Jangan menambahkan padding besar pada layar mobile hingga instruksi atau simulasi tenggelam di bawah lipatan layar.

### 3.5 Radius, border, dan shadow

| Token | Nilai | Penggunaan |
|---|---|---|
| `radius-sm` | 8 px | Badge, chip, elemen kecil |
| `radius-md` | 12 px | Input, tombol, gambar kecil |
| `radius-lg` | 16 px | Kartu materi dan panel |
| `radius-xl` | 20 px | Panel simulasi dan hero |
| `radius-pill` | 999 px | Badge status dan indikator berbentuk kapsul |
| `border-width` | 1 px | Border default |
| `shadow-card` | `0 2px 8px rgba(17, 24, 39, 0.05)` | Kartu normal |
| `shadow-raised` | `0 8px 24px rgba(17, 24, 39, 0.08)` | Menu mengambang/drawer |
| `shadow-focus` | `0 0 0 3px rgba(37, 99, 235, 0.28)` | Ring fokus visual |

Bayangan harus halus dan tidak menjadi cara utama membedakan komponen. Border dan kontras permukaan tetap harus cukup jelas.

### 3.6 Ukuran komponen dan grid

- Tinggi minimum tombol/input: **44 px**; target sentuh yang sering digunakan idealnya 48 px.
- Lebar konten maksimum desktop: **1200 px**.
- Sidebar desktop: **240 px**.
- Jarak kolom desktop: **24 px**.
- Grid kartu materi desktop: 3 kolom jika konten cukup; tablet 2 kolom; mobile 1 kolom.
- Lebar tombol utama pada mobile: penuh jika berada pada bagian bawah atau area tindakan utama.
- Konten simulasi memiliki lebar minimum yang menjaga delapan pin tetap terbaca; jika tidak cukup, gunakan area gulir horizontal terkontrol hanya pada kanvas simulasi, bukan pada seluruh halaman.

---

## 4. Screen inventory

MVP dapat dibangun sebagai website satu halaman dengan section berjangkar atau sebagai beberapa route. Dari sudut desain, setiap item di bawah diperlakukan sebagai layar/tujuan yang jelas dan dapat ditautkan langsung. Keputusan teknis route belum mengubah struktur pengalaman ini.

| ID | Screen / section | Tujuan pengguna | Prioritas | Aksi utama |
|---|---|---|---|---|
| S01 | Landing page | Memahami produk dan memulai belajar | P0 | **Mulai Belajar** |
| S02 | Tujuan pembelajaran | Mengetahui kompetensi yang akan dicapai | P0 | **Lihat Materi** |
| S03 | Materi dasar kabel UTP Cat 5e | Memahami pengertian, fungsi, dan karakteristik kabel | P0 | **Lanjut ke Alat & Bahan** |
| S04 | Pengenalan alat dan bahan | Mengenali kabel UTP, RJ45, tang crimping, LAN tester | P0 | **Periksa Kesiapan** |
| S05 | Checklist alat dan bahan | Mengonfirmasi kesiapan alat/bahan secara mandiri | P0 | **Lanjutkan** |
| S06 | Keselamatan kerja | Mengetahui tindakan pencegahan sebelum praktik | P0 | **Pelajari T568B** |
| S07 | Materi standar T568B | Memahami urutan pin dan warna yang benar | P0 | **Coba Simulasi** |
| S08 | Simulasi penyusunan kabel | Berlatih menempatkan delapan warna pada delapan slot | P0 | **Periksa Jawaban** |
| S09 | Hasil/umpan balik simulasi | Memahami posisi benar dan salah serta memperbaiki jawaban | P0 | **Perbaiki Susunan** atau **Lanjut ke Panduan** |
| S10 | Panduan pembuatan kabel | Mengikuti prosedur pembuatan secara berurutan | P0 | **Langkah Berikutnya** |
| S11 | Panduan pengujian LAN tester | Memahami cara dan tujuan memeriksa kabel fisik | P0 | **Mulai Evaluasi** |
| S12 | Evaluasi akhir | Menjawab soal untuk mengukur pemahaman materi | P0 | **Kirim Jawaban** |
| S13 | Hasil evaluasi | Melihat skor, status kelulusan, dan materi yang perlu ditinjau | P0 | **Ulangi Evaluasi** atau **Selesai Belajar** |
| S14 | Ringkasan/progres sesi | Mengetahui bagian yang selesai selama sesi aktif | P1, mendukung MVP | **Lanjutkan Belajar** |

**Catatan ruang lingkup:** tidak ada layar login, profil pengguna, dashboard guru, leaderboard, sertifikat, atau riwayat server pada MVP.

---

## 5. User flow — journey utama

### Journey A — Siswa baru memulai pembelajaran

1. Siswa membuka **Landing page**.
2. Memahami bahwa website membahas pembuatan kabel straight standar T568B.
3. Memilih **Mulai Belajar**.
4. Masuk ke **Tujuan pembelajaran**.
5. Membaca kompetensi yang akan dicapai.
6. Memilih **Lihat Materi**.
7. Mempelajari materi dasar kabel UTP Cat 5e.
8. Berpindah ke pengenalan alat dan bahan.
9. Menandai checklist kesiapan jika ingin mempersiapkan praktik fisik.
10. Membaca keselamatan kerja dan materi T568B.
11. Memulai simulasi penyusunan warna.
12. Memeriksa jawaban dan memperbaiki kesalahan.
13. Membaca panduan pembuatan serta pengujian kabel.
14. Mengerjakan evaluasi akhir.
15. Melihat hasil dan rekomendasi untuk mengulang materi yang belum dikuasai.

**Aturan:** jangan mengunci siswa dari materi berikutnya hanya karena checklist belum lengkap. PRD menyatakan siswa tetap dapat melanjutkan, kecuali ada keputusan produk baru yang menetapkan sebaliknya.

### Journey B — Siswa berlatih menyusun warna T568B

1. Siswa membuka materi T568B.
2. Mempelajari susunan pin 1–8 dengan label warna.
3. Memilih **Coba Simulasi**.
4. Sistem menampilkan delapan kabel dan delapan slot konektor.
5. Siswa memindahkan kabel dengan drag-and-drop, atau memilih kabel lalu memilih slot.
6. Jika slot sudah terisi, sistem menerapkan aturan yang konsisten: kabel yang dipindahkan bertukar tempat dengan isi slot tujuan atau penempatan ditolak dengan pesan jelas. **Keputusan desain:** gunakan pertukaran posisi (*swap*) agar siswa tidak kehilangan kabel yang sudah ditempatkan.
7. Siswa memilih **Periksa Jawaban**.
8. Jika ada slot kosong, sistem memberi pesan bahwa susunan belum lengkap dan menandai slot yang belum terisi.
9. Jika ada posisi salah, sistem menampilkan pin yang perlu diperbaiki dan status **Belum tepat**.
10. Siswa memperbaiki posisi yang salah dan mengirim jawaban kembali.
11. Jika delapan posisi benar, sistem menampilkan **Susunan simulasi benar**.
12. Sistem mengingatkan bahwa hasil ini hanya memverifikasi susunan dalam simulasi, bukan fungsi kabel fisik.

### Journey C — Siswa mempersiapkan praktik fisik

1. Siswa membuka pengenalan alat dan bahan.
2. Membaca nama, visual, fungsi, dan kapan setiap objek digunakan.
3. Membuka checklist alat dan bahan.
4. Menandai kabel UTP Cat 5e, konektor RJ45, tang crimping, dan LAN tester sebagai tersedia.
5. Sistem memperbarui jumlah item yang ditandai, misalnya “3 dari 4 diperiksa”.
6. Jika lengkap, tampilkan status **Checklist selesai berdasarkan konfirmasi Anda**.
7. Jika belum lengkap, tampilkan item yang belum ditandai tanpa memblokir materi.
8. Siswa membaca keselamatan kerja.
9. Mengikuti panduan pembuatan kabel langkah demi langkah.
10. Membaca panduan pengujian menggunakan LAN tester.
11. Sistem menegaskan bahwa hasil nyata perlu diperiksa dengan perangkat fisik.

### Journey D — Siswa mengerjakan evaluasi akhir

1. Siswa memilih **Mulai Evaluasi** setelah mempelajari materi.
2. Sistem menampilkan petunjuk pengerjaan dan jumlah soal jika jumlahnya telah ditetapkan.
3. Siswa menjawab soal tentang kabel UTP, alat dan bahan, keselamatan, T568B, prosedur, dan pengujian.
4. Siswa dapat meninjau soal yang belum dijawab.
5. Saat mengirim, sistem memvalidasi jawaban kosong sesuai aturan yang ditetapkan. **Default desain:** jangan mengirim diam-diam; tampilkan jumlah soal belum dijawab dan pilihan untuk kembali atau tetap mengirim jika aturan evaluasi mengizinkan.
6. Sistem menghitung skor menggunakan kunci jawaban.
7. Sistem menampilkan hasil, status lulus/belum lulus, dan arahan belajar ulang.
8. Jika belum lulus, siswa dapat membuka materi terkait atau mengulang evaluasi sesuai aturan percobaan yang disepakati.

**Keputusan terbuka sebelum implementasi:** jumlah soal, format soal, bobot skor, ambang kelulusan, dan batas percobaan belum ditentukan dalam PRD. Desain dapat menyiapkan slot UI, tetapi nilai dan status final tidak boleh dikunci sebelum aturan penilaian disetujui.

### Journey E — Siswa menggunakan website melalui ponsel

1. Siswa membuka landing page pada layar kecil.
2. Memilih **Mulai Belajar** dengan tombol yang mudah disentuh.
3. Mengakses menu melalui tombol navigasi yang memiliki label aksesibel.
4. Membaca materi dalam satu kolom.
5. Memeriksa ilustrasi alat tanpa teks tertutup.
6. Pada simulasi, memilih kabel lalu memilih slot sebagai alternatif drag-and-drop.
7. Memeriksa jawaban dan membaca umpan balik.
8. Melanjutkan panduan dan evaluasi tanpa perlu hover atau gestur presisi.

---

## 6. Layout per screen

### Pola shell global

**Desktop**
- Sidebar kiri berwarna navy, lebar 240 px.
- Logo/nama produk di bagian atas.
- Item navigasi dengan ikon + label: Beranda, Tujuan, Materi, Alat & Bahan, T568B & Simulasi, Panduan Praktik, Evaluasi.
- Item aktif memiliki latar biru yang lembut, teks putih, dan penanda aktif yang jelas.
- Area konten berada di kanan dengan latar `color-canvas`.
- Header konten menampilkan judul halaman, deskripsi singkat, dan indikator progres sesi jika tersedia.
- Konten berada di dalam lebar maksimum 1200 px.

**Mobile**
- Header ringkas dengan logo/nama produk dan tombol menu.
- Drawer berisi menu bernama jelas.
- Judul dan deskripsi berada di awal section.
- Navigasi “Sebelumnya” dan “Berikutnya” ditempatkan konsisten di akhir materi.
- Jangan menggunakan bottom navigation yang memuat terlalu banyak tujuan.

### S01 — Landing page

**Hierarki**
1. Header: logo, tautan “Alur Belajar”, “Materi”, “Simulasi”.
2. Hero: judul **“Belajar Membuat Kabel Straight”**, penjelasan singkat, badge “Standar T568B”.
3. Ilustrasi utama: konektor RJ45 dengan delapan kabel berwarna yang disusun jelas.
4. Tombol utama **Mulai Belajar**; tombol sekunder **Lihat Alur Belajar**.
5. Ringkasan tiga tahap: Pahami alat & standar → Latihan susunan warna → Pelajari praktik & evaluasi.
6. Footer ringkas berisi nama produk dan penjelasan bahwa simulasi bukan pengganti uji fisik.

**Primary action:** Mulai Belajar.  
**Komponen:** `SiteHeader`, `Hero`, `PrimaryButton`, `LearningStageCard`, `IllustrationPanel`, `SiteFooter`.

**Hindari:** grafik, angka pencapaian palsu, testimoni fiktif, dan klaim peningkatan hasil belajar yang belum diuji.

### S02 — Tujuan pembelajaran

**Hierarki**
1. Judul dan pengantar: “Setelah menyelesaikan pembelajaran ini…”.
2. Daftar tujuan dalam kartu ringkas.
3. Tujuan mencakup kabel UTP, alat dan bahan, keselamatan, T568B, prosedur, dan pengujian.
4. CTA **Lihat Materi Dasar**.

**Primary action:** Lihat Materi Dasar.  
**Komponen:** `PageHeader`, `ObjectiveCard`, `SectionNavigation`.

### S03 — Materi dasar kabel UTP Cat 5e

**Hierarki**
1. Judul dan ringkasan konsep.
2. Ilustrasi kabel UTP.
3. Bagian pengertian, fungsi, dan karakteristik.
4. Kotak “Ingat” untuk konsep inti, bukan angka teknis yang belum diverifikasi.
5. Navigasi sebelumnya/berikutnya.

**Primary action:** Lanjut ke Alat & Bahan.  
**Komponen:** `PageHeader`, `ArticleSection`, `TechnicalIllustration`, `KeyTakeaway`, `StepNavigation`.

### S04 — Pengenalan alat dan bahan

**Hierarki**
1. Judul dan instruksi.
2. Grid kartu objek: kabel UTP Cat 5e, konektor RJ45, tang crimping, LAN tester.
3. Setiap kartu berisi visual, nama, jenis (bahan/alat), fungsi, dan kapan digunakan.
4. CTA **Periksa Kesiapan Alat & Bahan**.

**Primary action:** Periksa Kesiapan Alat & Bahan.  
**Komponen:** `EquipmentCard`, `CategoryBadge`, `SectionNavigation`.

**Responsive:** 4 kolom hanya pada layar lebar; 2 kolom pada tablet; 1 kolom pada mobile.

### S05 — Checklist alat dan bahan

**Hierarki**
1. Judul: “Pastikan alat dan bahan tersedia”.
2. Penjelasan bahwa checklist merupakan konfirmasi pengguna, bukan deteksi otomatis.
3. Daftar empat item dengan checkbox besar, nama, dan ikon/thumbnail.
4. Ringkasan “x dari 4 item diperiksa”.
5. Status checklist dan CTA **Lanjutkan ke Keselamatan Kerja**.

**Primary action:** Lanjutkan.  
**Komponen:** `ChecklistItem`, `ProgressBar`, `InlineNotice`, `PrimaryButton`.

**Status lengkap:** “Checklist selesai berdasarkan konfirmasi Anda.”  
**Status belum lengkap:** “Masih ada item yang belum ditandai. Anda tetap dapat melanjutkan materi.”

### S06 — Keselamatan kerja

**Hierarki**
1. Judul dan pengantar singkat.
2. Peringatan utama yang terlihat tanpa harus menggulir jauh.
3. Kartu praktik aman terkait tang crimping serta pemotongan/pengupasan kabel.
4. Checklist ringkas “Sebelum mulai praktik”.
5. CTA **Pelajari Urutan T568B**.

**Primary action:** Pelajari Urutan T568B.  
**Komponen:** `SafetyNotice`, `SafetyRuleCard`, `ChecklistItem`, `StepNavigation`.

**Visual:** gunakan ikon peringatan dan label teks; jangan mengandalkan warna kuning/merah saja.

### S07 — Materi standar T568B

**Hierarki**
1. Judul: “Urutan Warna Kabel T568B”.
2. Penjelasan bahwa kabel straight menggunakan susunan yang sama pada kedua ujung.
3. Diagram konektor dengan nomor pin 1–8.
4. Daftar urutan warna dalam tabel/strip bernomor.
5. Catatan khusus untuk kabel putih bergaris versus kabel solid.
6. CTA **Coba Simulasi**.

**Primary action:** Coba Simulasi.  
**Komponen:** `RJ45PinDiagram`, `WireLegend`, `TechnicalCallout`, `PrimaryButton`.

**Keputusan:** diagram utama menampilkan konektor dengan orientasi yang diberi label jelas, termasuk sisi pandang dan nomor pin. Jangan tampilkan gambar konektor tanpa menjelaskan orientasinya karena pembalikan orientasi dapat membingungkan siswa.

### S08 — Simulasi penyusunan kabel

**Layout desktop**
- Header: judul, instruksi singkat, indikator “8 posisi”.
- Panel utama dua area:
  - **Bank kabel:** delapan kabel yang dapat dipilih/di-drag, masing-masing dengan nama warna.
  - **Konektor RJ45:** delapan slot bernomor dengan ruang visual yang cukup.
- Panel petunjuk di samping atau di bawah: urutan T568B dapat dibuka sebagai referensi; jangan selalu memenuhi area utama.
- Bar tindakan yang jelas: **Periksa Jawaban** (utama), **Atur Ulang** (sekunder).
- Area hasil umpan balik muncul di bawah panel simulasi, bukan sebagai modal yang menutup konektor.

**Layout mobile**
- Instruksi dan indikator jumlah posisi.
- Bank kabel ditampilkan sebagai daftar/chip besar yang dapat disentuh.
- Kanvas konektor dapat digeser secara horizontal bila benar-benar diperlukan; tombol dan pesan hasil tetap berada di luar area geser.
- Mode alternatif: pilih satu kabel, lalu pilih slot tujuan.
- Tombol tindakan lebar penuh.

**Primary action:** Periksa Jawaban.  
**Komponen:** `WireTile`, `RJ45Slot`, `RJ45Simulator`, `SimulationToolbar`, `FeedbackPanel`, `ResetDialog`, `AccessibleMoveControls`.

**Perilaku wajib**
- Satu kabel hanya boleh berada di satu slot pada satu waktu.
- Kabel yang dipindah ke slot terisi ditukar posisinya (*swap*) secara konsisten.
- Slot kosong ditandai dengan label “Kosong”, bukan hanya border putus-putus.
- Tombol periksa aktif setelah pengguna melakukan tindakan; saat diperiksa dengan slot kosong, beri umpan balik yang jelas.
- Reset mengembalikan seluruh kabel ke bank awal.
- Sistem menilai berdasarkan identitas data kabel, bukan membaca warna piksel gambar.
- Sukses simulasi tidak boleh disebut “kabel berfungsi”.

### S09 — Hasil dan umpan balik simulasi

**Hierarki**
1. Banner status: “Susunan simulasi benar” atau “Masih ada posisi yang perlu diperbaiki”.
2. Ringkasan jumlah posisi benar dari delapan, jika skor parsial digunakan.
3. Diagram konektor tetap terlihat dengan pin benar/salah ditandai.
4. Daftar perbaikan, misalnya “Pin 3: posisi saat ini …; periksa urutan T568B”.
5. CTA **Perbaiki Susunan** dan CTA sekunder **Lanjut ke Panduan Praktik**.
6. Catatan tetap: simulasi hanya memeriksa urutan yang disusun di website.

**Primary action:** Perbaiki Susunan bila salah; Lanjut ke Panduan bila benar.  
**Komponen:** `FeedbackPanel`, `PinStatus`, `InlineNotice`, `PrimaryButton`.

**Aturan konten:** jangan menyebut nilai sebagai nilai kelulusan kecuali ambang kelulusan simulasi telah ditentukan.

### S10 — Panduan pembuatan kabel straight

**Hierarki**
1. Judul dan indikator langkah, misalnya “Langkah 4 dari 11”.
2. Area visual langkah yang besar.
3. Nama langkah dan instruksi prosedural dalam bahasa sederhana.
4. Peringatan keselamatan kontekstual jika diperlukan.
5. Kontrol **Sebelumnya** dan **Langkah Berikutnya**.
6. Ringkasan urutan langkah yang dapat dibuka untuk navigasi cepat.

**Urutan yang direncanakan:** periksa alat dan bahan; keselamatan; potong kabel; kupas selubung; pisahkan/luruskan pasangan; susun T568B; rapikan/potong ujung; masukkan ke RJ45; crimping; ulangi di ujung kedua dengan standar sama; uji menggunakan LAN tester.

**Primary action:** Langkah Berikutnya.  
**Komponen:** `ProcedureStep`, `StepProgress`, `SafetyNotice`, `StepNavigation`, `StepOutline`.

**Keputusan:** satu langkah aktif per tampilan, bukan seluruh 11 langkah dalam satu blok panjang. Siswa tetap dapat membuka langkah lain melalui outline agar bisa mengulang bagian tertentu.

### S11 — Panduan pengujian LAN tester

**Hierarki**
1. Judul: “Memeriksa Kabel dengan LAN Tester”.
2. Ilustrasi perangkat dan kedua ujung kabel.
3. Tujuan pengujian.
4. Langkah penggunaan.
5. Penjelasan membaca indikator sesuai model perangkat; jangan mengasumsikan semua tester identik.
6. Peringatan bahwa pengujian fisik tetap diperlukan.
7. CTA **Mulai Evaluasi**.

**Primary action:** Mulai Evaluasi.  
**Komponen:** `TechnicalIllustration`, `ProcedureStep`, `InfoNotice`, `PrimaryButton`.

### S12 — Evaluasi akhir

**Hierarki**
1. Judul, instruksi, dan informasi jumlah soal jika sudah ditetapkan.
2. Indikator progres pengerjaan.
3. Satu soal per kartu dengan pilihan jawaban yang jelas.
4. Navigasi soal sebelumnya/berikutnya atau daftar nomor soal, jika jumlah soal mendukungnya.
5. Tombol **Kirim Jawaban**.
6. Peringatan sebelum kirim jika ada jawaban kosong.

**Primary action:** Kirim Jawaban.  
**Komponen:** `QuizQuestion`, `AnswerOption`, `QuizProgress`, `QuestionNavigator`, `SubmitConfirmation`.

**Keputusan:** gunakan satu kolom dan satu soal per kartu untuk mengurangi beban visual. Jenis pertanyaan final (pilihan ganda atau lainnya), jumlah soal, dan aturan skor masih menunggu keputusan produk.

### S13 — Hasil evaluasi

**Hierarki**
1. Judul “Hasil Evaluasi”.
2. Skor dan status lulus/belum lulus berdasarkan ambang yang telah disepakati.
3. Penjelasan singkat tentang hasil, tanpa klaim peningkatan belajar yang belum dibuktikan.
4. Daftar materi untuk ditinjau kembali bila hasil belum memenuhi ambang.
5. CTA **Ulangi Evaluasi** dan/atau **Kembali ke Materi**.
6. Catatan bahwa hasil hanya berlaku pada sesi ini jika tidak ada penyimpanan permanen.

**Primary action:** Kembali ke Materi jika belum lulus; Selesai Belajar jika lulus.  
**Komponen:** `ResultSummary`, `ScoreDisplay`, `ReviewTopicList`, `PrimaryButton`, `SecondaryButton`.

### S14 — Ringkasan/progres sesi

**Hierarki**
1. Ringkasan bagian yang sudah dikunjungi/diselesaikan.
2. Indikator progres sesi.
3. Tautan untuk kembali ke materi, simulasi, panduan, atau evaluasi.
4. Catatan jika progres hanya berlaku selama sesi browser aktif.

**Primary action:** Lanjutkan Belajar.  
**Komponen:** `SessionProgress`, `ModuleStatusItem`, `SectionNavigation`.

**Catatan:** layar ini bersifat ringkasan ringan, bukan dashboard penuh. Jangan membuat grafik atau analitik yang tidak didukung data.

---

## 7. Component library

Setiap komponen harus punya aturan visual dan perilaku konsisten. State visual tidak boleh hanya dibedakan melalui warna.

| Komponen | Fungsi | Variant | State penting |
|---|---|---|---|
| `SiteHeader` | Identitas dan akses navigasi | Desktop, mobile | Normal, menu terbuka |
| `SidebarNavigation` | Navigasi utama desktop | Expanded, compact | Default, aktif, hover, focus |
| `MobileNavigationDrawer` | Navigasi pada mobile | Full-height drawer | Terbuka, tertutup, focus-trapped |
| `PageHeader` | Judul dan deskripsi section | Dengan/tanpa progres | Default |
| `PrimaryButton` | Tindakan utama | Solid brand, full-width | Default, hover, focus, active, disabled, loading |
| `SecondaryButton` | Tindakan pendukung | Outline, subtle | Default, hover, focus, disabled |
| `TextLink` | Navigasi kontekstual | Inline, standalone | Default, hover, focus, visited bila relevan |
| `LearningStageCard` | Ringkasan alur belajar | Numbered, icon-led | Default, aktif, selesai |
| `ObjectiveCard` | Tujuan pembelajaran | Standard | Default |
| `EquipmentCard` | Informasi alat/bahan | Tool, material | Default, focus |
| `CategoryBadge` | Menandai alat atau bahan | Alat, bahan, informasi | Default |
| `ChecklistItem` | Checklist kesiapan | Dengan thumbnail/tanpa thumbnail | Unchecked, checked, focus, disabled |
| `ProgressBar` | Progres sesi/langkah | Thin, labeled | 0%, intermediate, complete |
| `SafetyNotice` | Peringatan keselamatan | Caution, important | Default, dismissed hanya jika aman |
| `TechnicalCallout` | Catatan teknis | Info, tip, warning | Default |
| `ArticleSection` | Isi materi | Text + visual, text-only | Default |
| `TechnicalIllustration` | Visual alat/prosedur | Inline, full-width | Loaded, loading, fallback/error |
| `WireTile` | Kabel yang dapat dipindah | Solid, white-striped | Available, selected, dragging, placed, disabled |
| `RJ45PinDiagram` | Referensi susunan pin | Read-only | Default, pin disorot |
| `RJ45Slot` | Target posisi kabel | Empty, occupied | Empty, occupied, selected, correct, incorrect, focus |
| `RJ45Simulator` | Wadah interaksi simulasi | Desktop, mobile | Ready, incomplete, checking, correct, incorrect, error |
| `AccessibleMoveControls` | Alternatif drag-and-drop | Select cable → select slot | No selection, cable selected, slot selected |
| `SimulationToolbar` | Kontrol simulasi | Desktop, mobile | Default, checking, disabled |
| `FeedbackPanel` | Hasil penilaian | Success, correction, incomplete, error | Visible, updated |
| `PinStatus` | Status tiap pin | Correct, incorrect, empty | Default, announced |
| `ResetDialog` | Konfirmasi reset | Modal/dialog | Open, cancel, confirm |
| `ProcedureStep` | Langkah prosedural | Standard, safety-critical | Current, visited, unavailable bila berurutan |
| `StepProgress` | Posisi langkah | Numbered, bar | Current, completed |
| `StepNavigation` | Sebelumnya/berikutnya | Inline, sticky mobile | Enabled, disabled |
| `QuizQuestion` | Kontainer pertanyaan | Single-choice, format lain bila disepakati | Unanswered, answered, flagged |
| `AnswerOption` | Pilihan jawaban | Radio, checkbox jika diperlukan | Default, selected, focus, disabled |
| `QuizProgress` | Progres evaluasi | Bar + teks | Started, intermediate, complete |
| `QuestionNavigator` | Navigasi antarsoal | Numbered grid/list | Unanswered, answered, current |
| `SubmitConfirmation` | Konfirmasi kirim evaluasi | Inline/dialog | Open, cancel, confirm |
| `ResultSummary` | Ringkasan skor dan status | Passed, not passed | Default |
| `ReviewTopicList` | Materi yang disarankan untuk diulang | Linked list | Default, focus |
| `InlineNotice` | Pesan sistem | Info, success, warning, error | Visible, announced |
| `EmptyState` | Menjelaskan keadaan tanpa data | Generic, section-specific | Default |
| `LoadingState` | Menjelaskan proses memuat | Skeleton, spinner + text | Loading |
| `ErrorState` | Menjelaskan kegagalan | Recoverable, blocking | Error, retry |
| `SiteFooter` | Informasi penutup | Standard | Default |

### Aturan state komponen

- **Hover** hanya pelengkap; semua affordance tetap terlihat tanpa hover.
- **Focus** memakai ring yang kontras dan tidak terpotong oleh `overflow: hidden`.
- **Disabled** harus terlihat berbeda dan memiliki alasan jika pengguna mungkin bingung.
- **Loading** mengunci pengiriman ganda bila proses sedang berjalan dan menyampaikan status melalui teks.
- **Success/error** memakai ikon dan teks selain warna.
- **Selected** pada kabel atau jawaban harus jelas tanpa mengandalkan perubahan warna kecil.
- Komponen interaktif harus memiliki area klik/sentuh yang nyaman dan tidak menumpuk dengan kontrol lain.

---

## 8. State: empty, loading, error, success, offline

Karena MVP tidak memerlukan backend, “offline” terutama berarti aset/font eksternal gagal dimuat atau pengguna kehilangan koneksi ketika website belum sepenuhnya tersaji. Jangan mengarang status sinkronisasi server. Jika seluruh aset inti dihosting lokal dan halaman telah dimuat, materi statis serta logika lokal dapat tetap berjalan tanpa koneksi.

| Screen kunci | Empty | Loading | Error | Success | Offline |
|---|---|---|---|---|---|
| Landing page | Tidak ada konten utama: tampilkan fallback dengan nama produk dan tautan materi | Skeleton hero/kartu hanya jika konten memang dimuat dinamis | Pesan ringkas dan tautan ke materi jika navigasi tersedia | CTA mulai belajar tampil normal | Materi lokal tetap tersedia jika aset sudah dimuat; jika aset gagal, gunakan fallback teks |
| Materi/tujuan | Jika materi belum tersedia, jangan tampilkan section kosong; beri pesan konten belum tersedia | Skeleton teks/ilustrasi bila dibutuhkan | Pesan bahwa bagian gagal dimuat dan tombol coba lagi | Materi terbaca dan navigasi berikutnya tersedia | Teks lokal tetap bisa dibaca; ilustrasi eksternal diganti placeholder berlabel |
| Alat & bahan | Daftar kosong dianggap kegagalan konfigurasi; beri pesan yang jelas | Placeholder kartu alat | Fallback visual + nama/fungsi teks; jangan menghalangi materi | Semua objek memiliki nama, visual, dan fungsi | Gunakan aset lokal; jika tidak tersedia, tampilkan label dan deskripsi |
| Checklist | State awal: 0 dari 4 item diperiksa | Tidak perlu loading bila state lokal | Jika state tidak dapat diperbarui, tampilkan pesan dan pertahankan pilihan yang ada sejauh memungkinkan | 4 dari 4 item diperiksa; jelaskan bahwa ini konfirmasi pengguna | Tetap dapat digunakan bila state lokal berjalan; jangan menjanjikan sinkronisasi |
| Materi T568B | Diagram tidak boleh kosong; fallback ke daftar pin bernomor | Skeleton diagram jika aset dinamis | Tampilkan tabel urutan warna sebagai fallback jika gambar gagal | Diagram dan daftar warna cocok dengan standar | Urutan teks lokal tetap tersedia |
| Simulasi | Delapan kabel dan delapan slot harus tersedia; jika tidak, tampilkan error, bukan kanvas kosong | Status “Menyiapkan simulasi…” hanya selama inisialisasi | “Simulasi tidak dapat dimulai. Coba muat ulang.” Sediakan jalur kembali ke materi T568B | Delapan posisi benar menghasilkan “Susunan simulasi benar” | Setelah aplikasi termuat, simulasi lokal seharusnya tetap berjalan; bila aset hilang, gunakan label/visual fallback |
| Hasil simulasi | Sebelum diperiksa, tampilkan instruksi belum ada hasil | “Memeriksa susunan…” jika pemeriksaan memerlukan waktu | Jika pemeriksaan gagal, jangan tampilkan hasil lama sebagai hasil terbaru; tawarkan coba lagi | Tandai pin dan jelaskan hasil aktual | Pemeriksaan lokal dapat berjalan tanpa jaringan jika kode sudah dimuat |
| Panduan prosedur | Langkah aktif tidak boleh kosong; gunakan daftar langkah sebagai fallback | Skeleton visual langkah jika diperlukan | Jika ilustrasi gagal, tampilkan instruksi teks dan nomor langkah | Langkah aktif, nomor progres, dan navigasi sesuai | Prosedur teks tetap tersedia bila sudah termuat |
| Panduan LAN tester | Jika visual tidak ada, gunakan penjelasan teks dan langkah bernomor | Placeholder ilustrasi | Tampilkan instruksi tekstual dan beri tahu bahwa visual gagal dimuat | Panduan dan peringatan batas simulasi terlihat | Materi yang sudah termuat tetap dapat dibaca |
| Evaluasi | Jika bank soal kosong/tidak lengkap, hentikan evaluasi dan beri pesan; jangan menghitung skor palsu | Loading hanya saat soal disiapkan/dihitung | Pesan evaluasi tidak dapat dimulai; jangan tampilkan skor yang menyesatkan | Skor dihitung dari jawaban yang sah; status sesuai ambang yang disepakati | Jika soal dan logika lokal sudah termuat, evaluasi tetap bisa berjalan |
| Hasil evaluasi | Sebelum pengiriman, jangan tampilkan hasil kosong seolah-olah nilai nol | Status menghitung hasil | Jika perhitungan gagal, minta pengguna mencoba lagi tanpa mengklaim lulus | Skor, status, dan rekomendasi ditampilkan | Hasil dapat dihitung lokal; jelaskan bahwa hasil tidak tersimpan permanen jika memang demikian |
| Navigasi/progres sesi | Awal sesi: belum ada bagian selesai | Tidak perlu loading untuk progres lokal | Jika state tidak konsisten, pulihkan ke status aman dan jangan menandai semua selesai | Progres sesuai aktivitas yang benar-benar dilakukan | Progres sesi lokal tetap berlaku selama state browser tersedia; tidak ada sinkronisasi server |

### Copy pesan yang disarankan

- **Slot kosong:** “Masih ada posisi yang kosong. Isi semua delapan pin sebelum memeriksa susunan.”
- **Susunan belum tepat:** “Belum tepat. Periksa kembali pin yang ditandai, lalu coba lagi.”
- **Simulasi benar:** “Susunan simulasi benar. Ini memeriksa urutan warna di website, bukan fungsi kabel fisik.”
- **Aset gagal:** “Ilustrasi tidak dapat ditampilkan, tetapi Anda masih bisa melanjutkan menggunakan label dan petunjuk teks.”
- **Checklist belum lengkap:** “Ada item yang belum ditandai. Checklist ini berdasarkan konfirmasi Anda dan tidak mendeteksi alat secara otomatis.”
- **Evaluasi belum lengkap:** “Anda belum menjawab {n} soal. Kembali untuk melengkapi jawaban atau lanjutkan jika aturan evaluasi mengizinkan.”
- **Offline:** “Koneksi tidak tersedia. Materi yang sudah dimuat mungkin tetap dapat digunakan; konten yang belum dimuat perlu dicoba kembali.”

---

## 9. Responsive behaviour

### Breakpoint desain

Gunakan breakpoint Tailwind sebagai titik awal, lalu validasi berdasarkan konten dan interaksi, bukan perangkat tertentu saja.

| Rentang | Mode | Perilaku utama |
|---|---|---|
| `< 640 px` | Mobile | Satu kolom, header ringkas, drawer navigasi, tombol utama lebar, simulasi dengan kontrol alternatif |
| `640–767 px` | Mobile besar | Satu kolom atau grid dua kolom untuk kartu kecil bila tetap terbaca |
| `768–1023 px` | Tablet | Navigasi ringkas, grid 2 kolom, panel simulasi ditumpuk bila ruang sempit |
| `1024–1279 px` | Desktop | Sidebar, area konten utama, dua kolom pada layout yang sesuai |
| `≥ 1280 px` | Desktop lebar | Konten maksimum 1200 px; ruang tambahan tidak digunakan untuk memperlebar teks secara berlebihan |

### Mobile

- Gunakan satu kolom dan urutan konten yang sama dengan urutan membaca.
- Header ringkas; navigasi berada di drawer dengan tombol menu berlabel.
- Hindari sidebar permanen yang mengurangi lebar baca.
- Paragraf materi menggunakan ukuran 16 px atau lebih.
- Tombol dan checkbox memiliki target sentuh minimal 44 × 44 px.
- Simulasi menyediakan mode “pilih kabel → pilih slot”; drag-and-drop tetap boleh tersedia, tetapi bukan satu-satunya cara.
- Jika konektor terlalu lebar, hanya kanvas simulasi yang boleh digeser horizontal. Petunjuk, status, dan tombol tindakan tetap terlihat tanpa geser.
- Tombol **Periksa Jawaban** dapat dibuat sticky di bagian bawah panel simulasi, tetapi tidak boleh menutupi slot atau pesan validasi.
- Tidak ada interaksi penting yang memerlukan hover.

### Tablet

- Sidebar dapat menjadi drawer atau rail ringkas; jangan menampilkan ikon tanpa label permanen jika maknanya tidak jelas.
- Kartu alat menggunakan dua kolom.
- Simulasi dapat memakai dua panel berdampingan hanya jika setiap slot dan label tetap terbaca. Jika tidak, tumpuk bank kabel dan konektor.
- Pada orientasi portrait, kontrol utama tetap berada setelah area simulasi dan tidak terpisah jauh dari konteksnya.

### Desktop

- Sidebar 240 px dengan ikon dan label.
- Gunakan grid dua kolom untuk materi yang memang memiliki ilustrasi pendamping; jangan memecah paragraf panjang menjadi kolom sempit.
- Simulasi memakai area utama lebar dengan bank kabel dan konektor terlihat bersamaan.
- Umpan balik ditampilkan dekat konektor agar siswa langsung menghubungkan pesan dengan pin yang dimaksud.
- Konten maksimum 1200 px untuk menjaga panjang baris teks.
- Fokus keyboard harus tetap terlihat ketika area konten atau panel simulasi memiliki scroll.

### Prinsip adaptasi

Responsif berarti **mengubah susunan berdasarkan prioritas**, bukan hanya mengecilkan seluruh elemen. Jangan mengecilkan diagram RJ45 sampai nomor pin tidak terbaca. Pada layar kecil, pilih penumpukan panel atau gulir lokal yang terkendali.

---

## 10. Accessibility

Target implementasi: **WCAG 2.2 Level AA** sejauh relevan dengan website ini. Aksesibilitas harus dirancang bersama komponen, bukan ditambahkan setelah visual selesai.

### 10.1 Kontras dan informasi visual

- Teks normal: kontras minimal **4.5:1**.
- Teks besar: minimal **3:1**.
- Komponen UI, indikator fokus, dan informasi grafis penting: target minimal **3:1** terhadap warna di sekitarnya.
- Jangan menyampaikan benar/salah hanya melalui hijau/merah; sertakan ikon, label, dan teks.
- Setiap kabel memiliki label warna; kabel putih bergaris memiliki pola yang jelas.
- Pin diberi nomor 1–8, dan orientasi konektor dijelaskan.
- Hindari teks penting yang ditempatkan hanya di dalam gambar. Sediakan teks HTML yang setara.

### 10.2 Struktur semantik

- Gunakan satu `h1` yang menjelaskan judul halaman/section utama, lalu hierarki `h2` dan `h3` tanpa melompat secara sembarangan.
- Gunakan elemen `nav`, `main`, `section`, `form`, `fieldset`, dan `legend` sesuai fungsinya.
- Gunakan `<button>` untuk aksi dan `<a>` untuk navigasi; jangan menggunakan `div` klik sebagai pengganti kontrol native.
- Setiap input memiliki label yang terhubung.
- Gunakan teks tautan yang deskriptif, misalnya “Buka materi T568B”, bukan “Klik di sini”.
- Sediakan tautan **Lewati ke konten utama** di awal halaman.

### 10.3 Keyboard navigation dan focus order

- Semua navigasi, checkbox, tombol, pilihan jawaban, kabel, slot, dan kontrol simulasi harus dapat dioperasikan dengan keyboard.
- Urutan fokus mengikuti urutan visual dan urutan tugas: navigasi → konten → tindakan.
- `Tab` dan `Shift+Tab` berpindah antar kontrol; `Enter`/`Space` mengaktifkan tombol dan checkbox.
- Untuk simulasi, dukung pola keyboard yang dapat dipelajari:
  1. Fokus ke kabel di bank kabel.
  2. Tekan `Enter` atau `Space` untuk memilih kabel.
  3. Pindah ke slot tujuan.
  4. Tekan `Enter` atau `Space` untuk menempatkan kabel.
  5. Umumkan hasil penempatan.
- Jika menerapkan drag-and-drop native, tetap sediakan metode pilih-kabel/pilih-slot yang setara.
- Jangan menjebak fokus kecuali pada dialog modal yang terbuka; saat modal ditutup, fokus kembali ke pemicu dialog.
- Ring fokus harus terlihat, minimal setara dengan token `shadow-focus`, dan tidak boleh terpotong.

### 10.4 ARIA dan pengumuman status

Gunakan HTML native lebih dulu. Tambahkan ARIA hanya jika semantik native tidak cukup.

- Drawer navigasi: tombol pemicu memiliki `aria-expanded` dan `aria-controls`; drawer memiliki nama yang jelas.
- Checkbox checklist: label native dan status checked yang dapat dibaca screen reader.
- Progres: gunakan elemen progress yang semantik atau `role="progressbar"` dengan `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, dan label yang deskriptif.
- Simulasi: setiap kabel memiliki nama aksesibel, misalnya “Kabel putih-oranye, tersedia”; slot memiliki nama seperti “Pin 1, slot kosong” atau “Pin 1, berisi putih-oranye”.
- Hasil pemeriksaan: gunakan area `aria-live="polite"` untuk umpan balik yang muncul setelah tindakan; jangan mengumumkan ulang seluruh halaman.
- Kesalahan validasi penting dapat menggunakan `role="alert"` secara selektif, bukan untuk setiap perubahan kecil.
- Status benar/salah pada pin harus memiliki teks yang bisa diakses, bukan hanya border warna.
- Dialog reset dan submit: gunakan pola dialog yang sesuai, nama/label yang jelas, fokus awal yang masuk akal, dan pemulihan fokus setelah ditutup.
- Soal evaluasi: kelompokkan pilihan menggunakan `fieldset` dan `legend`; status jawaban terpilih dapat dibaca screen reader.

### 10.5 Drag-and-drop, sentuh, dan motorik

- Drag-and-drop tidak boleh menjadi satu-satunya interaksi.
- Sediakan pemilihan kabel lalu pemilihan slot melalui klik/tap dan keyboard.
- Jangan memerlukan gestur kompleks atau gerakan presisi tinggi.
- Target sentuh minimal 44 × 44 px.
- Jika pengguna salah menempatkan kabel, sediakan cara mudah untuk memindahkan kembali.
- Jangan mengandalkan double-click, hover, atau gerakan cepat.
- Reset harus jelas berbeda dari periksa jawaban dan idealnya meminta konfirmasi bila ada susunan yang telah dibuat.

### 10.6 Motion, bahasa, dan pemahaman

- Hormati `prefers-reduced-motion`; hilangkan gerakan dekoratif dan gunakan transisi sederhana.
- Animasi perpindahan kabel singkat dan tidak boleh membuat posisi akhir sulit diikuti.
- Gunakan bahasa Indonesia yang langsung, konsisten, dan sesuai siswa kelas X.
- Istilah teknis seperti T568B, RJ45, crimping, dan LAN tester boleh dipakai, tetapi jelaskan saat pertama kali muncul.
- Pesan kesalahan menyebut masalah dan tindakan perbaikan, bukan hanya “Error”.
- Hindari batas waktu yang tidak diperlukan.

### 10.7 Checklist audit aksesibilitas sebelum rilis

- [ ] Semua fungsi inti dapat diselesaikan hanya dengan keyboard.
- [ ] Simulasi dapat diselesaikan tanpa drag-and-drop.
- [ ] Kontras teks, tombol, fokus, dan status diuji.
- [ ] Semua kabel dan slot memiliki nama aksesibel.
- [ ] Umpan balik simulasi diumumkan tanpa memindahkan fokus secara mengejutkan.
- [ ] Gambar informatif memiliki teks alternatif; gambar dekoratif memiliki alt kosong.
- [ ] Form evaluasi memiliki label dan pesan validasi yang jelas.
- [ ] Drawer/dialog mengelola fokus dengan benar.
- [ ] Tampilan diuji pada zoom 200% dan layar kecil.
- [ ] Informasi penting tidak bergantung pada warna atau hover saja.
- [ ] `prefers-reduced-motion` didukung.
- [ ] Tidak ada scroll horizontal pada seluruh halaman pada lebar mobile; scroll lokal hanya digunakan bila diperlukan untuk kanvas simulasi.

---

## 11. Aturan konten dan microcopy

Walaupun tidak termasuk dalam daftar keluaran awal, konsistensi teks penting agar desain tidak ambigu.

### Istilah yang digunakan

- Gunakan **kabel straight** sebagai istilah utama dan sebut **straight-through** saat memperkenalkan istilah lengkap.
- Gunakan **T568B** secara konsisten untuk standar fokus simulasi.
- Gunakan **pin** untuk posisi 1–8 pada konektor.
- Gunakan **Periksa Jawaban** untuk memvalidasi susunan simulasi.
- Gunakan **Atur Ulang** untuk mengembalikan simulasi ke keadaan awal.
- Gunakan **Susunan simulasi benar**, bukan “Kabel berhasil dibuat”.
- Gunakan **Checklist selesai berdasarkan konfirmasi Anda**, bukan “Semua alat terdeteksi”.

### Prinsip microcopy

- Mulai dari tindakan atau hasil yang jelas.
- Hindari istilah teknis tanpa konteks.
- Jelaskan kesalahan beserta langkah perbaikan.
- Hindari klaim bahwa website dapat mendeteksi alat fisik atau menguji kabel nyata.
- Jangan tampilkan angka skor atau ambang kelulusan yang belum disetujui.

---

## 12. Keputusan yang harus dikonfirmasi sebelum handoff

Design direction ini cukup untuk memulai wireframe dan eksplorasi visual, tetapi keputusan berikut memengaruhi perilaku akhir dan perlu disetujui sebelum implementasi.

| Keputusan | Rekomendasi desain | Alasan / dampak |
|---|---|---|
| Struktur navigasi | Satu alur belajar dengan akses langsung ke setiap section | Pemula mendapat urutan jelas tanpa terkunci dari materi yang ingin diulang |
| Checklist sebagai syarat | Bukan syarat untuk melanjutkan | Sejalan dengan PRD; checklist adalah alat konfirmasi kesiapan |
| Interaksi simulasi | Drag-and-drop + pilih kabel/pilih slot | Memenuhi kebutuhan interaksi dan aksesibilitas |
| Slot yang sudah terisi | Pertukaran posisi kabel (*swap*) | Konsisten dan mencegah hilangnya kabel |
| Penilaian simulasi | Tampilkan posisi benar/salah; skor parsial boleh ditampilkan setelah disepakati | PRD belum menetapkan rumus skor final |
| Reset simulasi | Dialog konfirmasi jika susunan sudah berubah | Mencegah kehilangan usaha tanpa sengaja |
| Visual komponen | SVG/ilustrasi khusus yang jelas; model 3D bukan keharusan MVP | Lebih mudah menjaga keterbacaan, ukuran file, dan konsistensi |
| Penyimpanan progres | Sesi lokal saja untuk MVP; jangan klaim permanen | Backend/penyimpanan permanen belum termasuk cakupan yang dikonfirmasi |
| Evaluasi | Tentukan jumlah, jenis soal, bobot, ambang lulus, dan aturan pengulangan sebelum desain final | Hasil dan state lulus tidak dapat ditentukan dengan benar tanpa aturan ini |
| Tujuan pembelajaran | Verifikasi dengan capaian pembelajaran/modul ajar sekolah | PRD menyatakan rumusan final perlu disesuaikan |
| Browser minimum | Tetapkan sebelum pengujian lintas perangkat | Memengaruhi kompatibilitas drag-and-drop dan cakupan QA |
| Materi LAN tester | Tentukan apakah berupa ilustrasi statis atau animasi | PRD masih membuka keputusan ini |

---

## 13. Kriteria penerimaan desain sebelum coding

Desain dianggap siap diserahkan untuk implementasi ketika:

1. Semua screen MVP pada inventory memiliki wireframe dan hierarchy yang disetujui.
2. Alur landing page → materi → T568B → simulasi → panduan → evaluasi → hasil dapat ditelusuri tanpa dead-end.
3. Urutan T568B pada seluruh diagram, daftar, simulasi, dan umpan balik telah diverifikasi.
4. Simulasi memiliki rancangan desktop, mobile, keyboard, touch, slot kosong, salah susun, sukses, reset, dan kegagalan aset.
5. Setiap komponen interaktif memiliki variant dan state yang terdokumentasi.
6. Desain responsive tidak mengurangi keterbacaan nomor pin atau label kabel.
7. State empty/loading/error/success/offline telah dirancang untuk layar kunci.
8. Warna dan tipografi lolos pemeriksaan kontras.
9. Fokus keyboard, alternatif drag-and-drop, nama aksesibel, dan pengumuman status sudah didefinisikan.
10. Tidak ada fitur non-MVP yang muncul seolah-olah tersedia.
11. Copy tidak menyiratkan simulasi sebagai pengganti praktik atau pengujian fisik.
12. Keputusan terbuka yang memengaruhi penilaian dan progres telah disetujui.

---

## Ringkasan akhir

Arah desain yang direkomendasikan adalah **antarmuka pembelajaran teknis dengan visual bersih, sidebar navy, aksen biru, kartu putih, ilustrasi komponen yang presisi, dan simulasi sebagai pusat pengalaman interaktif**. Referensi dashboard digunakan untuk mengambil prinsip kebersihan layout dan pengelompokan konten, bukan untuk menyalin widget yang tidak relevan.

Prioritas tertinggi bukan membuat website terlihat penuh atau kompleks, melainkan memastikan siswa dapat:
1. memahami alat, bahan, dan keselamatan kerja;
2. mengenali urutan delapan warna T568B;
3. berlatih menyusun kabel dengan umpan balik yang spesifik;
4. mengikuti prosedur pembuatan dan pengujian;
5. mengevaluasi pemahaman serta kembali ke materi yang perlu diulang.

Semua keputusan visual harus mendukung lima hasil tersebut. Implementasi kode sebaiknya dimulai setelah struktur layar, interaksi simulasi, aturan penilaian, dan keputusan terbuka pada bagian 12 disepakati.
