sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "mk/tutorial/model/formatter"
], function(Controller, JSONModel, formatter) {
  "use strict";
  return Controller.extend("mk.tutorial.controller.InvoiceList", {
    formatter: formatter,
    onInit: function() {
      var viewModel = new JSONModel({
        currency: "EUR"
      });
      this.getView().setModel(viewModel, "view");
    }
  });
});
