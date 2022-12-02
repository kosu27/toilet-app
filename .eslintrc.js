module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "./tsconfig.json" },
  env: { es2021: true, browser: true, node: true },
  plugins: ["simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "next",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "info", "error"] }], // console.logが残っていればwarn
    "no-restricted-syntax": [
      // enumは使ってはいけない
      "error",
      { selector: "TSEnumDeclaration", message: "Don't declare enums" },
    ],
    "prefer-arrow-callback": "error", // arrow functionを許可
    "prefer-const": "error", // const推奨
    "func-style": ["error", "expression"], // 関数式を使わなければいけない
    "arrow-body-style": ["error", "always"], // 関数式の中身は必ず中括弧で囲む
    "no-restricted-imports": [
      "error",
      { paths: [{ name: "react", importNames: ["default"] }] }, // reactの明示的なimportは不要なので禁止
    ],
    "react/prop-types": "off", // ts使うので不要
    "react/react-in-jsx-scope": "off", // reactはグローバルなので不要
    "react/display-name": "error", // 無名関数を禁止する
    "react/jsx-handler-names": [
      // イベントハンドラ名を矯正する
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    "react/destructuring-assignment": ["error", "never"], // propsなどを直接使用可能にする
    "react/no-unused-prop-types": "error", // 未使用propsはエラー
    "react-hooks/rules-of-hooks": "error", // hooksの基本的なlinter
    "react-hooks/exhaustive-deps": "warn", // effectやcallbackのdeps linter
    "import/newline-after-import": "error", // 最後のimportの後に空行を追加
    "import/no-default-export": "error", // default-exportを禁止する
    "simple-import-sort/imports": "error", // import文の整列
    "simple-import-sort/exports": "error", // export文の整列
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
      { selector: ["property", "method"], format: ["camelCase"] },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["no", "is", "has", "should"],
        filter: { regex: "^_", match: false },
      },
    ],
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  overrides: [
    {
      files: ["src/pages/**/*.tsx", "src/pages/api/**/*.ts"],
      rules: { "import/no-default-export": "off" },
    },
  ],
};
