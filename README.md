# SIGIZI 

Sistem Integrasi Pelayanan dan Pengawasan Pengadaan Makan Bergizi Gratis.

Aplikasi ini adalah web app berbasis Next.js untuk mendukung pengadaan MBG (Makan Bergizi Gratis) secara lebih transparan, terstruktur, dan mudah dipantau oleh berbagai peran operasional.

## Catatan

- Fokus implementasi saat ini adalah frontend dan pengalaman dashboard.
- Integrasi backend, autentikasi, dan penyimpanan data permanen belum diaktifkan.
- Data yang ditampilkan berupa simulasi untuk validasi alur kerja dan tampilan.
- Proyek ini dibuat untuk kebutuhan portofolio (demo) sehingga alur akses saat ini masih disederhanakan.
- Pada implementasi nyata, setiap dashboard akan memiliki akses terpisah berbasis akun/role, sehingga tidak dapat diakses langsung dari dashboard lain tanpa autentikasi yang sesuai.

## Ringkasan

SIGIZI menyediakan:
- Landing page informasi produk dan alur kerja.
- Dashboard operasional SPPG untuk pengajuan menu, pengelolaan sekolah, transaksi supplier, dan monitoring distribusi.
- Dashboard pengawasan BGN untuk memantau proposal multi-SPPG, transparansi anggaran, anomali, feedback sekolah, dan insiden.
- Seluruh data saat ini menggunakan data dummy/mock untuk simulasi alur frontend.

## Fitur Utama

### 1. Landing Page
Menampilkan informasi solusi secara ringkas:
- Hero section dan identitas produk.
- Daftar dashboard yang tersedia.
- Penjelasan fitur, workflow, dan teknologi.

### 2. Dashboard SPPG
Fokus pada alur operasional unit SPPG:
- Proposal pengadaan menu mingguan.
- Perencanaan bahan baku per hari.
- Estimasi biaya total, biaya per porsi, dan persentase terhadap anggaran.
- Tambah dan kelola data sekolah penerima manfaat.
- Status pencairan dana.
- Transaksi dan penerimaan bahan dari supplier.
- Monitoring pengadaan dan laporan feedback.

### 3. Dashboard BGN
Fokus pada pengawasan lintas SPPG:
- Rekap proposal dari beberapa SPPG.
- Laporan transparansi anggaran dan realisasi.
- Deteksi dan analisis anomali pengadaan.
- Rekap feedback sekolah (rating, food waste, kesesuaian).
- Pelaporan insiden dan status penanganannya.
- KPI ringkas dan filter periode/wilayah/SPPG.

## Teknologi yang Digunakan

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Komponen UI berbasis Radix/shadcn
- Vercel Analytics

## Struktur Halaman (Route)

- `/` : Landing page SIGIZI Guard
- `/sppg-dashboard` : Dashboard operasional SPPG
- `/bgn-dashboard` : Dashboard pengawasan BGN
- `/school-dashboard` : Dashboard sekolah (modul tambahan)
- `/supplier-dashboard` : Dashboard supplier (modul tambahan)

## Cara Menjalankan Lokal

1. Install dependency:

```bash
npm install
```

2. Jalankan server development:

```bash
npm run dev
```

3. Buka di browser:

- http://localhost:3000
- Jika port 3000 dipakai, Next.js biasanya pindah ke port lain (misal 3001).

## Script NPM

- `npm run dev` : Menjalankan mode development
- `npm run build` : Build production
- `npm run start` : Menjalankan hasil build
- `npm run lint` : Menjalankan linting