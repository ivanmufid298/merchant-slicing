const titleCase = (str) =>
  str.replace(/(-|^)([^-]?)/g, (match, _, char) => char.toUpperCase());

const customBemSelector = (component) => {
  const block = titleCase(component);
  const kebabCase = '[a-z]+((d)|([A-Z0-9][a-z0-9]+))*([A-Z])?';
  const element = `(?:_${kebabCase})?`;
  const modifier = `(?:___${kebabCase})?`;
  const attribute = '(?:\\[.+\\])?';
  return new RegExp(`^\\.${block}${element}${modifier}${attribute}$`);
};

module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-css-modules'],
  plugins: ['stylelint-selector-bem-pattern', 'stylelint-prettier'],
  rules: {
    'selector-class-pattern': null,
    'color-hex-length': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'include',
          'variants',
          'responsive',
          'screen',
          'mixin',
        ],
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'include',
          'variants',
          'responsive',
          'screen',
          'mixin',
        ],
      },
    ],
    'scss/dollar-variable-pattern': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/at-mixin-pattern': null,
    'prettier/prettier': [true],
    'plugin/selector-bem-pattern': {
      implicitComponents: true,
      preset: 'bem',
      componentSelectors: {
        initial: customBemSelector,
        combined: '.*',
      },
      ignoreSelectors: ['^(?!.)'],
      ignoreCustomProperties: '.*',
    },
  },
};
