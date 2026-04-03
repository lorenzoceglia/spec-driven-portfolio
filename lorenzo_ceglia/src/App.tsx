import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";

export function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex flex-col min-h-screen">
			<Header>
				<h1 className="text-2xl font-bold">React App</h1>
			</Header>

			<Section>
				<div className="space-y-4">
					<p className="text-gray-700">Welcome to your React application with base components!</p>
					<button
						type="button"
						className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded"
						onClick={() => setCount(count + 1)}
					>
						Count: {count}
					</button>
				</div>
			</Section>

			<Footer>
				<p>&copy; 2026 React App. All rights reserved.</p>
			</Footer>
		</div>
	);
}
