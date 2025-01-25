import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';
import Icons from 'unplugin-icons/vite';
import { imagetools } from 'vite-imagetools';
import { createFilter, dataToEsm } from '@rollup/pluginutils';
import { getAverageColor } from 'fast-average-color-node';
import generateFile from 'vite-plugin-generate-file';
import { CMSconfig } from './tools/generate_admin.js';
import { HERDS } from './herds.js';

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

export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
	const picRegex = new RegExp(`src\\/lib\\/content\\/${process.env.VITE_CONTENT_KEY.toLowerCase()}\\/*`);
	return defineConfig({
		plugins: [
			sveltekit(),
			Icons({ compiler: 'svelte' }),
			primarycolor(),
			imagetools({ include: picRegex }),
			generateFile([
				{
					type: 'yaml',
					output: './admin/config.yml',
					data: CMSconfig(HERDS)
				}
			])
		]
	});
};
