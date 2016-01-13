module.exports = {
    rules: {
        // String

        // Strings must always be wrapped with single quotes
        'string-quotes': 'single',

        // Color

        // Use lowercase for hex colors
        'color-hex-case': 'lower',

        // Use short notation for hex colors whenever possible
        'color-hex-length': 'short',

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
        'number-zero-length-no-unit': true,

        // Specify a blacklist of disallowed functions
        'function-blacklist': null,

        // Disallow an unspaced operator within calc functions
        'function-calc-no-unspaced-operator': true,

        // In multi-line functions, there must always be a newline after the commas
        'function-comma-newline-after': 'always-multi-line',

        'function-comma-newline-before': null,

        // In single-line functions, there must always be a single space after the commas
        'function-comma-space-after': 'always-single-line',

        // There must never be whitespace before the commas
        'function-comma-space-before': 'never',

        // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax
        'function-linear-gradient-no-nonstandard-direction': true,

        // There must always be a newline inside the parentheses of multi-line functions
        'function-parentheses-newline-inside': 'always-multi-line',

        // There must never be whitespace on the inside the parentheses of functions
        // Set to 'never-single-line' rather than 'never' to avoid conflicts with the 'function-parentheses-newline-inside' rule
        'function-parentheses-space-inside': 'never-single-line',

        // Url quotes must always be single
        // [It's not recommended to use no-quote syntax](stackoverflow.com/a/34383157/2302258)
        'function-url-quotes': 'single',

        // Specify a whitelist of only allowed functions
        'function-whitelist': null,

        // There must always be whitespace after the function
        'function-whitespace-after': 'always',

        // Value

        // Autoprefixer is not always available so vender prefix should be allowed
        'value-no-vendor-prefix': null,

        // Value list

        // There must always be a newline after the commas in multi-line value lists
        'value-list-comma-newline-after': 'always-multi-line',

        // There must never be whitespace before the commas in multi-line value lists
        'value-list-comma-newline-before': 'never-multi-line',

        // There must always be a single space after the commas in single-line value lists
        'value-list-comma-space-after': 'always-single-line',

        // There must never be whitespace before the commas in single-line value lists
        'value-list-comma-space-before': 'never-single-line',

        // Unit

        // Specify a blacklist of disallowed units
        'unit-blacklist': null,

        // Specify a whitelist of allowed units
        'unit-whitelist': null,

        // Property

        // Specify a blacklist of disallowed properties
        'property-blacklist': null,

        // Some non-standard properties have to be prefixed (e.g. user-select)
        'property-no-vendor-prefix': null,

        // Specify a blacklist of disallowed units for specific properties
        'property-unit-blacklist': null,

        // Specify a whitelist of allowed units for specific properties
        'property-unit-whitelist': null,

        // Specify a whitelist of allowed properties
        'property-whitelist': null,

        // Custom property

        // Disallow custom properties outside of :root selectors (due to the limitation of PostCSS)
        'custom-property-no-outside-root': true,

        // Specify pattern of custom properties
        'custom-property-pattern': null,

        // Declaration

        // There must never be whitespace after the bang of declarations
        'declaration-bang-space-after': 'never',

        // There must always be a single space before the bang
        'declaration-bang-space-before': 'always',

        // There must always be a newline after the colon if the declaration's value is multi-line
        'declaration-colon-newline-after': 'always-multi-line'
    }
};
