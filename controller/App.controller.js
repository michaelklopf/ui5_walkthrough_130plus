sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
   "use strict";
    return Controller.extend("mk.tutorial.controller.App", {
      onInit : function () {
         // set data model on view
         var oData = {
            recipient : {
               name : "Bowie"
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);

         // set i18n model on view
         var i18nModel = new ResourceModel({
            bundleName: "mk.tutorial.i18n.messagebundle"
         });
         this.getView().setModel(i18nModel, "i18n");
      },
      onShowHello : function () {
        var bundle = this.getView().getModel("i18n").getResourceBundle();
        var recipient = this.getView().getModel().getProperty("/recipient/name");
        var message = bundle.getText("helloMsg");
        MessageToast.show(message + " " + recipient);
      }
    });
});
