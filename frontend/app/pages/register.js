import { useState } from 'react';

export default function Register() {
	const [brand, setBrand] = useState('');
	const [owner, setOwner] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch('/api/registerVehicle', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ brand, owner }),
		});

		const data = await response.json();
		console.log(data);
	};

	return (
		<div>
			<h2>Register Vehicle</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Brand:
					<input
						type="text"
						value={brand}
						onChange={(e) => setBrand(e.target.value)}
						required
					/>
				</label>
				<label>
					Owner:
					<input
						type="text"
						value={owner}
						onChange={(e) => setOwner(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Register</button>
			</form>
		</div>
	);
}
