import { useState } from 'react';

export default function Transfer() {
	const [id, setId] = useState('');
	const [newOwner, setNewOwner] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch('/api/transferVehicle', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id, newOwner }),
		});

		const data = await response.json();
		console.log(data);
	};

	return (
		<div>
			<h2>Transfer Vehicle</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Vehicle ID:
					<input
						type="text"
						value={id}
						onChange={(e) => setId(e.target.value)}
						required
					/>
				</label>
				<label>
					New Owner:
					<input
						type="text"
						value={newOwner}
						onChange={(e) => setNewOwner(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Transfer</button>
			</form>
		</div>
	);
}
