# lilbean

The homepage for everything made under the lilbean name: one page that lists the games and other sites, with a link to each.

It's plain HTML, CSS and JavaScript in `public/`, with no build step.

## Adding something

Open `public/projects.js`, copy one of the entries, and change it. The comment at the top of that file says what each field does. In short:

```js
{
  name: 'Hillside Hangout',
  url: 'https://hillside-hangout.lilbeans.workers.dev',
  about: 'One or two plain sentences.',
  kind: 'game',            // or 'site' for the "Other things" list
  tags: ['multiplayer', '3d'],
  image: 'img/hillside-hangout.jpg',   // optional
  color: '#5f7a43',        // shown instead when there's no image
},
```

Screenshots go in `public/img/`. They're cropped to 16:10, so 960 × 600 is a good size. Anything without a screenshot gets a plain card in its `color` with its name on it.

The "Other things" section and its link in the header only show up once there's at least one entry with `kind: 'site'`.

## Running it

- **Locally:** `python3 -m http.server 8000 --directory public`, then open <http://localhost:8000>.
- **Online:** `npx wrangler deploy` puts `public/` on Cloudflare as a static site. Change `name` in `wrangler.jsonc` to pick the subdomain.
