const base =
	'font-size: 13px; padding: 2.5px 0.5em 2.5px 2.5px; margin-bottom: 3px;';
const withIcon = base.concat(
	'padding-right: 1.5em; background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); background-position: right center; background-repeat: no-repeat;'
);
const success = withIcon.concat(
	`color: #0a0; background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");`
);
const warning = withIcon.concat(
	`color: #e65722; text-decoration: underline; background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23e65722' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23e65722' stroke='none'/%3e%3c/svg%3e");`
);
const error = withIcon.concat(
	`color: #f22613; text-decoration: underline; background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23f22613' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23f22613' stroke='none'/%3e%3c/svg%3e");`
);
const info = base.concat('color: 3477db;');

export { base, success, warning, error, info };
