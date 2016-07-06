# What is this?

Proof of concept that webbpack can export ES6 modules as a AMD module. This is primarly so requireJS can consume it.

The app/index.js file contains a simple es6 class

Webpack exports this as an AMD modue.

This is referenced in dist/index.html where another file vendor/magento.js that uses this AMD module to alert 500.


#How do I run it?

    npm install
    webpack
    open dist/index.html in browser
