import { Value } from "./value";
import { valueProxyCreator } from "./valueProxy";

/**Defines the data type of the text value
 * @typedef {string} TextValueType */

/**Defines parameters 
 * @typedef {Object} TextValueOptions
 * @property {number} size size of text 
 * @property {TextValueStyles} style style of text
 * @property {TextValueWeight} weight weight of text */

/**Defines listener for text value
 * @typedef {(access:AccessTypes,self:Value)} TextValueListener */

/**Defines all possible text styles
 * @enum {string} */
export let TextValueStyles = { NORMAL: 'unset', ITALIC: 'italic', OBLIQUE: 'oblique' }

/**Defines all possible text styles
 * @enum {string} */
export let TextValueWeight = { NORMAL: 'unset', BOLD: 'bold', BOLDER: 'bolder', LIGHTER: 'lighter', 100: '100', 200: '200', 300: '300', 400: '400', 500: '500', 600: '600', 700: '700', 800: '800', 900: '900' }

export class TextValue extends Value {
    /**This constructs an text class
     * @param {TextValueType} text The text
     * @param {TextValueOptions} options all options for the text */
    constructor(text, options) {
        super();
        if (typeof text === "string") {
            this.___value = text;
        } else {
            this.___value = '';
        }
        if (options) {
            this.options(options);
        }
    }

    /**Sets all options of the text value
     * @param {TextValueOptions} options */
    options(options) {
        if (typeof options.size === 'number') {
            /**
             * @type {number}
             * @protected */
            this.__size = options.size;
        }
        if (typeof options.style === 'string') {
            /**
             * @type {string}
             * @protected */
            this.__style = options.style;
        }
        if (typeof options.weight === 'string') {
            /**
             * @type {string}
             * @protected */
            this.__weight = options.weight;
        }
        this.update();
    }

    /**This adds a function as an event listener to the access
     * @param {TextValueListener} func
     * @returns {TextValueListener}*/
    addListener(func, run) {
        super.addListener(func, run);
    }

    /**This removes a function as an event listener from the access
     * @param {TextValueListener} func
     * @returns {TextValueListener}*/
    removeListener(func) {
        super.removeListener(func);
    }

    /** This gets the curent text
     * @returns {TextValueType} */
    get get() {
        return super.get;
    }

    /** This sets the text and dispatches an event
     * @param {TextValueType} val */
    set set(val) {
        if (typeof val === 'string') {
            super.set = val;
        } else {
            console.warn('None string passed');
        }
    }


    /**Sets the size of the text
     * @param {number} size */
    set size(size) {
        if (typeof size === 'number') {
            this.__size = size;
            this.update();
        }
    }

    /**Returns size of text
     * @returns {number} */
    get size() {
        return this.__size;
    }

    /**Sets the size of the text
     * @param {TextValueStyles} size */
    set style(style) {
        if (typeof style === 'string') {
            this.__style = style;
            this.update();
        }
    }

    /**Returns size of text
     * @returns {TextValueStyles} */
    get style() {
        return this.__style;
    }

    /**Sets the size of the text
     * @param {TextValueWeight} size */
    set weight(weight) {
        if (typeof weight === 'string') {
            this.__weight = weight;
            this.update();
        }
    }

    /**Returns size of text
     * @returns {TextValueWeight} */
    get weight() {
        return this.__weight;
    }

    /**This adds text styles and text to the element
     * @param {HTMLElement} elem The text*/
    applyText(elem) {
        elem.innerHTML = this.___value;
        if (this.__size) {
            elem.style.fontSize = this.__size + 'px';
        } else {
            elem.style.fontSize = '';
        }
        if (this.__style) {
            elem.style.fontStyle = this.__style;
        } else {
            elem.style.fontStyle = '';
        }
        if (this.__weight) {
            elem.style.fontWeight = this.__weight;
        } else {
            elem.style.fontWeight = '';
        }
    }
}

/**Defines a proxy value which can be used to quickly pointe multiple value listeners to another value*/
export class ProxyTextValue extends TextValue {
    /**
     * @param {Value} [value] value to proxy
     * @param {TextValueOptions} options all options for the text */
    constructor(value, options) {
        super();
        this.___constructor(value);
        if (options) {
            this.options(options);
        }
    }

    /**Changes the value the proxy points to
     * @param {TextValue} value */
    set proxy(proxy) {}

    /**Returns the value this proxies
     * @returns {TextValue}*/
    get proxy() {}

    /**This adds a function as an event listener to the value
     * @param {TextValueListener} func
     * @returns {TextValueListener}*/
    addListener(func, run) {}

    /**This removes a function as an event listener from the value
     * @param {TextValueListener} func
     * @returns {TextValueListener}*/
    removeListener(func) {}

    /** This gets the curent access type
     * @returns {TextValueType} */
    get get() {}

    /** This sets the value and dispatches an event
     * @param {TextValueType} val */
    set set(val) {}

    /** This method can compare a value to the internal value
     * @param {TextValueType} val
     * @returns {boolean} true if different, false if same*/
    compare(val) {}

    /**This adds text styles and text to the element
     * @param {HTMLElement} elem The text*/
    applyText(elem) {
        elem.innerHTML = this.get;
        if (this.__size) {
            elem.style.fontSize = this.__size + 'px';
        } else {
            elem.style.fontSize = '';
        }
        if (this.__style) {
            elem.style.fontStyle = this.__style;
        } else {
            elem.style.fontStyle = '';
        }
        if (this.__weight) {
            elem.style.fontWeight = this.__weight;
        } else {
            elem.style.fontWeight = '';
        }
    }
}
valueProxyCreator(ProxyTextValue, TextValue);