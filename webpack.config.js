const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "angular-remote-2",
  exposes: {
    "./EntityRoute": "./src/app/pages/entity/entity.routing.ts",
    "./Page2Component": "./src/app/pages/page2/page2.component.ts",
    './AppComponent': './src/app/app.component.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: false,
      requiredVersion: "auto",
    }),
  },
});
