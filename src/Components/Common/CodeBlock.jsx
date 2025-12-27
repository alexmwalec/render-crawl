import React, { useState } from 'react';

const CodeBlock = ({ code, filename = 'example.js' }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch (err) {
			// ignore clipboard errors silently
		}
	};

	return (
		<div className="mt-8 rounded-xl overflow-hidden shadow-lg bg-[#0b1220] border border-gray-800">
			<div className="flex items-center justify-between gap-2 px-4 py-3 bg-[#071026] border-b border-gray-800">
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 rounded-full bg-red-500" />
					<div className="w-3 h-3 rounded-full bg-yellow-500" />
					<div className="w-3 h-3 rounded-full bg-green-500" />
					<span className="ml-2 text-xs text-gray-400 font-mono">{filename}</span>
				</div>

				<div className="flex items-center gap-2">
					<button
						onClick={handleCopy}
						className="text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded text-gray-200 transition"
						aria-label="Copy code"
					>
						{copied ? 'Copied' : 'Copy'}
					</button>
				</div>
			</div>

			<div className="p-6 overflow-x-auto">
				<pre className="font-mono text-sm text-blue-100 whitespace-pre-wrap"><code>{code}</code></pre>
			</div>
		</div>
	);
};

export default CodeBlock;

