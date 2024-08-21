import mongoose from 'mongoose';

// Define the schema for the jewellery items
const jewellerySchema = new mongoose.Schema({
    // id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    inStock: { type: Boolean, required: true },
    materials: { type: [String], required: true },
    sizes: { type: [String], required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true }
});

// Create the model from the schema
const Jewellery = mongoose.model('Jewellery', jewellerySchema);

export default Jewellery;
