import axios from 'axios';

export default async function handler(req, res) {
	const { id } = req.query;

	try {
		const response = await axios.get(
			`http://localhost:3000/vehicle/${id}/owner`
		);
		res.status(200).json(response.data);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
