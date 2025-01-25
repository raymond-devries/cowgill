const allData = import.meta.glob('$lib/content/**/*.json', { eager: true });

export const getCMSData = (content) =>
	allData[`/src/lib/content/${import.meta.env.VITE_CONTENT_KEY.toLowerCase()}/${content}.json`];
