sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Dialog",
    "sap/ui/layout/form/SimpleForm",
    "sap/m/Label",
    "sap/m/Text",
	"sap/m/MessageBox",
    'sap/ui/core/Fragment'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Dialog, SimpleForm, Label, Text, MessageBox, Fragment) {
        "use strict";

        return Controller.extend("cl.arauco.mmlog.controller.View1", {
            onInit: function () {
                debugger;
            },

            onDefaultDialogPress1: function (oEvent) {
                debugger;
                MessageBox.information("El status Pedido Emitido fue generado el día: 02-03-2022",  {
                    title: "Información"
                });
            },

            onDefaultDialogPress1: function (oEvent) {
                var oButton = oEvent.getSource(),
                    oView = this.getView();
    
                if (!this._pPopover) {
                    this._pPopover = Fragment.load({
                        id: oView.getId(),
                        name: "cl.arauco.mmlog.view.popoverFrag",
                        controller: this
                    }).then(function(oPopover) {
                        oView.addDependent(oPopover);
                        //oPopover.bindElement("/ProductCollection/0");
                        return oPopover;
                    });
                }
                this._pPopover.then(function(oPopover) {
                    oPopover.openBy(oButton);
                });
            },

            onDefaultDialogPress: function () {
                if (!this.oDefaultDialog) {
                    this.oDefaultDialog = new Dialog({
                        title: "Pedido Emitido",
                        content: new sap.m.FlexBox({
                            height: "100%",
                            alignItems: "Center",
                            justifyContent: "Center",
                            items: [
                                new Label({text:"Name"}),
                                new Text({text:"Texto"})
                            ]
                        }),
                        beginButton: new sap.m.Button({
                            text: "OK",
                            press: function () {
                                this.oDefaultDialog.close();
                            }.bind(this)
                        }),
                        endButton: new sap.m.Button({
                            text: "Close",
                            press: function () {
                                this.oDefaultDialog.close();
                            }.bind(this)
                        })
                    });
    
                    // to get access to the controller's model
                    this.getView().addDependent(this.oDefaultDialog);
                }
    
                this.oDefaultDialog.open();
            },
            
            onPressNav: function (oEvent) {
                this.getOwnerComponent().getRouter().navTo("object", {
                    objectId : 111
                }, true);
            },

            onPressNav11: function () {
                this.getOwnerComponent().getRouter().navTo("object1", {
                    objectId : 111
                }, true);
            },

            onPressNav1: function (oEvent) {
                var sPreviousHash = History.getInstance().getPreviousHash();
                /*,
                                oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");*/
    
                if (sPreviousHash !== undefined) {
                    history.go(-1);
                } else {
                this.getOwnerComponent().getRouter().navTo("object1", {
                    objectId : 111
                }, true);
                }
            },
            

            navToPrinci: function (oEvent) {
                var sPreviousHash = History.getInstance().getPreviousHash();
			/*,
							oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");*/

			if (sPreviousHash !== undefined) {
				history.go(-1);
			} else {
				this.getRouter().navTo("RouteView1", {}, true);
			}
            }
        });
    });
