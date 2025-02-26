sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";
    return Controller.extend("project1.controller.ResourceModel", {
        onInit: function () {
            var oData = {
                "LanguageType": [
                    {
                        "Name": "English",
                        "Type": "EN"
                    },
                    {
                        "Name": "Hindi",
                        "Type": "hi"
                    },
                    {
                        "Name": "Urdu",
                        "Type": "ur"
                    }
                ]
            };

            // set explored app's demo model on this sample
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "ReqTypeModel");

        },
        
        onChangeLanguage: function (oEvent) {
            let oSelectedItem = oEvent.getParameter("selectedItem");
            if (oSelectedItem.getKey() == 'EN') {
                var oResourceModel = new sap.ui.model.resource.ResourceModel({
                    bundleName: "project1.i18n.i18n",
                    bundleLocale: "EN" // Hindi Set Karna
                });
            } else if(oSelectedItem.getKey() == 'ur'){
                var oResourceModel = new sap.ui.model.resource.ResourceModel({
                    bundleName: "project1.i18n.i18n_ur",
                    bundleLocale: "ur"
                });
            }
            else {
                var oResourceModel = new sap.ui.model.resource.ResourceModel({
                    bundleName: "project1.i18n.i18n_hi",
                    bundleLocale: "hi" // Hindi Set Karna
                });
            }

            this.getView().setModel(oResourceModel, "i18n");
        }

    })
})