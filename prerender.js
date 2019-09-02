/**
 * @author Ricardo Balk
 * @description A custom pre-render script for my website. Could only be used after building (npm run build).
 *
 * What it actually does?
 * It spins up a temporary server serving ./dist/. After that, Puppeteer is launched.
 *
 * Puppeteer runs a headless instance of the Chrome Browser and renders the pages as if this is done in a real browser,
 * this enables Vue to run and render the dynamic components.
 *
 * Some HTML elements are removed (those with [data-remove-after-prerender], as those are now no longer needed.
 *
 * The resulting HTML pages are saved to the corresponding files,
 * leaving a pre-rendered version of my website in ./dist/, which has a positive impact on site load times
 * and search engine indexing.
 */

const fs = require('fs');
const handler = require('serve-handler');
const http = require('http');
const puppeteer = require('puppeteer');
const serverPort = 3000;
const serverRoot = 'dist';
const outputPath = 'dist';
const routes = ['/', '/blog', '/portfolio']; // TODO: Make this more universal

const server = http.createServer((request, response) => {
    return handler(request, response, {cleanUrls: true, public: serverRoot});
});

server.listen(serverPort, () => {
    console.log(`Server running at localhost:${serverPort}, serving ${serverRoot}`);
});

if (!fs.existsSync(outputPath)) {
    console.info(`${outputPath} doesn't exist. Creating directory`);
    fs.mkdirSync(outputPath);
}

let count = 0;
routes.forEach(function (route, index) {
    (async () => {
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto(`http://localhost:${serverPort}${route}`, {"waitUntil" : "networkidle0"});

        let div_selector_to_remove = '[data-remove-after-prerender="true"]';

        await page.evaluate((sel) => {
            Array.prototype.forEach.call(document.querySelectorAll(sel), function(element){
                /* element.parentNode.removeChild(element); */
                element.remove();
            });
            document.getElementsByTagName('html')[0].dataset.serverRendered = true;
        }, div_selector_to_remove);

        const html = await page.content(); // serialized HTML of page DOM.

        let renderPath = outputPath;
        if (route !== '/') {
            renderPath += route
        }

        if (!fs.existsSync(`${renderPath}`)) {
            console.info(`${renderPath} doesn't exist. Creating directory`);
            fs.mkdirSync(`${renderPath}`);
        }

        fs.writeFile(`${renderPath}/index.html`, html, (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
            console.info(`[${index}/${(routes.length - 1)}] Prerendered ${route} to ${renderPath}/index.html`);
            count = count + 1;
            if (count === routes.length) {
                console.info('Ready. Exiting.');
                process.exit(0);
            }
        });
        await browser.close();
    })();
});
