import FoodItem from "../models/foodItemModel.js";
import ListMenu from "../models/listMenuModel.js";

// Membuat menu baru
export const createListMenu = async (req, res) => {
    const { details } = req.body;
    try {
        const listMenu = await ListMenu.create({
            details
        });
        res.status(201).json(listMenu);
    } catch (err) {
        res.status(500).json({ error: err, pesan: "Tidak dapat membuat menu" });
    }
};



// Mendapatkan semua menu
export const getAllListMenu = async (req, res) => {
    try {
        const listMenu = await ListMenu.findAll({
            include:{
                model:FoodItem,
                as:'foodItem'
            }
        });
        res.status(200).json(listMenu);
    } catch (err) {
        res.status(500).json({ error: err, pesan: "Tidak dapat menemukan menu" });
    }
};

// Mendapatkan menu berdasarkan ID
export const getListMenuById = async (req, res) => {
    const { id } = req.params;
    try {
        const listMenu = await ListMenu.findByPk(id,{
            include:FoodItem
        });
        if (listMenu) {
            res.status(200).json(listMenu);
        } else {
            res.status(404).json({ pesan: "Menu tidak ditemukan" });
        }
    } catch (err) {
        res.status(500).json({ pesan: "Kesalahan saat mengambil menu", error: err });
    }
};

// Memperbarui menu
export const updateListMenu = async (req, res) => {
    const { id } = req.params;
    const { details } = req.body;
    try {
        const listMenu = await ListMenu.findByPk(id);
        if (listMenu) {
            await listMenu.update({ details });
            res.status(200).json({ pesan: "Menu berhasil diperbarui", data: listMenu });
        } else {
            res.status(404).json({ pesan: "Menu tidak ditemukan" });
        }
    } catch (err) {
        res.status(500).json({ pesan: "Kesalahan saat memperbarui menu", error: err });
    }
};

// Menghapus menu
export const deleteListMenu = async (req, res) => {
    const { id } = req.params;
    try {
        const listMenu = await ListMenu.findByPk(id);
        if (listMenu) {
            await listMenu.destroy();
            res.status(200).json({ pesan: "Menu berhasil dihapus" });
        } else {
            res.status(404).json({ pesan: "Menu tidak ditemukan" });
        }
    } catch (err) {
        res.status(500).json({ pesan: "Kesalahan saat menghapus menu", error: err });
    }
};
