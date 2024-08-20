import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<h1>Vehicle Supply Chain Management</h1>
			<ul>
				<li>
					<Link href="/register">Register Vehicle</Link>
				</li>
				<li>
					<Link href="/transfer">Transfer Vehicle</Link>
				</li>
				<li>
					<Link href="/receive">Check Vehicle Owner</Link>
				</li>
			</ul>
		</div>
	);
}
