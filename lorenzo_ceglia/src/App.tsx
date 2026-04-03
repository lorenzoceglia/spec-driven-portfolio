import { useState } from "react";

export function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>React App</h1>
			<button
				className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded"
				onClick={() => setCount(count + 1)}
			>
				Count: {count}
			</button>
		</div>
	);
}
