import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
module.exports = {
  // your other config...

  rules: {
    'react-hooks/rules-of-hooks': 'off', // 👈 disables the rule
    'no-console': 'off',                 // 👈 example: disable console warnings
    // add more rules here...
  },
};


export default eslintConfig;
