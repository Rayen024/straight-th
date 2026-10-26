# Product Requirements Document (PRD)

**Produk:** Website Pembelajaran Membuat Kabel Straight  
**Target pengguna:** Siswa SMK TJKT Fase E/Kelas X  
**Teknologi:** HTML, Vanilla JavaScript, Tailwind CSS  
**Platform:** Website responsif untuk desktop dan perangkat seluler  
**Pendekatan pembelajaran:** Materi bertahap, pemeriksaan alat dan bahan, simulasi interaktif, panduan prosedural, dan evaluasi otomatis.

> **Terminologi:** Dokumen ini menggunakan istilah *kabel straight-through* (kabel straight) secara konsisten. Standar pengkabelan yang menjadi fokus simulasi adalah T568B.

## 1. Problem Statement

### 1.1 Masalah utama

Siswa kelas X SMK pada kompetensi keahlian Teknik Jaringan Komputer dan Telekomunikasi (TJKT) perlu mempelajari dasar kabel UTP, fungsi alat dan bahan, keselamatan kerja, serta prosedur pembuatan kabel straight. Pembelajaran ini membutuhkan pemahaman konseptual sekaligus kemampuan menyusun delapan kabel berwarna sesuai urutan standar T568B pada konektor RJ45.

Materi berbasis teks atau gambar statis belum tentu memberikan kesempatan kepada siswa untuk berlatih menyusun warna kabel secara langsung. Siswa juga perlu memahami urutan kerja, penggunaan tang crimping, dan pemeriksaan hasil menggunakan LAN tester.

Website ini menyediakan pengalaman belajar bertahap yang menggabungkan materi, pemeriksaan alat dan bahan, simulasi penyusunan kabel, panduan pembuatan, serta evaluasi otomatis. Simulasi menjadi sarana latihan sebelum siswa melakukan praktik dengan perangkat fisik, bukan pengganti seluruh praktik nyata.

### 1.2 Pihak yang terdampak

| Pihak | Kebutuhan atau masalah |
|---|---|
| Siswa kelas X TJKT | Membutuhkan panduan terstruktur untuk memahami alat, bahan, keselamatan kerja, urutan warna T568B, dan prosedur pembuatan kabel straight. |
| Guru produktif TJKT | Membutuhkan media untuk menjelaskan urutan pengkabelan dan memberi kesempatan latihan mandiri. |
| Laboratorium atau sekolah | Dapat menggunakan simulasi sebagai persiapan sebelum praktik fisik. |

### 1.3 Problem statement ringkas

Siswa kelas X TJKT membutuhkan media pembelajaran interaktif untuk memahami dan mempraktikkan urutan pengkabelan straight-through standar T568B karena mereka perlu menguasai konsep, prosedur kerja, dan ketepatan penempatan warna sebelum membuat serta menguji kabel secara fisik.

### 1.4 Batasan masalah

Produk versi pertama berfokus pada:
- Pengenalan kabel UTP dan karakteristiknya.
- Pengenalan alat dan bahan pembuatan kabel straight.
- Keselamatan kerja.
- Standar pengkabelan T568B.
- Simulasi interaktif penyusunan warna kabel pada konektor RJ45.
- Panduan pembuatan kabel straight secara bertahap.
- Evaluasi hasil belajar dan simulasi.

Di luar cakupan yang telah dikonfirmasi: autentikasi pengguna, penyimpanan nilai ke server, dashboard guru, dan integrasi dengan Learning Management System (LMS). Kebutuhan tersebut tidak dianggap sebagai fitur MVP sebelum diputuskan.

## 2. Target User dan Persona

### 2.1 Target pengguna utama

Siswa SMK jurusan TJKT Fase E/Kelas X yang sedang mempelajari dasar jaringan komputer dan pembuatan kabel straight.

Karakteristik pengguna:
- Sedang mempelajari konsep dasar jaringan komputer.
- Membutuhkan penjelasan visual dan prosedural.
- Perlu memahami fungsi setiap alat sebelum praktik.
- Perlu mengingat dan memahami urutan delapan warna kabel standar T568B.
- Memerlukan latihan yang dapat diulang dan umpan balik saat melakukan kesalahan.

### 2.2 Persona 1 — Siswa pemula

**Nama:** Dimas  
**Peran:** Siswa kelas X TJKT  
**Tingkat pengalaman:** Pemula

**Tujuan:**
- Memahami fungsi kabel UTP, konektor RJ45, tang crimping, dan LAN tester.
- Mengingat urutan warna T568B.
- Mampu menyusun delapan kabel berwarna pada simulasi.
- Memahami langkah pembuatan kabel straight.

**Kendala:**
- Mudah tertukar ketika mengingat urutan warna.
- Belum memahami hubungan urutan warna dan pemasangan konektor.
- Belum terbiasa menggunakan alat pembuatan kabel.

**Kebutuhan produk:**
- Materi singkat dengan ilustrasi jelas.
- Visualisasi konektor dan kabel yang realistis.
- Petunjuk langkah demi langkah.
- Umpan balik yang menjelaskan letak kesalahan.

**Indikator keberhasilan:** Dimas menyelesaikan simulasi dengan urutan T568B yang benar dan lulus evaluasi sesuai kriteria yang ditetapkan.

### 2.3 Persona 2 — Siswa yang sedang mempersiapkan praktik

**Nama:** Alya  
**Peran:** Siswa kelas X TJKT  
**Tingkat pengalaman:** Sudah mengenal komponen dasar jaringan, tetapi belum lancar membuat kabel straight.

**Tujuan:**
- Memeriksa kesiapan alat dan bahan sebelum praktik.
- Mengikuti prosedur pembuatan kabel secara berurutan.
- Menghindari kesalahan pemasangan kabel.
- Memahami fungsi pengujian menggunakan LAN tester.

**Kendala:**
- Terkadang melewatkan langkah persiapan.
- Belum konsisten mengurutkan warna kabel.
- Belum memahami tujuan pemeriksaan hasil akhir.

**Kebutuhan produk:**
- Daftar periksa alat dan bahan.
- Panduan prosedural yang mudah diikuti.
- Simulasi yang dapat diulang.
- Evaluasi untuk mengidentifikasi bagian yang perlu dipelajari kembali.

