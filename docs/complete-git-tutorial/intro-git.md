---
sidebar_position: 1
---

# Pengantar Git

Git adalah _version control system_ (VCS) yang paling banyak digunakan dalam pengembangan perangkat lunak modern. Hampir setiap tim perangkat lunak, perusahaan rintisan kecil, komunitas _open-source_, perusahaan besar, menggunakan Git untuk melacak perubahan, berkolaborasi, dan memelihara _codebase_ mereka.

## Apa itu Git?

Git adalah sistem kendali versi terdistribusi yang diciptakan pada tahun 2005 oleh Linus Torvalds, pencipta Linux.
Awalnya dirancang untuk mengelola kode sumber kernel Linux yang masif dan cepat.

Tujuan Git sejak awal adalah:

- **Kecepatan**\
  Git harus menangani repositori besar dengan cepat.
- **Arsitektur Terdistribusi**\
  Setiap pengembang memiliki salinan lengkap riwayat proyek di mesin mereka.
- **Dukungan Kuat untuk Percabangan & Penggabungan**\
  Pengembang harus dapat bereksperimen dengan bebas tanpa mengganggu orang lain.
- **Integritas Data**\
  Git menggunakan hash SHA-1 / SHA-256 untuk melindungi integritas semua data.

Git menjadi populer karena memecahkan masalah kolaborasi di dunia nyata dan dapat diskalakan dari pengembang tunggal hingga tim global.

## Git vs VCS Lainnya (SVN, Mercurial) - Perbedaan Dasar

| Fitur                   | Git (Distributed)                                            | SVN (Centralized)                | Mercurial (Distributed)                 |
| ----------------------- | ------------------------------------------------------------ | -------------------------------- | --------------------------------------- |
| Repository Type         | Fully distributed — setiap pengguna memiliki salinan lengkap | Centralized — repo utama tunggal | Distributed                             |
| Speed                   | Sangat cepat (terutama percabangan, penggabungan)            | Lebih lambat                     | Cepat tetapi tidak diadopsi secara luas |
| Branching (Percabangan) | Murah & Mudah                                                | Berat & kompleks                 | Mudah                                   |
| Kepopuleran             | Sangat tinggi (standar industri)                             | Kurang                           | Sedang                                  |
| Kerjaan Offline         | Ya, riwayat lengkap tersedia                                 | Sangat terbatas                  | Ya                                      |
| Learning Curve          | Sedang                                                       | Mudah                            | Mudah                                   |

**Sederhananya:**\
Git adalah yang paling canggih dan fleksibel, tetapi mungkin terasa rumit pada awalnya.
SVN lebih sederhana tetapi terbatas.
Mecurial mirip dengan Git tetapi kurang umum digunakan saat ini.

## Mengapa Menggunakan Git? (Manfaat)

Berikut adalah alasan utama mengapa sebagian besar pengembang dan perusahaan memilih Git:

### 1. Kolaborasi

Banyak orang dapat bekerja pada basis kode yang sama tanpa saling menimpa pekerjaan.

### 2. Melacak Setiap Perubahan

Setiap perubahan disimpan sebagai sebuah komitmen. Anda dapat:

- Melihat siapa yang mengubah apa
- Mengembalikan kesalahan
- Membandingkan versi
- Memulihkan kode yang dihapus

### 3. Terdistribusi & Offline

Semuanya—termasuk riwayat lengkap—disimpan secara lokal, sehingga Anda dapat:

- Berkomitmen secara offline
- Membuat cabang secara offline
- Menjelajahi riwayat tanpa koneksi internet

### 4. Eksperimen yang Aman (Percabangan)

Membuat cabang tanpa mengganggu proyek utama:

```
feature/login
feature/payment
bugfix/incorrect-total
```

Percabangan di Git sangat ringan.

### 5. Performa Luar Biasa

Git dioptimalkan untuk kecepatan:

- Commit cepat
- Diff cepat
- Merging cepat
- Cloning dan fetching (pengambilan) cepat

### 6. Standar Industri

Git digunakan di mana-mana:

- GitHub
- GitLab
- Bitbucket
- Azure DevOps
- Proyek _open-source_

Mengenal Git merupakan keterampilan dasar yang dibutuhkan dalam pengembangan perangkat lunak modern.

## Git Concepts Overview

Sebelum menulis perintah Git pertama Anda, Anda perlu memahami beberapa konsep inti:

### 1. Repositori (Repo)

Repositori adalah folder yang dilacak oleh Git.\
Repositori berisi:

- Berkas proyek Anda
- Seluruh riwayat perubahan
- Metadata yang disimpan di .git/

Anda dapat membuatnya dengan:

```
git init
```

atau dengan clone repositori yang ada:

```
git clone <url>
```

### 2. Commit

Commit adalah snapshot file Anda pada titik waktu tertentu. Setiap komitmen harus mewakili unit perubahan yang bermakna.

```
git commit -m "Add user login API"
```

Sebuah commit terdapat:

- Author
- Timestamp
- Changes
- Hash (ID unik)

### Branch (cabang)

Cabang adalah penunjuk yang dapat dipindahkan ke serangkaian commit.

branch umum:

- `main` (atau `master`) — baris stabil utama
- feature branch — cabang fitur
- bugfix branch — cabang perbaikan bug

Buat branch baru:

```
git branch feature/homepage
atau
git switch feature/homepage
atau
git checkout -b feature/homepage
```

### 4. Remote

Remote adalah repositori yang dihosting di tempat lain (misalnya, GitHub).

Nama umum remote: `origin`

Anda push dan pull perubahan ke/dari remote:

```
// mengirim perubahan ke remote
git push origin main
// menerima perubahan dari remote
git pull origin main
```

### 5. Staging Area

Area staging adalah ruang perantara antara direktori kerja dan commit Anda.

Alur kerja (_workflow_):

1. Ubah files
2. File stage → git add
3. Commit → git commit

Contoh:

```
git add index.js
git commit -m "Fix login redirect bug"
```

Ini memberi Anda kendali penuh atas apa yang menjadi bagian dari komitmen Anda berikutnya.
