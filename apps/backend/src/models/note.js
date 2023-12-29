// Import the mongoose library
import mongoose from 'mongoose';

// Define the note's database schema
const noteSchema = new mongoose.Schema(
	{
		content: { type: String, required: true },
		author: {
			type: String,
			required: true,
		},
	},
	{
		// Assigns createdAt and updatedAt fields with a Date type
		timestamps: true,
	},
);
// Define the 'Note' model with the schema
const Note = mongoose.model('Note', noteSchema); // Export the module
export default Note;