**Indikator keberhasilan:** Alya menyelesaikan pembelajaran, menyusun warna kabel dengan benar, dan menjawab evaluasi sesuai standar kelulusan.

*Catatan: Kedua persona merupakan representasi kebutuhan pengguna untuk perencanaan produk, bukan hasil riset pengguna yang telah dilakukan.*

## 3. Goals dan Non-Goals

### 3.1 Product goals

| ID | Goal | Kriteria keberhasilan |
|---|---|---|
| G-01 | Menyediakan pembelajaran terstruktur | Seluruh materi inti dapat diakses melalui navigasi website. |
| G-02 | Membantu siswa memahami alat dan bahan | Setiap alat dan bahan memiliki nama, visual, serta penjelasan fungsi. |
| G-03 | Mengajarkan standar T568B | Website menampilkan delapan posisi warna dalam urutan yang benar. |
| G-04 | Menyediakan simulasi interaktif | Siswa dapat menyusun delapan warna melalui drag-and-drop atau interaksi alternatif yang setara. |
| G-05 | Memberikan umpan balik otomatis | Sistem membandingkan susunan siswa dengan urutan T568B yang benar. |
| G-06 | Membantu siswa memahami prosedur | Langkah pembuatan kabel disajikan secara berurutan. |
| G-07 | Mengevaluasi hasil belajar | Siswa dapat mengerjakan evaluasi dan mengetahui hasilnya. |
| G-08 | Memastikan akses lintas perangkat | Fitur inti berjalan pada desktop dan perangkat seluler yang didukung. |

### 3.2 Non-goals

Fitur berikut bukan sasaran versi pertama:
1. Akun, registrasi, dan login siswa.
2. Dashboard pengelolaan kelas untuk guru.
3. Penyimpanan progres dan nilai secara permanen di server.
4. Papan peringkat antarsiswa.
5. Sertifikat digital.
6. Simulasi perangkat jaringan seperti router, switch, atau topologi jaringan.
7. Pengujian kabel menggunakan perangkat fisik yang terhubung langsung ke website.
8. Simulasi elektronik lengkap yang memodelkan karakteristik listrik kabel.
9. Materi pengkabelan crossover sebagai jalur pembelajaran utama.

Fitur tersebut dapat dipertimbangkan kemudian jika kebutuhan pengguna dan prioritas pengembangan mendukungnya.

## 4. User Stories

| ID | User story | Prioritas |
|---|---|---|
| US-01 | Sebagai siswa, saya ingin melihat landing page agar saya memahami tujuan dan isi website sebelum mulai belajar. | Must-have |
| US-02 | Sebagai siswa, saya ingin melihat tujuan pembelajaran agar saya mengetahui kompetensi yang harus dikuasai. | Must-have |
| US-03 | Sebagai siswa, saya ingin mempelajari pengertian, fungsi, dan karakteristik kabel UTP agar saya memahami bahan yang digunakan dalam pembuatan kabel straight. | Must-have |
| US-04 | Sebagai siswa, saya ingin mengenali konektor RJ45, tang crimping, dan LAN tester agar saya mengetahui fungsi setiap alat dan bahan. | Must-have |
| US-05 | Sebagai siswa, saya ingin mempelajari keselamatan kerja agar saya mengetahui tindakan pencegahan saat membuat kabel. | Must-have |
| US-06 | Sebagai siswa, saya ingin melihat urutan warna T568B secara visual agar saya dapat memahami posisi setiap kabel. | Must-have |
| US-07 | Sebagai siswa, saya ingin memeriksa daftar alat dan bahan sebelum praktik agar saya dapat memastikan semua kebutuhan sudah tersedia. | Must-have |
| US-08 | Sebagai siswa, saya ingin menyusun warna kabel melalui simulasi drag-and-drop agar saya dapat berlatih tanpa harus menggunakan perangkat fisik. | Must-have |
| US-09 | Sebagai siswa, saya ingin mendapatkan penilaian otomatis setelah menyusun kabel agar saya mengetahui apakah susunan saya benar. | Must-have |
| US-10 | Sebagai siswa, saya ingin mendapatkan penjelasan ketika melakukan kesalahan agar saya memahami bagian yang harus diperbaiki. | Must-have |
| US-11 | Sebagai siswa, saya ingin mengikuti panduan pembuatan kabel langkah demi langkah agar saya memahami urutan prosedur praktik. | Must-have |
| US-12 | Sebagai siswa, saya ingin mempelajari cara memeriksa hasil kabel menggunakan LAN tester agar saya memahami tujuan pengujian kabel. | Must-have |
| US-13 | Sebagai siswa, saya ingin mengerjakan evaluasi akhir agar saya dapat mengetahui tingkat pemahaman terhadap materi. | Must-have |
| US-14 | Sebagai siswa, saya ingin mengulang materi atau simulasi agar saya dapat memperbaiki kesalahan sebelum menyelesaikan pembelajaran. | Must-have |
| US-15 | Sebagai siswa, saya ingin menggunakan website dari perangkat seluler agar saya dapat belajar tanpa harus menggunakan komputer desktop. | Must-have |

## 5. Daftar Fitur: MVP, V2, dan Nanti

Pembagian berikut mempertahankan seluruh kebutuhan yang ditetapkan untuk versi pertama. Fitur tambahan dipisahkan agar tidak memperbesar ruang lingkup tanpa keputusan yang jelas.

### 5.1 MVP — Versi pertama

