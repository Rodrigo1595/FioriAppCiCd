/*global QUnit*/

sap.ui.define([
	"cicd/test/controller/testCiCd.controller"
], function (Controller) {
	"use strict";

	QUnit.module("testCiCd Controller");

	QUnit.test("I should test the testCiCd controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
