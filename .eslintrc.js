module.exports = {
  extends: 'airbnb',

  plugins: [
    'react',
    'react-native'
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    // `.jsx` extension cannot be used with React Native
    // https://github.com/airbnb/javascript/issues/982
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'comma-dangle': ['error', 'never']
  }
};
