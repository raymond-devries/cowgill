const getHerdConfig = (herd) => {
	return {
		name: herd,
		label: herd[0].toUpperCase() + herd.slice(1),
		media_folder: 'media',
		editor: {
			preview: false
		},
		files: [
			{
				file: `src/lib/content/${herd}/meta.json`,
				label: 'Meta',
				name: 'meta',
				fields: [
					{
						label: 'Logo',
						name: 'logo',
						widget: 'image',
						hint: 'Make sure this is a high quality mostly white png with no background'
					},
					{
						label: 'Header Photo',
						name: 'headerPhoto',
						widget: 'image',
						hint: 'This image must have a 2:1 width to height ratio (i.e. 2000x1000 or 3000x1500)'
					},
					{
						label: 'Header Photo Alt Text',
						name: 'headerPhotoAltText',
						widget: 'string'
					},
					{
						label: 'Instagram handle (No @)',
						name: 'instagramHandle',
						widget: 'string',
						hint: 'Do not include @'
					},
					{
						label: 'Strava link',
						name: 'stravaLink',
						widget: 'string',
						hint: 'i.e. https://www.strava.com/clubs/470714'
					},
					{
						label: 'City',
						State: null,
						name: 'cityState',
						widget: 'string',
						hint: 'i.e. Seattle, WA'
					},
					{
						label: 'Email',
						name: 'email',
						widget: 'string',
						hint: 'i.e. cowgill.trail@gmail.com'
					},
					{
						label: 'Calendar Link',
						name: 'calendarLink',
						widget: 'string',
						hint: 'i.e. https://calendar.google.com/calendar/u/0/embed?src=cowgill.trail@gmail.com&ctz=America/Los_Angeles'
					}
				]
			},
			{
				file: `src/lib/content/${herd}/home.json`,
				label: 'Home Page',
				name: 'index',
				fields: [
					{
						label: 'Meta Description',
						name: 'metaDescription',
						widget: 'string',
						hint: 'A descriptive sentence or two used by search engines to index the page.'
					},
					{
						label: 'Header Image',
						name: 'headerImage',
						widget: 'image'
					},
					{
						label: 'Header Image Alt Text',
						name: 'headerImageAltText',
						widget: 'string'
					},
					{
						label: 'Body',
						name: 'body',
						widget: 'markdown'
					}
				]
			},
			{
				file: `src/lib/content/${herd}/about.json`,
				label: 'About',
				name: 'about',
				fields: [
					{
						label: 'Meta Description',
						name: 'metaDescription',
						widget: 'string',
						hint: 'A descriptive sentence or two used by search engines to index the page.'
					},
					{
						label: 'Body',
						name: 'body',
						widget: 'markdown'
					},
					{
						label: 'Articles',
						name: 'articles',
						widget: 'list',
						fields: [
							{
								label: 'Title',
								name: 'title',
								widget: 'string'
							},
							{
								label: 'Link',
								name: 'link',
								widget: 'string'
							},
							{
								label: 'Photo',
								name: 'photo',
								widget: 'image'
							}
						]
					},
					{
						label: 'Sponsorships',
						name: 'sponsorships',
						widget: 'markdown'
					}
				]
			},
			{
				file: `src/lib/content/${herd}/events.json`,
				label: 'Events',
				name: 'events',
				fields: [
					{
						label: 'Meta Description',
						name: 'metaDescription',
						widget: 'string',
						hint: 'A descriptive sentence or two used by search engines to index the page.'
					},
					{
						label: 'Title',
						name: 'title',
						widget: 'string'
					},
					{
						label: 'Body',
						name: 'body',
						widget: 'markdown'
					}
				]
			},
			{
				file: `src/lib/content/${herd}/contact.json`,
				label: 'Contact',
				name: 'contact',
				fields: [
					{
						label: 'Meta Description',
						name: 'metaDescription',
						widget: 'string',
						hint: 'A descriptive sentence or two used by search engines to index the page.'
					},
					{
						label: 'Custom Header Photo',
						name: 'customHeaderPhoto',
						widget: 'image',
						hint: 'This image must have a 2:1 width to height ratio (i.e. 2000x1000 or 3000x1500'
					},
					{
						label: 'Custom Header Photo Alt Text',
						name: 'customHeaderPhotoAltText',
						widget: 'string'
					},
					{
						label: 'Body',
						name: 'body',
						widget: 'markdown'
					},
					{
						label: 'Form Title',
						name: 'formTitle',
						widget: 'string'
					},
					{
						label: 'Success Message',
						name: 'successMessage',
						widget: 'markdown'
					}
				]
			}
		]
	};
};

export const CMSconfig = (herds) => {
	const common = {
		name: 'common',
		label: 'Common',
		editor: {
			preview: false
		},
		files: [
			{
				file: 'src/lib/content/common/code-of-conduct.json',
				label: 'Code of Conduct',
				name: 'code-of-conduct',
				fields: [
					{
						label: 'Meta Description',
						name: 'metaDescription',
						widget: 'string',
						hint: 'A descriptive sentence or two used by search engines to index the page.'
					},
					{
						label: 'Body',
						name: 'body',
						widget: 'markdown'
					}
				]
			},
			{
				file: 'src/lib/content/common/values.json',
				label: 'Values',
				name: 'values',
				fields: [
					{
						label: 'Meta Description',
						name: 'metaDescription',
						widget: 'string',
						hint: 'A descriptive sentence or two used by search engines to index the page.'
					},
					{
						label: 'Body',
						name: 'body',
						widget: 'markdown'
					}
				]
			}
		]
	};

	const herdConfigs = herds.map((herd) => getHerdConfig(herd));

	return {
		backend: {
			name: 'github',
			repo: 'raymond-devries/cowgill',
			branch: 'master'
		},
		local_backend: true,
		media_folder: 'src/media',
		public_folder: '/media',
		collections: [common, ...herdConfigs]
	};
};
