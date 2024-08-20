import axios from 'axios';

export default async function handler(req, res) {
	const { brand, owner } = req.body;

	try {
		const response = await axios.post(
			'http://localhost:3000/vehicle/register',
			{
				brand,
				owner,
			}
		);
		res.status(200).json(response.data);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
