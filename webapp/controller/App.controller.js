sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("cadaxo.ui5responsive-grid-layout-visualiser.controller.App", {
		onInit: function() {
			var oModelVisualiser = new JSONModel({
				width: "100%",
				vSpacing: [
					{key: "0",   text :"0"},
					{key: "0.5", text :"0.5"},
					{key: "1",   text :"1"},
					{key: "2",   text :"2"}
				],
				hSpacing: [
					{key: "0",   text :"0"},
					{key: "0.5", text :"0.5"},
					{key: "1",   text :"1"},
					{key: "2",   text :"2"}
				],
				position: [
					{key: "Left", text:"Left"},	
					{key: "Right", text:"Right"},
					{key: "Center", text:"Center"}
				],
				defaultSpan: "XL3 L3 M6 S12",
				defaultIndent: "XL0 L0 M0 S0",
				containerQuery: false		
			});
			
			var oModelSelected = new JSONModel({
				hSpacing: 1,	
				vSpacing: 1,
				position: "Left"
			});
			
			this.getView().setModel(oModelVisualiser, "visualiser");
			this.getView().setModel(oModelSelected, "selector");
		},
		
		getViewModel: function(sModel) {
			return this.getView().getModel(sModel);
		},
		
		onSelectedSpacing: function(oEvent) {
			var iSpacing = parseFloat(oEvent.getSource().getSelectedKey());
			var sProperty = oEvent.getSource().getId().indexOf("vSpacing") > 0 ? "vSpacing" : "hSpacing";
			this.getViewModel("selector").setProperty("/"+sProperty,iSpacing);
		},
		
		onSelectedPosition: function(oEvent) {
			var sPosition = oEvent.getSource().getSelectedKey();
			this.getViewModel("selector").setProperty("/position",sPosition);
		}
		
		
		
	});
});