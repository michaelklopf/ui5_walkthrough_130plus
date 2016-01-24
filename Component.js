sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
  "use strict";
  return UIComponent.extend("mk.tutorial.Component", {
    metadata: {
      rootView: "mk.tutorial.view.App"
    },
    init: function() {
      UIComponent.prototype.init.apply(this, arguments);

      var data = {
        recipient: {
          name: "Rockn' Rolla"
        }
      };
      var model = new JSONModel(data);
      this.setModel(model);

      var i18nModel = new ResourceModel({
        bundleName: "mk.tutorial.i18n.messagebundle"
      });
      this.setModel(i18nModel, "i18n");
    }
  });
});
