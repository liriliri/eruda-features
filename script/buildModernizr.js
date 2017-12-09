var modernizr = require('modernizr'),
    fs = require('fs'),
    path = require('path');

var featureList = require('./featureList.json');

modernizr.build(featureList, function (result)
{
    result = result.replace(';(function(window, document, undefined){', '')
                   .replace('window.Modernizr = Modernizr;', '')
                   .replace('\'enableClasses\': true', '\'enableClasses\': false')
                   .replace('testRunner();', 'Modernizr.testRunner = testRunner;')
                   .replace('})(window, document);', '');

    result += '\nmodule.exports = Modernizr;';
    fs.writeFile(path.resolve(__dirname, '../src/modernizr.js'), result, 'utf8', function () {});
});