| ID | Fitur | Deskripsi | Alasan prioritas |
|---|---|---|---|
| MVP-01 | Landing page | Menampilkan identitas website, deskripsi singkat, dan tombol mulai belajar. | Menjadi titik masuk pembelajaran. |
| MVP-02 | Tujuan pembelajaran | Menampilkan kompetensi yang diharapkan setelah pembelajaran. | Membantu siswa memahami target belajar. |
| MVP-03 | Materi dasar kabel UTP | Membahas pengertian, fungsi, dan karakteristik kabel UTP Cat 5e. | Memberikan pengetahuan dasar. |
| MVP-04 | Pengenalan alat dan bahan | Menampilkan kabel UTP Cat 5e, konektor RJ45, tang crimping, dan LAN tester beserta fungsinya. | Mempersiapkan siswa sebelum praktik. |
| MVP-05 | Pemeriksaan alat dan bahan | Menyediakan checklist yang dapat ditandai siswa. | Membantu memastikan kesiapan praktik. |
| MVP-06 | Keselamatan kerja | Menjelaskan tindakan pencegahan dan penggunaan alat secara aman. | Mendukung praktik yang aman. |
| MVP-07 | Materi T568B | Menampilkan urutan warna delapan pin dengan ilustrasi konektor yang realistis. | Menjadi dasar simulasi. |
| MVP-08 | Simulasi penyusunan kabel | Memungkinkan siswa menempatkan delapan warna ke delapan posisi konektor. | Menjadi fitur interaktif utama. |
| MVP-09 | Penilaian simulasi | Memeriksa urutan warna dan memberikan umpan balik otomatis. | Memberikan kesempatan latihan mandiri. |
| MVP-10 | Panduan pembuatan kabel | Menampilkan prosedur pembuatan kabel straight secara bertahap. | Menghubungkan teori dengan praktik. |
| MVP-11 | Panduan pengujian kabel | Menjelaskan fungsi dan cara membaca hasil pengujian LAN tester. | Membantu memahami pemeriksaan hasil praktik. |
| MVP-12 | Evaluasi akhir | Menilai pemahaman materi melalui soal dan menampilkan hasil. | Memenuhi kebutuhan evaluasi pembelajaran. |
| MVP-13 | Navigasi dan progres sesi | Membantu siswa berpindah antarmateri dan mengetahui bagian yang telah diselesaikan selama sesi berjalan. | Mempermudah penyelesaian pembelajaran. |
| MVP-14 | Desain responsif | Menyesuaikan tampilan dengan desktop dan perangkat seluler. | Memenuhi kebutuhan akses perangkat. |

### 5.2 V2 — Pengembangan berikutnya

Fitur berikut merupakan usulan, bukan kebutuhan yang telah dikonfirmasi.

| ID | Fitur | Deskripsi | Nilai tambah |
|---|---|---|---|
| V2-01 | Mode latihan dan tantangan | Menyediakan latihan bebas dan tantangan dengan tingkat kesulitan berbeda. | Memperluas kesempatan latihan. |
| V2-02 | Riwayat hasil | Menyimpan hasil latihan untuk dibandingkan dari waktu ke waktu. | Membantu siswa melihat perkembangan. |
| V2-03 | Pengacakan soal | Menghasilkan variasi pertanyaan dari kumpulan soal. | Mengurangi pengulangan soal yang sama. |
| V2-04 | Umpan balik prosedural | Menjelaskan konsekuensi kesalahan pada setiap langkah simulasi. | Memperdalam pemahaman prosedur. |
| V2-05 | Panel guru | Memungkinkan guru mengelola materi atau memantau hasil siswa. | Mendukung pembelajaran di kelas. |

### 5.3 Nanti — Pengembangan jangka panjang

| ID | Fitur | Deskripsi |
|---|---|---|
| FUT-01 | Akun dan kelas | Mendukung akun siswa, kelas, dan identitas pembelajaran. |
| FUT-02 | Integrasi LMS | Mengintegrasikan pembelajaran dengan sistem sekolah jika diperlukan. |
| FUT-03 | Analitik pembelajaran | Menampilkan pola kesalahan siswa berdasarkan data penggunaan. |
| FUT-04 | Materi pengkabelan tambahan | Memperluas pembelajaran ke jenis pengkabelan lain jika dibutuhkan. |
| FUT-05 | Simulasi lanjutan | Mengembangkan simulasi tambahan berdasarkan kebutuhan pembelajaran praktik jaringan. |

**Batasan penting:** MVP tidak boleh bergantung pada fitur V2 atau fitur jangka panjang agar dapat digunakan secara mandiri.

## 6. Functional Requirements Detail per Fitur MVP

### 6.1 MVP-01 — Landing Page

**Tujuan:** Memberikan pengenalan produk dan akses ke pembelajaran.

**Functional requirements:**
- FR-01.1: Sistem harus menampilkan nama website dan deskripsi singkat.
- FR-01.2: Sistem harus menampilkan fokus pembelajaran, yaitu pembuatan kabel straight standar T568B.
- FR-01.3: Sistem harus menyediakan tombol untuk memulai pembelajaran.
- FR-01.4: Tombol mulai belajar harus mengarahkan pengguna ke bagian awal pembelajaran.
- FR-01.5: Navigasi utama harus dapat digunakan pada desktop maupun perangkat seluler.

**Acceptance criteria:**
1. Landing page dapat dibuka tanpa login.
2. Tombol mulai belajar mengarah ke bagian pembelajaran yang benar.
3. Elemen utama tidak saling bertumpuk pada ukuran layar yang didukung.
4. Tidak ada tombol navigasi utama yang mengarah ke halaman kosong.

### 6.2 MVP-02 — Tujuan Pembelajaran

**Tujuan:** Menyampaikan kompetensi yang perlu dikuasai siswa.

**Functional requirements:**
- FR-02.1: Sistem harus menampilkan daftar tujuan pembelajaran.
- FR-02.2: Tujuan harus mencakup pemahaman kabel UTP, fungsi alat dan bahan, keselamatan kerja, standar T568B, prosedur pembuatan kabel, dan pemeriksaan hasil.
- FR-02.3: Tujuan harus ditampilkan dalam bahasa yang sesuai untuk siswa kelas X TJKT.
- FR-02.4: Tujuan pembelajaran harus dapat dibaca sebelum siswa memulai simulasi.

**Acceptance criteria:**
1. Semua tujuan pembelajaran yang ditetapkan tersedia.
2. Teks terbaca dengan baik pada desktop dan perangkat seluler.
3. Tujuan pembelajaran tidak bertentangan dengan fitur yang benar-benar tersedia.

**Catatan:** Rumusan final tujuan pembelajaran perlu disesuaikan dengan capaian pembelajaran atau perangkat ajar yang digunakan sekolah.

### 6.3 MVP-03 — Materi Dasar Kabel UTP

