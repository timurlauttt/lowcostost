# Dokumentasi API Hosting Order

Dokumentasi ini menjelaskan endpoint yang tersedia untuk integrasi fitur pemesanan dan pengecekan status hosting.

## Base URL
`/api`

---

## 1. Master Data
Endpoint untuk mengambil data paket hosting dan list hosting.

### A. List Semua Paket Hosting
- **URL**: `/api/packages`
- **Method**: `GET`
- **Parameter Query (Opsional)**:
  - `hosting_id`: Filter berdasarkan ID hosting
  - `free_domain`: Filter paket dengan domain gratis (1/0)
  - `duration_type`: window (week/month)

### B. List Paket Group by Hosting
- **URL**: `/api/packages/grouped`
- **Method**: `GET`
- **Keterangan**: Mengembalikan list hosting beserta paket-paket di dalamnya. Cocok untuk tampilan pricing list.

### C. List Semua Hosting
- **URL**: `/api/hostings`
- **Method**: `GET`
- **Keterangan**: Mengembalikan list hosting saja. Cocok untuk dropdown "Pilih Hosting (Manual)" di form order.

---

## 2. Membuat Order Baru
Endpoint ini digunakan untuk membuat pesanan hosting baru.

- **URL**: `/api/orders`
- **Method**: `POST`
- **Content-Type**: `multipart/form-data` (karena ada upload file)

### Parameter Body
| Parameter | Tipe | Wajib | Keterangan |
|-----------|------|-------|------------|
| `nama_lengkap` | String | Ya | Nama lengkap pemesan |
| `nomor_whatsapp` | String | Ya | Nomor WhatsApp aktif (maks 20 karakter) |
| `hosting_package_id` | Integer | Tidak | ID paket hosting yang dipilih |
| `hosting_id` | Integer | Tidak | ID hosting (jika tidak memilih paket) |
| `tipe_paket` | String | Ya | `hosting_only` atau `hosting_domain` |
| `durasi_bulan` | Integer | Ya | `1`, `3`, `6`, atau `12` |
| `pilihan_domain` | String | Tidak | Jenis domain (misal: `subdomain_gratis`, `domain_com`) |
| `nama_domain` | String | Tidak | Nama domain yang diinginkan |
| `framework` | String | Tidak | Framework yang digunakan (Laravel, CI, dll) |
| `link_gdrive_project` | URL | Tidak | Link Google Drive file project |
| `file_database` | File | Tidak | File database (.sql, .txt, max 50MB) |
| `catatan_tambahan` | String | Tidak | Catatan tambahan |
| `total_harga` | Number | Ya | Total harga pesanan |
| `bukti_pembayaran` | File | Tidak | File bukti pembayaran (.jpg, .png, .pdf, max 5MB) |

### Response Sukses (201 Created)
```json
{
    "success": true,
    "message": "Order berhasil dibuat",
    "data": {
        "id": 1,
        "nama_lengkap": "John Doe",
        "resi": "LCH-20260111-XH5A",
        "status": "pending",
        ...
    }
}
```

---

## 2. Cek Status Order
Endpoint publik untuk mengecek status pesanan berdasarkan domain, ID order, atau nomor resi.

- **URL**: `/api/orders/check-status`
- **Method**: `GET`

### Parameter Query
| Parameter | Tipe | Wajib | Keterangan |
|-----------|------|-------|------------|
| `keyword` | String | Ya | Bisa berupa `nama_domain`, `id` order, atau `resi` |

### Response Sukses (200 OK)
```json
{
    "success": true,
    "data": {
        "id": 1,
        "nama_domain": "example.com",
        "status": "pending", // pending, paid, processing, completed, cancelled
        "status_label": "Menunggu Pembayaran",
        "paket": "Small Hosting 1 Bulan",
        "total_harga": 50000.00,
        "created_at": "2026-01-11T10:00:00.000000Z",
        "resi": "LCH-20260111-XH5A"
    }
}
```

### Response Tidak Ditemukan (404 Not Found)
```json
{
    "success": false,
    "message": "Order tidak ditemukan"
}
```

---

## 3. Upload Bukti Pembayaran
Endpoint untuk mengupload bukti transfer jika belum diupload saat pembuatan order.

- **URL**: `/api/orders/{id}/payment-proof`
- **Method**: `POST`
- **Content-Type**: `multipart/form-data`

### Parameter Body
| Parameter | Tipe | Wajib | Keterangan |
|-----------|------|-------|------------|
| `bukti_pembayaran` | File | Ya | File gambar/pdf bukti transfer (max 5MB) |

### Response Sukses (200 OK)
```json
{
    "success": true,
    "message": "Bukti pembayaran berhasil diupload",
    "data": {
        "id": 1,
        "status": "paid",
        "bukti_pembayaran": "payment_proofs/1736582400_transfer.jpg",
        ...
    }
}
```

---

## 4. Get Detail Order
Mendapatkan detail lengkap satu order berdasarkan ID.

- **URL**: `/api/orders/{id}`
- **Method**: `GET`

### Response Sukses (200 OK)
```json
{
    "success": true,
    "data": {
        "id": 1,
        "nama_lengkap": "John Doe",
        ...
        "hosting_package": {
             "id": 1,
             "nama_paket": "Small Hosting"
        }
    }
}
```
