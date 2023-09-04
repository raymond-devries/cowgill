import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import { imagetools } from 'vite-imagetools';
import { createFilter, dataToEsm } from '@rollup/pluginutils';
import { getAverageColor } from 'fast-average-color-node';

export function primarycolor() {
	const filter = createFilter(/[^?]+\.(heic|heif|avif|jpeg|jpg|png|tiff|webp|gif)(\?(?=primarycolor=true).*)?$/);
	return {
		name: 'primarycolor',
		enforce: 'pre',
		async load(id) {
			if (!filter(id)) return null;
			const file_path = id.replace('?primarycolor=true', '');
			const { value } = await getAverageColor(file_path);
			return dataToEsm(value, { preferConst: true });
		}
	};
}

export default defineConfig({
	plugins: [sveltekit(), Icons({ compiler: 'svelte' }), primarycolor(), imagetools()]
});
