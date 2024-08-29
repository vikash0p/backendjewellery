import Jewellery from "../models/jewelleryModels.js";

// Create a new jewellery item
export const createJewellery = async (req, res) => {
    try {
        const newJewellery = new Jewellery(req.body);
        const savedJewellery = await newJewellery.save();
        res.status(201).json(savedJewellery);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a jewellery item by ID
export const getJewelleryById = async (req, res) => {
    const id = req.params.id;
    try {
        const singleJewellery = await Jewellery.findById(id);
        if (!singleJewellery) {
            return res.status(404).json({ message: 'Jewellery not found' });
        }

        res.json(singleJewellery);
    } catch (error) {
        res.status(500).json({ message: error.message });

    }

};

// Get all jewellery items
export const getAllJewellery = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 12;
        let skip = (page - 1) * limit;

        // Apply pagination with skip and limit
        const jewelleryList = await Jewellery.find().skip(skip).limit(limit);

        // Get the total number of items for calculating total pages
        const totalItems = await Jewellery.countDocuments();
        const totalPages = Math.ceil(totalItems / limit);

        res.json({
            jewelleryList,
            page,
            totalPages,
            totalItems,
            hasNextPage: page < totalPages,
            hasPreviousPage: page > 1,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a jewellery item by ID
export const updateJewelleryById = async (req, res) => {
    try {
        const updatedJewellery = await Jewellery.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedJewellery) {
            return res.status(404).json({ message: 'Jewellery not found' });
        }
        res.json(updatedJewellery);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a jewellery item by ID
export const deleteJewelleryById = async (req, res) => {
    try {
        const deletedJewellery = await Jewellery.findOneAndDelete({ id: req.params.id });
        if (!deletedJewellery) {
            return res.status(404).json({ message: 'Jewellery not found' });
        }
        res.json({ message: 'Jewellery deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
