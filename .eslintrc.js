module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  parser: '@babel/eslint-parser',
  plugins: ['react', 'flowtype'],
  rules: {
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'comma-dangle': ['error', 'never'],
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-restricted-exports': 'off',
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prefer-exact-props': 'off',
    'react/prop-types': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ]
  },
  overrides: [
    {
      files: ['src/__mocks__/*'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ]
};
