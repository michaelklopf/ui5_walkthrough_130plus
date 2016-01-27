sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History"
], function(Controller, History) {
  "use strict";
  return Controller.extend("mk.tutorial.controller.Detail", {
    onInit: function() {
      var router = sap.ui.core.UIComponent.getRouterFor(this);
      router.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
    },
    _onObjectMatched: function(event) {
      this.getView().bindElement({
        path: "/" + event.getParameter("arguments").invoicePath,
        model: "invoice"
      });
      console.log(this.getView());
    },
    onNavBack: function() {
      var history = History.getInstance();
      var previousHash = history.getPreviousHash();

      if (previousHash !== undefined) {
        window.history.go(-1);
      } else {
        var router = sap.ui.core.UIComponent.getRouterFor(this);
        router.navTo("overview", true);
      }
    }
  });
});
