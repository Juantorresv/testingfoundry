/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"clarauco/micompra/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