**Tujuan:** Memberikan pengetahuan dasar sebelum siswa berlatih.

**Functional requirements:**
- FR-03.1: Sistem harus menjelaskan pengertian kabel UTP.
- FR-03.2: Sistem harus menjelaskan fungsi kabel UTP dalam jaringan komputer.
- FR-03.3: Sistem harus menampilkan karakteristik kabel UTP Cat 5e.
- FR-03.4: Materi harus dilengkapi ilustrasi yang relevan.
- FR-03.5: Materi harus dapat dibaca tanpa memerlukan akun.

**Acceptance criteria:**
1. Pengertian, fungsi, dan karakteristik tersedia.
2. Ilustrasi tidak menutupi atau mengganggu teks.
3. Materi dapat dibaca tanpa kesalahan tata letak pada perangkat yang didukung.

**Batasan:** Spesifikasi teknis Cat 5e harus diverifikasi sebelum publikasi. Website tidak boleh menyajikan angka teknis yang belum dipastikan sumber dan konteksnya.

### 6.4 MVP-04 — Pengenalan Alat dan Bahan

**Tujuan:** Membantu siswa mengidentifikasi setiap alat dan bahan.

**Daftar objek:**
1. Kabel UTP Cat 5e.
2. Konektor RJ45.
3. Tang crimping.
4. LAN tester.

**Functional requirements:**
- FR-04.1: Sistem harus menampilkan nama setiap alat atau bahan.
- FR-04.2: Sistem harus menampilkan gambar atau visual objek.
- FR-04.3: Sistem harus menjelaskan fungsi setiap objek.
- FR-04.4: Sistem harus menjelaskan kapan objek digunakan dalam prosedur pembuatan kabel.
- FR-04.5: Sistem harus membedakan bahan yang digunakan untuk membuat kabel dari alat untuk pengerjaan atau pengujian.

**Acceptance criteria:**
1. Keempat objek tersedia.
2. Setiap objek memiliki nama, visual, dan penjelasan fungsi.
3. Tidak ada objek yang hanya ditampilkan tanpa penjelasan.
4. Penjelasan sesuai dengan penggunaan objek dalam pembuatan kabel straight.

### 6.5 MVP-05 — Pemeriksaan Alat dan Bahan

**Tujuan:** Menyediakan pemeriksaan kesiapan sebelum praktik.

**Functional requirements:**
- FR-05.1: Sistem harus menampilkan checklist yang mencakup empat alat dan bahan utama.
- FR-05.2: Siswa harus dapat menandai setiap item sebagai tersedia.
- FR-05.3: Siswa harus dapat membatalkan tanda pada item yang sebelumnya dipilih.
- FR-05.4: Sistem harus menampilkan jumlah item yang telah diperiksa.
- FR-05.5: Sistem harus menampilkan status kesiapan berdasarkan item yang ditandai.

**Acceptance criteria:**
1. Setiap item dapat ditandai dan dibatalkan.
2. Jumlah item diperbarui setelah perubahan.
3. Status kesiapan berubah sesuai checklist.
4. Pengguna dapat melanjutkan pembelajaran meskipun checklist belum lengkap, kecuali ada keputusan produk yang menetapkan sebaliknya.

**Catatan:** Checklist digital hanya merekam konfirmasi pengguna. Sistem tidak dapat memastikan keberadaan alat fisik secara otomatis.

### 6.6 MVP-06 — Keselamatan Kerja

**Tujuan:** Memperkenalkan tindakan pencegahan sebelum pengerjaan kabel.

**Functional requirements:**
- FR-06.1: Sistem harus menampilkan materi keselamatan kerja yang relevan dengan penggunaan tang crimping dan pemotongan atau pengupasan kabel.
- FR-06.2: Sistem harus menjelaskan pentingnya menggunakan alat dengan benar.
- FR-06.3: Sistem harus menyajikan peringatan keselamatan sebelum atau selama panduan praktik.
- FR-06.4: Materi harus dapat dibaca sebelum siswa memasuki simulasi atau panduan praktik.

**Acceptance criteria:**
1. Materi keselamatan kerja tersedia.
2. Peringatan mudah ditemukan dan dibaca.
3. Isi materi tidak menganjurkan penggunaan alat secara berbahaya.
4. Panduan ditinjau untuk memastikan kesesuaiannya dengan prosedur praktik.

### 6.7 MVP-07 — Materi Standar Pengkabelan T568B

**Tujuan:** Mengajarkan urutan warna delapan posisi pada konektor RJ45.

**Urutan standar T568B dari pin 1 sampai pin 8:**

| Posisi pin | Warna kabel |
|---:|---|
| 1 | Putih-oranye |
| 2 | Oranye |
| 3 | Putih-hijau |
| 4 | Biru |
| 5 | Putih-biru |
| 6 | Hijau |
| 7 | Putih-cokelat |
| 8 | Cokelat |

**Functional requirements:**
- FR-07.1: Sistem harus menampilkan delapan posisi pin.
- FR-07.2: Setiap posisi harus memiliki label warna yang jelas.
- FR-07.3: Warna kabel harus dibedakan secara visual.
- FR-07.4: Kabel berwarna dasar putih dengan garis warna harus dibedakan dari kabel berwarna solid.
- FR-07.5: Materi harus menjelaskan bahwa kabel straight menggunakan susunan standar yang sama pada kedua ujung kabel.
- FR-07.6: Sistem harus menyediakan akses dari materi T568B menuju simulasi.

**Acceptance criteria:**
1. Urutan pin sesuai tabel.
2. Tidak ada posisi warna yang tertukar.
3. Warna tetap dapat dibedakan pada layar kecil.
4. Label teks tetap tersedia sehingga identifikasi tidak bergantung pada warna saja.

### 6.8 MVP-08 — Simulasi Interaktif Penyusunan Kabel

**Tujuan:** Memungkinkan siswa berlatih menyusun warna kabel pada konektor RJ45 secara visual.

Siswa melihat delapan kabel berwarna dan delapan slot pada konektor. Siswa memindahkan setiap kabel ke posisi yang dianggap benar. Setelah semua posisi terisi, siswa dapat mengirim jawaban untuk diperiksa.

