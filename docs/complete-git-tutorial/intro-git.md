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

description
