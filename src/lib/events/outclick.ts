export default function outclick(node: HTMLElement, callback: () => void) {
	function handle_click(event: MouseEvent) {
		const style = window.getComputedStyle(node);

		if (
			!node.contains(event.target as Node) &&
			style.visibility === 'visible' &&
			style.display !== 'none'
		)
			callback();
	}

	document.addEventListener('click', handle_click, true);

	return {
		destroy() {
			document.removeEventListener('click', handle_click, true);
		}
	};
}
