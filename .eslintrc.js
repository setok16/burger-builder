module.exports = {
    "extends": "airbnb",
    "plugins": [
      "import",
      "react",
      "jsx-a11y"
    ],
    "parser": "babel-eslint",
    "rules": {
      "react/jsx-filename-extension": [0],
      "react/jsx-one-expression-per-line": [0],
      "react/button-has-type": [0],
      "react/forbid-prop-types": [0],
      "react/no-array-index-key": [0],
      "no-console": [0],
      "arrow-body-style": [0],
      "jsx-a11y/click-events-have-key-events": [0],
      "jsx-a11y/no-static-element-interactions": [0],
      "no-alert": [0],
      "guard-for-in": [0],
      "no-restricted-syntax": [0],
    },
    "globals": {
      "alert": true,
      "document": true,
    }
};
