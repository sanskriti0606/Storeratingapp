import { createStore, getAllStores, getStoreById } from '../models/storeModel.js';

export const addStore = async (req, res) => {
  try {
    const { name, description, ownerId } = req.body;
    const newStore = await createStore(name, description, ownerId);
    res.status(201).json({ message: 'Store added successfully', store: newStore });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listStores = async (req, res) => {
  try {
    const stores = await getAllStores();
    res.status(200).json(stores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
