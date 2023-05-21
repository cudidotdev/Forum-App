export default function outclick(node: HTMLElement, callback: () => void) {
	function handle_click(event: MouseEvent) {
		if (!node.contains(event.target as Node)) callback();
	}

	document.addEventListener('click', handle_click, true);

	return {
		destroy() {
			document.removeEventListener('click', handle_click, true);
		}
	};
}
