// Ebenhaezer George Renaldi Muljadi - 2702230461

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json("API READY")
})

let products = [
    { id: 1, nama: "Laptop Gaming", harga: 15000000 },
    { id: 2, nama: "Mouse Wireless", harga: 150000 }
];

app.get('/api/products', (req, res) => {
    res.json({
        message: "Berhasil mengambil semua data",
        data: products
    });
});

app.get('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (product) {
        res.json({ message: "Detail produk ditemukan", data: product });
    } else {
        res.status(404).json({ message: "Produk tidak ditemukan" });
    }
});

app.post('/api/products', (req, res) => {
    const newProduct = {
        id: products.length + 1, 
        nama: req.body.nama,
        harga: req.body.harga
    };
    products.push(newProduct);
    
    res.status(201).json({
        message: "Data berhasil ditambahkan",
        data: newProduct
    });
});

app.put('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex !== -1) {
        products[productIndex] = {
            id: id,
            nama: req.body.nama,
            harga: req.body.harga
        };

        res.json({
            message: "Data berhasil di-update",
            data: products[productIndex]
        });
    } else {
        res.status(404).json({ message: "Produk tidak ditemukan, gagal update" });
    }
});

app.delete('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex !== -1) {
        const deletedProduct = products.splice(productIndex, 1);
        res.json({
            message: "Data berhasil dihapus",
            data: deletedProduct
        });
    } else {
        res.status(404).json({ message: "Produk tidak ditemukan, gagal hapus" });
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

// Ebenhaezer George Renaldi Muljadi - 2702230461