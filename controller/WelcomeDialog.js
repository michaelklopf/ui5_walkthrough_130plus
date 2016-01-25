sap.ui.define([
  "sap/ui/base/Object"
], function(Object) {
    "use strict";
    return Object.extend("mk.tutorial.controller.WelcomeDialog", {
      _getDialog: function() {
        if (!this.welcomeDialog) {
          this.welcomeDialog = sap.ui.xmlfragment("mk.tutorial.view.WelcomeDialog", this);
        }
        return this.welcomeDialog;
      },

      open: function(view) {
        var dialog = this._getDialog();
        view.addDependent(dialog);
        dialog.open();
      },

      onCloseDialog: function() {
        this._getDialog().close();
      }
    });
});
