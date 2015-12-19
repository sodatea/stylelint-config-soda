module.exports = {
    // String

    // Strings must always be wrapped with single quotes
    'string-quotes': ['single', { warn: true }],

    // Color

    // Use lowercase for hex colors
    'color-hex-case': ['lower', { warn: true }],

    // Use short notation for hex colors whenever possible
    'color-hex-length': ['short', { warn: true }],

    // Allow hex colors
    'color-no-hex': null,

    // Disallow invalid hex colors
    'color-no-invalid-hex': true,

    // Allow named colors
    'color-no-named': null,

    // Number

    // Require a leading zero for fractional numbers less than 1
    'number-leading-zero': 'always',

    // Limit the number of decimal places allowed in numbers
    // [The CSS spec doesn't specify number precisions](https://lists.w3.org/Archives/Public/www-style/2010Jan/0456.html)
    // [But sass sets its default number precision to 5](http://sass-lang.com/documentation/Sass/Script/Value/Number.html#precision-class_method)
    // [Less sets it to 8](https://github.com/less/less.js/blob/master/lib/less/parse-tree.js#L29)
    'number-max-precision': 5,

    // Disallow trailing zeros within numbers
    'number-no-trailing-zeros': true,

    // Disallow units for zero lengths
    'number-zero-length-no-unit': [true, { warn: true }],

    // Specify a blacklist of disallowed functions
    'function-blacklist': null,

    // Disallow an unspaced operator within calc functions
    'function-calc-no-unspaced-operator': [true, { warn: true }],

    // In multi-line functions, there must always be a newline after the commas
    'function-comma-newline-after': ['always-multi-line', { warn: true }],

    'function-comma-newline-before': null,

    // In single-line functions, there must always be a single space after the commas
    'function-comma-space-after': ['always-single-line', { warn: true }],

    // There must never be whitespace before the commas
    'function-comma-space-before': ['never', { warn: true }]
};
