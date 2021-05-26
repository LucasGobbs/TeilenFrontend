import sveltePreprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-vercel';
import fs from 'fs'
const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));
/** @type {import('@sveltejs/kit').Config} */
const config =  {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    postcss: true,
  }),
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: node(),


    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      ssr: {
        external: Object.keys(pkg.dependencies || {}),
      },
      optimizeDeps: {
        include: ['mongodb']
      }
    },

  },
};

export default config