sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "mk/tutorial/controller/WelcomeDialog"
], function (UIComponent, JSONModel, WelcomeDialog) {
  "use strict";
  return UIComponent.extend("mk.tutorial.Component", {
    metadata: {
      manifest: "json"
    },

    init: function() {
      UIComponent.prototype.init.apply(this, arguments);

      var data = {
        recipient: {
          name: "Rockn' Rolla"
        }
      };
      var model = new JSONModel(data);
      this.setModel(model);

      var config = this.getMetadata().getConfig();
      var namespace = this.getMetadata().getManifestEntry("sap.app").id;
      var invoiceModel = new JSONModel(jQuery.sap.getModulePath(namespace, config.invoiceLocal));
      this.setModel(invoiceModel, "invoice");

      this.welcomeDialog = new WelcomeDialog();
    }
  });
});
