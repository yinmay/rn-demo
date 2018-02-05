module.exports = {
    // "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
          "ecmascript": 6,
          "jsx": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": 0,
      "function-paren-newline": 0,
      "global-require": 0,
     "no-use-before-define":  0 
    }
  };