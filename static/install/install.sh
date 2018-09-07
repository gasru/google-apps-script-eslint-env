#!/bin/bash

npm i -D @types/google-apps-script eslint eslint-config-google eslint-config-prettier eslint-plugin-googleappsscript eslint-plugin-prettier prettier
curl https://raw.githubusercontent.com/gasru/google-apps-script-eslint-env/master/.eslintrc.json --output .eslintrc.json
curl https://raw.githubusercontent.com/gasru/google-apps-script-eslint-env/master/.prettierrc --output .prettierrc
rm -- "$0"