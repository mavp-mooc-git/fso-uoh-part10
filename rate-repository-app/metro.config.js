/** Metro configuration for React Native
 * https://github.com/facebook/react-native
 * 
 * @format
 **/

module.exports = {
 transformer: {
   getTransformOptions: async () => ({
     transform: {
       experimentalImportSupport: false,
       inlineRequires: false,
     },
   }),
 },
 
 resolver: {
   sourceExts: ['jsx','js', 'cjs','ts','tsx'] // add cjs extenion file 
  },
};

/**
 * @apollo/client specifies a `main` module field that could not be resolved.
 * 
 * Bundling failed 1382ms While trying to resolve module `@apollo/client` from
 * file `.../App.js`, the package `.../node_modules/@apollo/client/package.json`
 * was successfully found. However, this package itself specifies a `main` module
 * field that could not be resolved (`.../node_modules/@apollo/client/main.cjs`.
 * Indeed, none of these files exist:
 * .../node_modules/@apollo/client/main.cjs(.native|.android.ts|.native.ts|
 *    .ts|.android.tsx|.native.tsx|.tsx|.android.js|.native.js|.js|
 *    .android.jsx|.native.jsx|.jsx|.android.json|.native.json|.json)
 * .../node_modules/@apollo/client/main.cjs/index(.native|.android.ts|
 *    .native.ts|.ts|.android.tsx|.native.tsx|.tsx|.android.js|.native.js|
 *    .js|.android.jsx|.native.jsx|.jsx|.android.json|.native.json|.json)
 **/

