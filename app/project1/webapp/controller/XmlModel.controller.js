sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    return Controller.extend("project1.controller.XmlModel", {
        onInit: function () {
            var sXMLData = `<Employees>
                                <Employee>
                                    <Name>Rahul</Name>
                                    <Age>30</Age>
                                    <City>Delhi</City>
                                </Employee>
                                <Employee>
                                    <Name>Neha</Name>
                                    <Age>28</Age>
                                    <City>Mumbai</City>
                                </Employee>
                            </Employees>`;
        
            // XML Model Create karein
            var oModel = new sap.ui.model.xml.XMLModel();
            oModel.setXML(sXMLData); // XML Data ko Model me set karein
        
            // View me Model Bind karein
            this.getView().setModel(oModel, "xmlModel");
        }
        
    })
})