**Functional requirements:**
- FR-08.1: Sistem harus menampilkan visual konektor RJ45 dengan delapan posisi kabel.
- FR-08.2: Visual kabel dan konektor harus menyerupai bentuk komponen nyata sejauh diperlukan untuk pembelajaran.
- FR-08.3: Sistem harus menyediakan delapan kabel dengan pola warna T568B yang relevan.
- FR-08.4: Siswa harus dapat memindahkan kabel ke slot yang tersedia menggunakan drag-and-drop.
- FR-08.5: Sistem harus mencegah satu kabel menempati dua slot sekaligus.
- FR-08.6: Sistem harus memungkinkan siswa mengubah posisi kabel sebelum mengirim jawaban.
- FR-08.7: Sistem harus menyediakan tombol untuk memeriksa jawaban.
- FR-08.8: Sistem harus menyediakan fungsi mengatur ulang simulasi.
- FR-08.9: Sistem harus menampilkan umpan balik otomatis berdasarkan susunan yang dikirim.
- FR-08.10: Sistem harus menyediakan mekanisme interaksi alternatif untuk perangkat yang tidak mendukung drag-and-drop dengan baik.
- FR-08.11: Simulasi harus dapat digunakan pada desktop dan perangkat seluler yang didukung.

**Acceptance criteria:**
1. Delapan kabel dapat ditempatkan pada delapan slot.
2. Satu slot hanya dapat menampung satu kabel.
3. Pengguna dapat memindahkan kabel yang sudah ditempatkan.
4. Sistem menangani slot kosong sesuai aturan penilaian yang ditetapkan.
5. Ketika jawaban diperiksa, sistem membandingkan warna setiap pin dengan susunan T568B yang benar.
6. Tombol reset mengembalikan simulasi ke kondisi awal.
7. Interaksi tetap dapat dilakukan pada layar sentuh.
8. Visual kabel tidak menutupi label atau posisi pin.

**Catatan implementasi:** JavaScript mengelola keadaan setiap slot dan identitas setiap kabel. Tailwind CSS digunakan untuk tata letak, responsivitas, dan gaya antarmuka. Visual realistis dapat dibuat menggunakan aset gambar atau SVG yang disiapkan khusus untuk produk.

### 6.9 MVP-09 — Penilaian dan Umpan Balik Simulasi

**Tujuan:** Memberikan penilaian atas ketepatan penyusunan warna kabel.

**Functional requirements:**
- FR-09.1: Sistem harus membandingkan susunan siswa dengan urutan T568B yang ditetapkan.
- FR-09.2: Sistem harus mendeteksi posisi warna yang salah.
- FR-09.3: Sistem harus menampilkan status benar atau belum benar.
- FR-09.4: Sistem harus menampilkan posisi yang perlu diperbaiki.
- FR-09.5: Siswa harus dapat memperbaiki susunan dan mengirim jawaban kembali.
- FR-09.6: Sistem harus membedakan hasil simulasi dari hasil pengujian kabel fisik.

**Acceptance criteria:**
- Delapan posisi benar menghasilkan status jawaban benar.
- Satu atau lebih posisi salah menghasilkan status jawaban belum benar.
- Sistem menunjukkan posisi yang salah secara konsisten dengan jawaban aktual.
- Setelah susunan diperbaiki, sistem menilai ulang susunan terbaru.
- Hasil simulasi tidak dinyatakan sebagai bukti bahwa kabel fisik berfungsi.

**Aturan penilaian yang diusulkan:** Nilai ketepatan simulasi dihitung berdasarkan jumlah posisi yang benar dari delapan posisi. Rumus nilai, pembulatan, dan ambang kelulusan belum ditetapkan dan perlu dikonfirmasi.

### 6.10 MVP-10 — Panduan Cara Membuat Kabel Straight

**Tujuan:** Membimbing siswa memahami prosedur pembuatan kabel secara berurutan.

**Urutan materi yang diusulkan:**
1. Memeriksa alat dan bahan.
2. Memahami keselamatan kerja.
3. Memotong kabel sesuai kebutuhan praktik.
4. Mengupas selubung luar kabel.
5. Memisahkan dan meluruskan pasangan kabel.
6. Menyusun delapan kabel sesuai urutan T568B.
7. Merapikan dan memotong ujung kabel.
8. Memasukkan kabel ke konektor RJ45.
9. Melakukan crimping.
10. Mengulangi proses pada ujung kabel lainnya menggunakan standar yang sama.
11. Memeriksa hasil menggunakan LAN tester.

**Functional requirements:**
- FR-10.1: Sistem harus menyajikan langkah secara berurutan.
- FR-10.2: Setiap langkah harus memiliki instruksi dan visual pendukung.
- FR-10.3: Siswa harus dapat berpindah ke langkah berikutnya dan kembali ke langkah sebelumnya.
- FR-10.4: Sistem harus menampilkan peringatan keselamatan yang relevan.
- FR-10.5: Sistem harus menjelaskan pentingnya kesamaan standar T568B pada kedua ujung kabel straight.
- FR-10.6: Sistem harus menjelaskan tujuan pengujian setelah proses crimping.
- FR-10.7: Panduan harus dapat diakses kembali tanpa mengulang seluruh materi.

**Acceptance criteria:**
1. Langkah ditampilkan sesuai urutan yang ditetapkan.
2. Pengguna dapat berpindah antar langkah tanpa kehilangan akses ke materi.
3. Instruksi setiap langkah dapat dipahami tanpa mengandalkan gambar saja.
4. Prosedur ditinjau oleh guru atau ahli yang memahami praktik pengkabelan.

**Batasan:** Website hanya mengajarkan prosedur. Website tidak dapat memastikan bahwa siswa benar-benar melakukan setiap langkah secara fisik.

### 6.11 MVP-11 — Panduan Pengujian dengan LAN Tester

**Tujuan:** Memperkenalkan pemeriksaan hasil kabel straight.

