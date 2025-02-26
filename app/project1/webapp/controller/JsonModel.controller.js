sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    return Controller.extend("project1.controller.JsonModel", {
        onInit: function () {
            let oData = {
                "employees": [
                  { "name": "Amit", "age": 30, "city": "Delhi" },
                  { "name": "Rohit", "age": 28, "city": "Mumbai" },
                  { "name": "Priya", "age": 25, "city": "Bangalore" }
                ]
              }
           let oModel = new sap.ui.model.json.JSONModel(oData);
           // oModel.loadData("model/employee.json");
            this.getView().setModel(oModel, "empModel");
          
          // Get data
          let rModel=  this.getView().getModel("empModel");
          let rData = rModel.getProperty('/employees');

          // Add data
          rData.push({'name':'Monish','age':26,'city':'Hapur'});
          rModel.setProperty("/employees", rData);
          

        // Update data
        //   let oModel1  = this.getView().getModel("empModel");
        //   oModel1.setProperty("/employees/0/city",'Noida');
        //   console.log(oModel1)

        //Delete Data

        rData.splice(1,1);
        rModel.setProperty('/employees',rData);
        console.log(rData);

        }
    })
})