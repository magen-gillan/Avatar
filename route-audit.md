# Avatar route audit findings

The GitHub Pages root URL returns the application successfully. The direct `/Avatar/settings` request is served by GitHub Pages with HTTP status 404 but its body is now the application `index.html`, the title is `Avatar · Character Studio`, and both the JavaScript and CSS assets return HTTP 200. The browser-rendered page loads the full Avatar studio instead of GitHub's default 404 page.

The public browser test selected Darkness, then reloaded `/Avatar/settings`. Darkness remained selected after reload, confirming that the versioned Local Storage session persistence works on the deployed site.

The durable fix is the combination of a Wouter base path derived from `import.meta.env.BASE_URL` and a build-time `dist/public/404.html` copy of `index.html`. GitHub Pages still reports the fallback request as 404 at the HTTP layer, which is normal for this static SPA fallback, but the user-facing application now renders correctly.
