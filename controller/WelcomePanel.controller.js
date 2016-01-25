sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";
  return Controller.extend("mk.tutorial.controller.WelcomePanel", {
    onShowHello : function () {
      var bundle = this.getView().getModel("i18n").getResourceBundle();
      var recipient = this.getView().getModel().getProperty("/recipient/name");
      var message = bundle.getText("helloMsg");
      MessageToast.show(message + " " + recipient);
    },

    onOpenDialog: function() {
      this.getOwnerComponent().welcomeDialog.open(this.getView());
    }
  });
});
