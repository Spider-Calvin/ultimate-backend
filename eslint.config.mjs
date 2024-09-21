import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,  // Node.js globals since you're working in a Node.js environment
    },
    rules: {
     'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
          bracketSameLine: true,
          bracketSpacing: true,
          singleQuote: true,
          trailingComma: 'all',
          semi: true,
          tabWidth: 2,
          useTabs: true,
          jsxSingleQuote: true,
          proseWrap: 'preserve',
          printWidth: 100,
        },
      ],
    },
  },
  {
    languageOptions: {
      globals: globals.browser,  // This is for browser-specific globals
    },
    plugins: {
      prettier: prettier,  // Load Prettier as a plugin
    }
  },
];
