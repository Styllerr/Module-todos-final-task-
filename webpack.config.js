const path = require('path');

module.exports = {
    entry: './pub/javascript/script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist');
    }
}