**Functional requirements:**
- FR-11.1: Sistem harus menjelaskan fungsi LAN tester.
- FR-11.2: Sistem harus menjelaskan cara memasang kedua ujung kabel ke perangkat penguji yang sesuai.
- FR-11.3: Sistem harus menjelaskan cara mengamati indikator pengujian sesuai jenis perangkat yang digunakan.
- FR-11.4: Sistem harus menjelaskan bahwa hasil pengujian harus diinterpretasikan berdasarkan indikator dan petunjuk perangkat.
- FR-11.5: Sistem harus membedakan simulasi susunan warna dari pengujian kabel fisik.

**Acceptance criteria:**
1. Materi menjelaskan tujuan pengujian.
2. Instruksi tidak mengasumsikan bahwa semua model LAN tester memiliki indikator identik.
3. Siswa mengetahui bahwa pemeriksaan fisik tetap diperlukan untuk memverifikasi kabel yang telah dibuat.

### 6.12 MVP-12 — Evaluasi Akhir

**Tujuan:** Mengukur pemahaman siswa terhadap materi.

**Functional requirements:**
- FR-12.1: Sistem harus menyediakan soal evaluasi berdasarkan materi yang telah dipelajari.
- FR-12.2: Soal harus mencakup kabel UTP, fungsi alat dan bahan, keselamatan kerja, urutan T568B, prosedur pembuatan kabel, dan pengujian.
- FR-12.3: Sistem harus menerima jawaban siswa.
- FR-12.4: Sistem harus menghitung hasil berdasarkan kunci jawaban yang telah ditetapkan.
- FR-12.5: Sistem harus menampilkan hasil evaluasi setelah pengerjaan.
- FR-12.6: Sistem harus memberi tahu siswa apakah kriteria kelulusan telah tercapai.
- FR-12.7: Sistem harus menyediakan akses untuk mengulang evaluasi sesuai aturan percobaan yang ditetapkan.

**Acceptance criteria:**
1. Setiap soal memiliki jawaban atau aturan penilaian yang jelas.
2. Skor dihitung secara konsisten.
3. Hasil ditampilkan setelah evaluasi selesai.
4. Status lulus atau belum lulus sesuai ambang yang dikonfigurasi.
5. Jawaban yang belum dipilih tidak boleh otomatis dihitung sebagai jawaban benar.

**Keputusan yang masih terbuka:** Jumlah soal, bentuk soal, bobot nilai, ambang kelulusan, dan batas percobaan.

### 6.13 MVP-13 — Navigasi dan Progres Sesi

**Tujuan:** Membantu siswa mengikuti alur pembelajaran.

**Functional requirements:**
- FR-13.1: Sistem harus menyediakan navigasi menuju bagian pembelajaran yang tersedia.
- FR-13.2: Sistem harus menampilkan bagian yang sedang dibuka.
- FR-13.3: Sistem harus dapat menampilkan progres penyelesaian selama sesi berjalan.
- FR-13.4: Sistem harus memberikan akses kembali ke materi dan simulasi.
- FR-13.5: Sistem tidak boleh mengklaim progres tersimpan permanen jika tidak ada mekanisme penyimpanan.

**Acceptance criteria:**
1. Semua menu mengarah ke bagian yang benar.
2. Pengguna dapat kembali ke materi sebelumnya.
3. Status progres sesuai aktivitas yang benar-benar diselesaikan.
4. Perilaku progres setelah halaman dimuat ulang mengikuti keputusan penyimpanan yang ditetapkan.

### 6.14 MVP-14 — Desain Responsif

**Tujuan:** Memastikan website dapat digunakan pada berbagai ukuran layar.

**Functional requirements:**
- FR-14.1: Tata letak harus menyesuaikan ukuran layar.
- FR-14.2: Teks, gambar, tombol, dan navigasi harus tetap terbaca dan dapat digunakan.
- FR-14.3: Simulasi harus mendukung interaksi sentuh dan mouse.
- FR-14.4: Konten tidak boleh terpotong sehingga menghalangi penyelesaian pembelajaran.
- FR-14.5: Elemen interaktif harus memiliki penanda fokus yang jelas ketika digunakan dengan keyboard.

**Acceptance criteria:**
1. Fitur inti dapat diselesaikan pada desktop dan perangkat seluler dalam cakupan pengujian.
2. Tombol tidak saling bertumpuk.
3. Pengguna dapat menyelesaikan simulasi tanpa memerlukan perangkat input yang tidak tersedia.
4. Tidak ada bagian penting yang hanya dapat diakses dengan hover mouse.

## 7. Edge Case dan Failure State

| ID | Kondisi | Perilaku sistem yang diharapkan | Prioritas |
|---|---|---|---|
| EC-01 | Siswa memeriksa jawaban saat masih ada slot kosong. | Sistem memberi tahu bahwa susunan belum lengkap atau memberikan penilaian parsial sesuai keputusan desain. | P0 |
| EC-02 | Siswa menempatkan dua kabel pada slot yang sama. | Sistem menolak penempatan kedua atau memindahkan kabel sebelumnya secara konsisten. | P0 |
| EC-03 | Siswa memindahkan kabel ke slot lain yang sudah terisi. | Sistem menerapkan aturan pemindahan yang konsisten dan tidak menggandakan identitas kabel. | P0 |
| EC-04 | Siswa salah menyusun satu warna. | Sistem menampilkan posisi yang salah dan memungkinkan perbaikan. | P0 |
| EC-05 | Siswa menekan reset. | Simulasi kembali ke keadaan awal sesuai aturan reset. | P0 |
| EC-06 | Siswa menggunakan perangkat layar sentuh. | Simulasi tetap dapat digunakan tanpa bergantung pada hover atau drag mouse. | P0 |
| EC-07 | Aset visual kabel gagal dimuat. | Sistem menampilkan fallback berupa label atau visual alternatif agar latihan tetap dapat dilanjutkan. | P0 |
| EC-08 | Pengguna membuka halaman langsung melalui URL atau memuat ulang halaman. | Website menampilkan halaman dengan aman dan tidak menghasilkan state yang tidak valid. | P1 |
| EC-09 | Siswa meninggalkan simulasi sebelum selesai. | Website tidak menganggap simulasi selesai jika seluruh posisi belum dinilai. | P1 |
| EC-10 | Siswa mengirim evaluasi dengan jawaban kosong. | Sistem menerapkan aturan jawaban kosong secara konsisten dan memberi tahu siswa. | P0 |
| EC-11 | Jumlah soal evaluasi tidak sesuai konfigurasi. | Sistem mencegah hasil yang salah dan menampilkan kegagalan secara terkendali. | P0 |
| EC-12 | Siswa mengulang evaluasi. | Sistem memulai percobaan baru sesuai aturan yang ditetapkan. | P1 |
| EC-13 | JavaScript mengalami error. | Sistem tidak menampilkan hasil simulasi atau evaluasi yang menyesatkan. | P0 |
| EC-14 | Layar terlalu sempit untuk menampilkan konektor. | Layout menyesuaikan ukuran layar atau menyediakan area simulasi yang dapat digeser secara terkontrol. | P0 |
| EC-15 | Siswa menganggap simulasi berhasil berarti kabel fisik pasti berfungsi. | Sistem menjelaskan bahwa hasil simulasi tidak menggantikan pengujian fisik. | P0 |
| EC-16 | Browser tidak mendukung salah satu interaksi yang digunakan. | Sistem menyediakan interaksi alternatif atau memberi tahu pengguna tentang keterbatasan yang relevan. | P1 |
| EC-17 | Checklist ditandai lengkap meskipun alat fisik sebenarnya tidak tersedia. | Sistem menjelaskan bahwa checklist berdasarkan konfirmasi pengguna, bukan deteksi alat nyata. | P1 |
| EC-18 | Pengguna menekan tombol secara berulang dengan cepat. | Sistem mencegah penghitungan ganda akibat event yang tumpang tindih. | P1 |

