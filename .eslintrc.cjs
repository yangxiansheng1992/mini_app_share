module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
     "es2021": true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 'latest',
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "@vue/eslint-config-typescript"
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-vars": "off"
  },
  "globals": {
    "ref": "readonly",
    "onMounted": "readonly",
    "defineProps": "readonly"
  },
}
