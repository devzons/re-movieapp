# Simple Movie app

- React
- API: https://yts-proxy.now.sh/list_movies.json?sort_by=rating

### Build site and upload

- update package.json

```
...
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  },
...
  },
  "homepage": "http://devzons.github.io/re-movieapp"
}
```

- from CLI, and check the site

```
npm run build
```

it will upload automatically

- Site
  `http://devzons.github.io/<app-name>/`
