sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "mk/tutorial/controller/WelcomeDialog",
  "sap/ui/model/odata/v2/ODataModel"
], function (UIComponent, JSONModel, WelcomeDialog, ODataModel) {
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
      var invoiceModel = new ODataModel(config.invoiceRemote);
      this.setModel(invoiceModel, "invoice");

      this.welcomeDialog = new WelcomeDialog();
    }
  });
});
