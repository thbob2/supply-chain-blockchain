import { useState } from 'react';

export default function Receive() {
	const [id, setId] = useState('');
	const [owner, setOwner] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(`/api/getVehicleOwner?id=${id}`);
		const data = await response.json();
		setOwner(data);
	};

	return (
		<div>
			<h2>Check Vehicle Owner</h2>
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
				<button type="submit">Check Owner</button>
			</form>
			{owner && (
				<div>
					<h3>Owner: {owner}</h3>
				</div>
			)}
		</div>
	);
}
