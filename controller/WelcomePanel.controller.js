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

    _getDialog: function() {
      if (!this.welcomeDialog) {
        this.welcomeDialog = sap.ui.xmlfragment("mk.tutorial.view.WelcomeDialog");
        this.getView().addDependent(this.welcomeDialog);
      }
      return this.welcomeDialog;
    },

    onOpenDialog: function() {
      this._getDialog().open();
    }
  });
});
