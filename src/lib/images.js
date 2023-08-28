export const images = import.meta.glob('../media/*.{jpg,jpeg,png}', {
	query: { as: 'metadata' },
	import: 'default',
	eager: true
});

export const avifImages = import.meta.glob('../media/*.{jpg,jpeg,png}', {
	query: { format: 'avif', w: '800;1600', as: 'srcset' },
	import: 'default',
	eager: true
});

export const webpImages = import.meta.glob('../media/*.{jpg,jpeg,png}', {
	query: { format: 'webp', w: '800;1600', as: 'srcset' },
	import: 'default',
	eager: true
});
