sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
    return Controller.extend("mk.tutorial.controller.App", {
      onOpenDialog: function() {
        this.getOwnerComponent().welcomeDialog.open(this.getView());
      }
    });
});
