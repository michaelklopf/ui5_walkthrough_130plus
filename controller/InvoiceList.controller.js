sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "mk/tutorial/model/formatter",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
  "use strict";
  return Controller.extend("mk.tutorial.controller.InvoiceList", {
    formatter: formatter,
    onInit: function() {
      var viewModel = new JSONModel({
        currency: "EUR"
      });
      this.getView().setModel(viewModel, "view");
    },
    onFilterInvoices: function(event) {
      var filter = [];
      var query = event.getParameter("query");
      if (query) {
        filter.push(new Filter("ProductName", FilterOperator.Contains, query));
      }
      var list = this.getView().byId("invoiceList");
      var binding = list.getBinding("items");
      binding.filter(filter);
    },
    onPress: function(event) {
      var router = sap.ui.core.UIComponent.getRouterFor(this);
      router.navTo("detail");
    }
  });
});
