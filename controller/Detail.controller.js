sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
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
    }
  });
});
