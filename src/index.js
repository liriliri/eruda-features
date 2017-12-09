import modernizr from './modernizr';

let featureList = require('../script/featureList.json');

let featureNames = featureList['feature-detects'],
    specialNames = featureList['special-names'];

module.exports = function (eruda) 
{
    let {evalCss} = eruda.util;

    class Features extends eruda.Tool {
        constructor() {
            super();
            this.name = 'features';
            this._style = evalCss(require('./style.scss'));

            this._tpl = require('./template.hbs');
            this._features = {};
            this._isInit = false;
        }
        init($el, container) 
        {
            super.init($el, container);
            $el.html(require('./template.hbs')());
        }
        show() 
        {
            super.show();

            if (!this._isInit) this._initFeatures();
        }
        hide()
        {
            super.hide();
        }
        destroy() 
        {
            super.destroy();
            evalCss.remove(this._style);
        }
        _initFeatures()
        {
            this._isInit = true;
    
            modernizr.testRunner();
    
            let i = 0,
                featureNum = featureNames.length;
    
            featureNames.forEach(feature =>
            {
                if (specialNames[feature]) feature = specialNames[feature];
                feature = feature.replace(/\//g, '');
    
                modernizr.on(feature, result =>
                {
                    this._features[feature] = result;
                    i++;
                    if (i === featureNum) this._render();
                });
            });
        }
        _render()
        {
            this._$el.html(this._tpl({features: this._features}));
        }
    }

    return new Features();
};