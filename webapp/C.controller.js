sap.ui.define([
		'jquery.sap.global',
		'sap/m/MessageToast',
		'sap/ui/core/Fragment',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, MessageToast, Fragment, Controller, JSONModel) {
	"use strict";

	var CController = Controller.extend("sap.m.sample.ViewSettingsDialog.C", {

		onInit: function () {
			var oJSON = {
				Field1: [ 
					{
						"text": "Filter1",
						"key": "1" // note this: specifically set key field
					},
					{
						"text": "Filter2",
						"key": "2"
					},
					{
						"text": "Filter3",
						"key": "3"
					}	
				],
				Field2: [
					{
						"text": "Filter1" // note here: no explicit key field set
					},
					{
						"text": "Filter2"
					},
					{
						"text": "Filter3"
					},
					{
						"text": "Filter4"
					}	
				],
				Field3: [
					{
						"text": "Filter1"
					},
					{
						"text": "Filter2"
					}	
				]
				
			};

			var oModel = new JSONModel(oJSON);
			this.getView().setModel(oModel, "Test");
		},

		_getDialog : function () {
			if (!this._oDialog) {
				
				this._oDialog = sap.ui.xmlfragment("sap.m.sample.ViewSettingsDialog.Dialog", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},
		handleOpenDialog: function () {
			this._getDialog().open();
		},
		handleOpenDialogFilter: function () {
			this._getDialog().open("filter");
		},
		handleConfirm: function (oEvent) {
			if (oEvent.getParameters().filterString) {
				MessageToast.show(oEvent.getParameters().filterString);
			}
		},
	});

	return CController;

});
