sap.ui.define([
  "sap/ui/core/util/MockServer"
], function(MockServer) {
  "use strict";
  return {
    init: function() {
      var mockServer = new MockServer({
        rootUri: "http://secret/proxy/services.odata.org/V2/Northwind/Northwind.svc/"
      });
      var uriParameters = jQuery.sap.getUriParameters();

      MockServer.config({
        autoRespond: true,
        autoRespondAfter: uriParameters.get("serverDelay") || 1000
      });

      var path = jQuery.sap.getModulePath("mk.tutorial.localService");
      mockServer.simulate(path + "/metadata.xml", path + "/mockdata");
      mockServer.start();
    }
  };
});
