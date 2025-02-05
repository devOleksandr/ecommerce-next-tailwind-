declare module '*.svg?component' {
	import React from 'react';
	const SVGComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVGComponent;
}

declare module '*.svg' {
	const src: string;
	export default src;
}