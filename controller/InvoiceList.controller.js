sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
  "use strict";
  return Controller.extend("mk.tutorial.controller.InvoiceList", {
    onInit: function() {
      var viewModel = new JSONModel({
        currency: "EUR"
      });
      this.getView().setModel(viewModel, "view");
    }
  });
});
