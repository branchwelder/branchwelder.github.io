# twiggsite

## Dev

Serve `index.html` with a dev server capable of handling single-page apps, such as [`web-dev-server`](https://modern-web.dev/docs/dev-server/overview/).

Install `web-dev-server`:

```sh
npm install -g @web/dev-server
```

Serve `index.html` as the route fallback:

```sh
wds --watch --app-index index.html
```

## Tools

- [Lit](https://lit.dev/) for webcomponents
- [Vaadin Router](https://github.com/vaadin/router) for routing
- [marked.js](https://marked.js.org/) for markdown rendering
- [highlight.js](https://highlightjs.org/) for code syntax highlighting

## Folder structure

- `index.html` - the entry point
- `router.js` - handles loading of various webcomponents
- `content/` - project pages, blog posts
- `public/` - fonts, cursors, favicon
- `src/` - actual JS for the site
  - `assets/`

## Acknowledgements

The cursor is [Posy's](http://www.michieldb.nl/other/cursors/). Buy his
[music](https://posy.bandcamp.com/)!
