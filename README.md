
## Cowgill Website

This website uses a combo of Svelte, Netlify CMS and pico.css to create a static site for cowgill.

## Developing

Install dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server ⬇️

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Using the CMS locally
The dev server will not run the CMS, you must build a preview to access it.

In one shell run ⬇️
```bash
npx netlify-cms-proxy-server
```
In another shell run ⬇️
```bash
npm run build-preview
```
_This will have to be run every time there is change to `static/admin/config.yml`_

The dev server will respond to changes made by the CMS, but the preview build will not. 

## Icon Set
This site uses [Iconify](https://icon-sets.iconify.design/).
