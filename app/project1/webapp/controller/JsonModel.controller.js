sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
], (Controller, JSONModel) => {
    "use strict";
    return Controller.extend("project1.controller.JsonModel", {
        onInit: function () {
            let oModel = new sap.ui.model.json.JSONModel();
            oModel.loadData("model/employee.json");
            this.getView().setModel(oModel, "empModel");
        }
    })
})