**Definisi prioritas:**
- **P0:** Wajib ditangani agar fitur inti berfungsi dengan benar dan aman.
- **P1:** Wajib ditangani sebelum rilis jika kondisi tersebut ditemukan pada pengujian yang relevan.

### 7.1 Failure state yang harus diuji

**Simulasi gagal dimulai**
- Sistem tidak boleh menampilkan simulasi kosong tanpa penjelasan.
- Pengguna harus memperoleh pesan kesalahan yang dapat dipahami.

**Penilaian tidak konsisten**
- Urutan yang sama harus menghasilkan nilai dan status yang sama.
- Hasil tidak boleh berubah hanya karena siswa mengubah urutan interaksi tanpa mengubah susunan akhir.

**Navigasi tidak berfungsi**
- Semua tombol utama harus mengarah ke tujuan yang sesuai.
- Tombol yang belum memiliki fungsi tidak boleh ditampilkan seolah-olah sudah aktif.

**Evaluasi tidak dapat diselesaikan**
- Pengguna harus memperoleh informasi tentang bagian yang belum lengkap.
- Sistem tidak boleh mengklaim lulus jika kriteria kelulusan belum terpenuhi.

**Visual tidak sesuai dengan data**
- Warna yang terlihat pada simulasi harus sesuai dengan label dan identitas warna yang digunakan sistem.
- Pemeriksaan otomatis harus berdasarkan identitas data, bukan sekadar warna piksel pada gambar.

## 8. Success Metrics

Keberhasilan produk perlu diukur melalui fungsi teknis dan hasil penggunaan. Target angka berikut merupakan **usulan awal**, bukan hasil pengukuran yang telah dilakukan.

### 8.1 Metrik kualitas produk

| ID | Metrik | Target awal | Cara pengukuran |
|---|---|---|---|
| SM-01 | Penyelesaian alur inti | 100% skenario pengujian inti berhasil | Pengujian fungsional dari landing page sampai hasil evaluasi. |
| SM-02 | Ketepatan pemeriksaan T568B | 100% untuk seluruh kasus uji yang ditetapkan | Pengujian urutan benar, satu kesalahan, beberapa kesalahan, dan slot kosong. |
| SM-03 | Responsivitas | Seluruh fitur inti dapat digunakan pada perangkat dalam cakupan pengujian | Pengujian desktop dan perangkat seluler. |
| SM-04 | Fungsi reset simulasi | 100% kasus reset kembali ke keadaan awal yang benar | Pengujian berulang pada berbagai susunan kabel. |
| SM-05 | Konsistensi penilaian | 100% hasil konsisten untuk input yang sama | Pengujian berulang menggunakan susunan dan jawaban identik. |
| SM-06 | Kegagalan fitur kritis | 0 kegagalan P0 yang belum terselesaikan saat rilis | Pengujian dan pencatatan bug sebelum publikasi. |

### 8.2 Metrik pembelajaran

| ID | Metrik | Target awal | Cara pengukuran |
|---|---|---|---|
| SM-07 | Penyelesaian pembelajaran | Minimal 80% pengguna uji menyelesaikan alur pembelajaran | Persentase pengguna uji yang mencapai evaluasi akhir. |
| SM-08 | Keberhasilan simulasi | Minimal 80% pengguna uji mencapai susunan benar setelah latihan | Persentase pengguna uji yang berhasil menyusun T568B. |
| SM-09 | Kelulusan evaluasi | Minimal 75% pengguna uji mencapai ambang kelulusan | Persentase pengguna uji yang lulus evaluasi. |
| SM-10 | Pemahaman urutan warna | Minimal 80% pengguna uji mengidentifikasi delapan warna dengan benar setelah belajar | Pengujian pemahaman atau soal khusus urutan warna. |

Target metrik pembelajaran harus dievaluasi ulang setelah pengujian awal bersama siswa kelas X TJKT. Target tersebut tidak boleh langsung dianggap sebagai bukti bahwa website meningkatkan kemampuan siswa.

### 8.3 Metrik pengalaman pengguna

| ID | Metrik | Target awal | Cara pengukuran |
|---|---|---|---|
| SM-11 | Kemudahan penggunaan simulasi | Minimal 80% peserta uji menyelesaikan tugas simulasi tanpa bantuan langsung | Observasi pengujian kegunaan. |
| SM-12 | Kejelasan umpan balik | Minimal 80% peserta uji memahami kesalahan yang ditampilkan | Kuesioner atau wawancara setelah latihan. |
| SM-13 | Kemudahan navigasi | Minimal 80% peserta uji menemukan materi dan evaluasi yang diminta | Pengujian tugas navigasi. |

### 8.4 Metrik yang tidak dapat diklaim langsung

