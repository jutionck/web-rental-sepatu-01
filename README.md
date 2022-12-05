# Livecode 4 - Rental Sepatu

Seorang klien, yang berprofesi sebagai pengusaha sepatu, ingin mengembangkan bisnis jual beli sepatu dengan berinovasi meminjamkan sepatu kepada orang yang membutuhkan. Kebutuhan dari klien adalah sbb.

1. Manajemen transaksi data peminjaman sepatu.
2. Biaya pinjaman sepatu per hari Rp. 10.000.
3. Maksimal lama durasi peminjaman hanya 3 hari.
4. Jika lebih dari 3 hari, ada denda Rp. 5000 per hari.
5. Jika sepatu kembali dalam keadaan rusak, maka akan dikenakan denda sebesar Rp. 10.000.
6. Ada page laporan berbentuk tabel berisikan transaksi peminjaman sepatu.
7. Ada page form untuk input data pinjaman sepatu.
8. Ada page form untuk input data pengembalian pinjaman sepatu.

## Petunjuk Teknis

Berdasarkan kebutuhan di atas, maka spesifikasi yang harus dipenuhi oleh developer adalah sebagai berikut.

### Aturan

1. Kerjakan sendiri dengan kemampuan sendiri untuk mengetahui sejauh mana penguasaan kalian di materi React JS fundamental ini.
2. Buatlah `project react` baru sebelum memulai livecode.
3. Buatlah repository gitlab enigmacamp baru, di dalam group `Livecode`, dengan nama `livecode-4`.
4. Push kembali file soal ini ke repository project react kalian, baru setelah itu bisa mulai mengerjakan.

### Objek

```tsx
class Transaction {
  id: string;
  shoe: string;
  wearer: string;
  duration: number;
  borrowedAt: string;
  returnedAt: string;
  payment: number;
  fine: number;
  status: string;
}
```

### Kriteria Penilaian

1. Gunakan state dan props untuk manajemen data antar komponen.
2. Harus ada minimal 3 komponen utama, yaitu `ShoeRentalPage`, `ShoeRentalList`, `ShoeRentalForm`.
3. Komponen `ShoeRentalPage` menjadi state manager dari **tiga** komponen lain.
4. Komponen `ShoeRentalList` berupa tabel yang menampilkan data `Transaction` dengan judul seperti berikut:
   1. # (nomor baris)
   2. Nama Sepatu
   3. Nama Peminjam
   4. Tgl. Pinjam
   5. Tgl. Kembali
   6. Total Bayar
   7. Total Denda
   8. Kondisi Sepatu (Rusak, Baik)
   9. Status (Dipinjam, Kembali, Telat)
5. Komponen `ShoeRentalForm` berupa form yang menampilkan field sebagai berikut:
   1. Sepatu (input nama/jenis sepatu)
   2. Nama Peminjam
   3. Tgl. Pinjam
   4. Durasi Pinjam (min 1 hari, maks 3 hari, boleh dibuat dropdown)
6. Komponen `ShoeRentalForm` akan memunculkan field seperti pada point 5, beserta tambahan field berikut jika mengirimkan object `Transaction` ke dalamnya:

   1. Tgl. Kembali
   2. Kondisi sepatu (Rusak, Baik)
   3. Status (Kembali, Telat)
   4. Total Bayar (form readonly, dihitung berdasarkan durasi)
   5. Total Denda (form readonly, dihitung otomatis sesuai kondisi sepatu rusak/hilang)

   > Field **Status** akan terisi otomatis **Kembali** jika tanggal kembali tepat waktu atau lebih awal, dan akan terisi **Telat** jika tanggal kembali melewati durasi pinjam.

7. Aplikasi yang berjalan sesuai persyaratan akan menjadi nilai utama yang mendapatkan porsi nilai **paling besar**.
8. Code sudah ditulis sesuai persyaratan kriteria penilaian akan mendapatkan nilai **kedua tertinggi**.
9. Tampilan aplikasi yang rapih akan mendapat **nilai tambah**.
10. Form dengan validasi akan mendapatkan **nilai tambah**.
