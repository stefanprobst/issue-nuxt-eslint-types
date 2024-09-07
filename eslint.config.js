// @ts-check

import js from "@eslint/js";
import ts from "typescript-eslint";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  js.configs.recommended,
  // Argument of type 'Config' is not assignable to parameter of type 'ResolvableFlatConfig'.
  // Type 'Config' is not assignable to type 'Config<RulesRecord>'.
  ...ts.configs.recommended
);
