//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  printWidth: 80,
  tabWidth: 4,
  useTabs: true,
  semi: false,
  singleQuote: false,
  trailingComma: "none",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "avoid",
  overrides: [
    {
      files: ["*.json", ".prettierrc", ".eslintrc"],
      options: {
        useTabs: false,
        tabWidth: 2
      }
    },
    {
      files: "package.json",
      options: {
        printWidth: 100,
        useTabs: false,
        tabWidth: 2
      }
    }
  ]
};

export default config;