Tanpa penelitian atau data pembanding, produk tidak boleh mengklaim bahwa website:
- Meningkatkan hasil belajar dengan persentase tertentu.
- Meningkatkan kemampuan praktik fisik secara langsung.
- Mengurangi kerusakan alat dalam kegiatan laboratorium.
- Mengurangi waktu pembelajaran dibandingkan metode lain.

Klaim tersebut membutuhkan pengukuran empiris yang sesuai.

### 8.5 Rencana pengukuran awal

1. Uji seluruh fitur inti menggunakan skenario yang terdokumentasi.
2. Uji simulasi menggunakan kombinasi urutan benar dan salah.
3. Uji tampilan pada desktop dan perangkat seluler.
4. Lakukan uji kegunaan dengan siswa yang mewakili target pengguna.
5. Catat bagian yang menyebabkan kesalahan, kebingungan, atau kegagalan menyelesaikan pembelajaran.
6. Sesuaikan target metrik berdasarkan hasil pengujian awal.

## 9. Open Questions

Pertanyaan berikut perlu dijawab sebelum implementasi dimulai. Keputusan yang belum ditetapkan tidak boleh diasumsikan sebagai requirement final.

| ID | Pertanyaan terbuka | Mengapa penting? | Dampak jika belum diputuskan |
|---|---|---|---|
| OQ-01 | Apakah website harus sepenuhnya berjalan tanpa backend dan database? | Menentukan arsitektur aplikasi. | Memengaruhi penyimpanan progres dan hasil evaluasi. |
| OQ-02 | Apakah progres pembelajaran harus tersimpan setelah browser ditutup? | Menentukan kebutuhan penyimpanan lokal atau server. | Progres mungkin hilang saat sesi berakhir. |
| OQ-03 | Apakah checklist alat dan bahan hanya untuk latihan digital atau menjadi syarat sebelum melanjutkan? | Menentukan aturan alur pembelajaran. | Menentukan apakah pengguna boleh melewati checklist. |
| OQ-04 | Apakah simulasi hanya menggunakan drag-and-drop atau juga menyediakan klik kabel lalu klik slot? | Menentukan interaksi yang harus dibangun. | Memengaruhi desain dan pengujian aksesibilitas. |
| OQ-05 | Apakah visual realistis harus berupa ilustrasi SVG, gambar, atau model 3D? | Menentukan kompleksitas aset dan implementasi. | Memengaruhi waktu pengembangan dan performa. |
| OQ-06 | Apakah siswa harus menyelesaikan materi secara berurutan atau bebas memilih modul? | Menentukan aturan navigasi. | Memengaruhi logika progres dan akses simulasi. |
| OQ-07 | Berapa jumlah soal evaluasi akhir dan jenis soal yang digunakan? | Menentukan desain evaluasi. | Soal dan sistem penilaian belum dapat difinalisasi. |
| OQ-08 | Berapa nilai minimum untuk dinyatakan lulus? | Menentukan logika kelulusan. | Status lulus belum dapat ditentukan secara konsisten. |
| OQ-09 | Apakah siswa boleh mengulang evaluasi tanpa batas? | Menentukan aturan percobaan. | Memengaruhi perilaku pengulangan evaluasi. |
| OQ-10 | Apakah nilai simulasi dan nilai evaluasi akhir digabungkan? | Menentukan model penilaian. | Nilai akhir belum dapat dihitung. |
| OQ-11 | Apakah tujuan pembelajaran harus mengikuti rumusan capaian pembelajaran atau modul ajar tertentu yang digunakan sekolah? | Memastikan kesesuaian materi dengan pembelajaran formal. | Rumusan tujuan pembelajaran belum final. |
| OQ-12 | Apakah website akan digunakan sebagai media pembelajaran mandiri atau dipandu guru di kelas? | Menentukan kebutuhan petunjuk, navigasi, dan evaluasi. | Pengalaman pengguna mungkin perlu disesuaikan. |
| OQ-13 | Apakah pengujian menggunakan LAN tester hanya dijelaskan melalui materi atau juga divisualisasikan dalam animasi? | Menentukan ruang lingkup aset dan interaksi. | Detail fitur panduan pengujian belum final. |
| OQ-14 | Browser dan perangkat minimum apa yang harus didukung? | Menentukan cakupan kompatibilitas. | Pengujian lintas perangkat belum dapat ditetapkan sepenuhnya. |
| OQ-15 | Apakah diperlukan penyimpanan hasil siswa atau pemantauan oleh guru pada versi pertama? | Menentukan apakah kebutuhan backend perlu dimasukkan ke MVP. | Arsitektur frontend-only mungkin tidak mencukupi. |

## Ringkasan Keputusan Produk

| Aspek | Keputusan saat ini |
|---|---|
| Produk | Website pembelajaran membuat kabel straight-through. |
| Pengguna utama | Siswa SMK TJKT Fase E/Kelas X. |
| Teknologi | HTML, Vanilla JavaScript, dan Tailwind CSS. |
| Fokus materi | Kabel UTP Cat 5e, alat dan bahan, keselamatan kerja, standar T568B, prosedur pembuatan, dan pengujian kabel. |
| Fitur utama | Simulasi realistis penyusunan delapan warna kabel pada konektor RJ45. |
| Mekanisme simulasi | Drag-and-drop dengan pemeriksaan otomatis dan umpan balik. |
| Evaluasi | Evaluasi akhir dengan perhitungan skor dan status kelulusan. |
| Responsivitas | Desktop dan perangkat seluler. |
| Kriteria rilis | Fitur inti berjalan, simulasi dinilai dengan benar, evaluasi dapat diselesaikan, dan tidak ada kegagalan P0 yang belum terselesaikan. |
| Keputusan yang belum final | Penyimpanan progres, detail penilaian, aturan navigasi, aset visual, dan kebutuhan pemantauan guru. |

**Prioritas pengembangan:** Bangun alur inti yang menghubungkan materi T568B, simulasi penyusunan warna, pemeriksaan jawaban otomatis, panduan pembuatan kabel, dan evaluasi akhir. Seluruh fitur tersebut harus berjalan konsisten sebelum pengembangan fitur tambahan dilakukan.
