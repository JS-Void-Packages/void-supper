/**
 * Make the first letter Uppercase and make the rest lowercase.
 * @param {string} text 
 * @param {boolean} noConversion if set to true, it won't turn words with spaces
 * @returns {string}
 */
function upper(text, noConversion=false) {
    if(!noConversion) {
        if(text.includes('_')) {
            let split = text.split('_')
            return split.map(t => t.charAt(0).toUpperCase() + t.slice(1, t.length).toLowerCase()).join(' ');
        }
        else if(text.includes(' ')) {
            let split = text.split(' ')
            return split.map(t => t.charAt(0).toUpperCase() + t.slice(1, t.length).toLowerCase()).join(' ');
        }
    }
    return text.charAt(0).toUpperCase() + text.slice(1, text.length);
}

/**
 * make the first letter of the first word in the sentence Uppercase.
 * @param {string} text 
 */
function sUpper(text) {
    return text.split(' ').map((value, index) => { 
        if(index == 0) {
            return upper(value);
        }
        return value;
    }).join(' ');
}

/**
 * make a word in the sentence Uppercase 
 * @param {string} text 
 * @param {string} i where the word is located in the sentence -1
 */
function aUpper(text, i=0) {
    return text.split(' ').map((value, index) => { 
        if(index == i) {
            return upper(value);
        }
        return value;
    }).join(' ');
}

module.exports = {
    upper,
    sUpper,
    aUpper
}