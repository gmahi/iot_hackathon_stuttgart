sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ch81fullscreen.controller.Remote", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ch81fullscreen.view.Remote
		 */
		onInit: function() {
			this.getOwnerComponent().getRouter().getRoute("remote").attachPatternMatched(function(oEvent) {
				var that = this;
				/*	var sSalesOrderID =
						oEvent.getParameter("arguments").SalesOrderID;
					this.getView().getModel().metadataLoaded().then(function() {
						var sObjectPath =
							that.getView().getModel().createKey("SalesOrderSet", {
								SalesOrderID: sSalesOrderID
							});
						that.getView().bindElement({
							path: "/" + sObjectPath,
							parameters: {
								expand: "ToLineItems"
							}
						});
					});*/
			}.bind(this));

		},

	/*	onChangeA: function(event) {
			console.log(event.getParameter('state'));

		},*/

		onOn: function(event) {
			console.log("Pressed On Button");

		},
		
		
		onOFF       : function(event) {
			console.log("Pressed OFF Button");

		},
		
		
		onPressA: function(event) {
			console.log("Pressed A Button");

		},
		
		onPressB       : function(event) {
			console.log("Pressed B Button");

		},
		
		onPressC: function(event) {
			console.log("Pressed C Button");

		},
		

		onNavBack: function() {
			history.go(-1);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ch81fullscreen.view.SalesOrder
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ch81fullscreen.view.SalesOrder
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ch81fullscreen.view.SalesOrder
		 */
		//	onExit: function() {
		//
		//	}

	});

});