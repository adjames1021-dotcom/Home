# lilbean

The lilbean homepage. Plain HTML and CSS in `public/`, no build step.

## Adding a game

Copy one of the links in `public/index.html` and change the address, picture and name. Pictures go in `public/img/` at 960 × 600.

## Running it

- **Locally:** `python3 -m http.server 8000 --directory public`, then open <http://localhost:8000>.
- **Online:** `npx wrangler deploy`. Change `name` in `wrangler.jsonc` to pick the subdomain.
