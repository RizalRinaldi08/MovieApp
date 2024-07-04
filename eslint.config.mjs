// import globals from "globals";
// import tseslint from "typescript-eslint";
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
// import { fixupConfigRules } from "@eslint/compat";


// export default [
//   {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
//   { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true }, project: "./tsconfig.json", ecmaVersion: "latest",
//   sourceType: "module", } } },
//   {languageOptions: { globals: globals.browser }},
//   ...tseslint.configs.recommended,
//   ...fixupConfigRules(pluginReactConfig),
// ];

import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import prettierConfig from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: globals.browser
    }
  },
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  ...fixupConfigRules(prettierConfig), // Tambahkan konfigurasi Prettier
  {
    plugins: {
      prettier: pluginPrettier // Tambahkan plugin Prettier
    },
    rules: {
      'prettier/prettier': 'error' // Tambahkan aturan untuk Prettier
    }
  }
];
