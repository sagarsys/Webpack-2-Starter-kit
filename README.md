**WEBPACK 2 PROXY TEST STARTER KIT**
-----------------------------------
- Simple Webpack 2 Starter Kit
- Used and Tested with a Test Proxy PHP server

----------------------------------
***Includes:***
- DEV AND PROD environment builds
- ES6 Babel Transpiling
- SASS Loader with autoprefixing and compiling to CSS
- Images Loader
- Fonts Loader
- JSON Loader
- Dev Server

---------------------------

***Requirements:***
- Node / NPM / YARN

---------------------------

***Getting Started:***
- Clone or download repository
- Run `npm install` or `yarn` to install dependencies
- Setup proxy url for your project in `./webpack.dev-server.js` -:- `"**": "http://localhost:4242/WEBPACK-PROXY-TEST/"`


----------------------------

***Tasks:***

- `npm run build`
   - Sets the `NODE_ENV` to `production`
   - Outputs build bundles to `./dist` folder

- `npm run dev`
   - Sets the `NODE_ENV` to `development`
   - Creates a `localhost` server at port `8080` with hot module replacement enabled - e.g: Output can be viewed in the browser at `http:\\localhost:8080\index.html`


--------------------------------

***TODO:***

- Fix Webpack Optimize minimize in `prod`
- Fix Webpack Optimize Commonchunks in `prod`
- Improve the way image minification works
- Integrate with twig loader