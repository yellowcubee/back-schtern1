/* eslint-disable indent */
require('@babel/register');
const ReactDomServer = require('react-dom/server');
const React = require('react');

const render = (reactElement, properties, response) => {
    const reactEl = React.createElement(reactElement, properties);
    const html = ReactDomServer.renderToStaticMarkup(reactEl);
    response.write('<!DOCTYPE html>');
    response.write(html);
    response.end();
};

// eslint-disable-next-line no-undef
module.exports = render;