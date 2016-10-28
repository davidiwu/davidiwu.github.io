
var LayoutSlot = function (top, left, width, height) {
	this.top = 0,
	this.left = 0,
	this.width = 0,
	this.height = 0,
	"undefined" != typeof top && (this.top = top),
	"undefined" != typeof left && (this.left = left),
	"undefined" != typeof width && (this.width = width),
	"undefined" != typeof height && (this.height = height);
};

var Layout = function (name, width, height, length, slots, aspectRatio, ws) {
	this.name = "Unnamed",
	this.width = 0,
	this.height = 0,
	this.length = 0,
	this.slots = [],
	this.aspectRatio = 4 / 3,
	this.ws = false,
	"undefined" != typeof name && (this.name = name),
	"undefined" != typeof width && (this.width = width),
	"undefined" != typeof height && (this.height = height),
	"undefined" != typeof length && (this.length = length),
	"undefined" != typeof slots && (this.slots = slots),
	"undefined" != typeof aspectRatio && (this.aspectRatio = aspectRatio),
	"undefined" != typeof ws && (this.ws = ws);
};

(function ($) {
	var layouts = [];
	layouts.push(new Layout("1 Camera Layout", 1, 1, 1, [new LayoutSlot(0, 0, 1, 1)], 4 / 3, !1));
	layouts.push(new Layout("4 Camera Layout", 4, 4, 4, [new LayoutSlot(0, 0, 2, 2), new LayoutSlot(0, 2, 2, 2),
				new LayoutSlot(2, 0, 2, 2), new LayoutSlot(2, 2, 2, 2)], 4 / 3, !1));
	layouts.push(new Layout("9 Camera Layout", 3, 3, 9, [new LayoutSlot(0, 0, 1, 1), new LayoutSlot(0, 1, 1, 1),
				new LayoutSlot(0, 2, 1, 1), new LayoutSlot(1, 0, 1, 1), new LayoutSlot(1, 1, 1, 1),
				new LayoutSlot(1, 2, 1, 1), new LayoutSlot(2, 0, 1, 1), new LayoutSlot(2, 1, 1, 1),
				new LayoutSlot(2, 2, 1, 1)], 4 / 3, !1));
	layouts.push(new Layout("7 Camera Layout", 4, 4, 7, [new LayoutSlot(0, 0, 2, 2), new LayoutSlot(0, 2, 2, 2),
				new LayoutSlot(2, 0, 2, 2), new LayoutSlot(2, 2, 1, 1), new LayoutSlot(2, 3, 1, 1),
				new LayoutSlot(3, 2, 1, 1), new LayoutSlot(3, 3, 1, 1)], 4 / 3, !1));
	layouts.push(new Layout("8 Camera Layout", 4, 4, 8, [new LayoutSlot(0, 0, 3, 3), new LayoutSlot(0, 3, 1, 1),
				new LayoutSlot(1, 3, 1, 1), new LayoutSlot(2, 3, 1, 1), new LayoutSlot(3, 0, 1, 1),
				new LayoutSlot(3, 1, 1, 1), new LayoutSlot(3, 2, 1, 1), new LayoutSlot(3, 3, 1, 1)], 4 / 3, !1));
	
	$.fn.smartView = function (options) {
		var uuid = new Date().getTime();
		return this.each(function () {

			uuid += 1;
            
			options = options || {};
			
			if (!options.layouts) {
			    options.layouts = [];
			}
			options.layouts = $.merge($.merge([], layouts), options.layouts);

			var smartViewContainer = $(this);

			var salvoLayoutContainer = $('<div />')
				.attr({
					id : 'container-' + uuid,
					'class' : 'layout-container'
				});

			var salvoLayoutOwnerContainer = $('<div />')
				.attr({
					id : 'menu-' + uuid,
					'class' : 'viewer-menu'
				})
				.appendTo(smartViewContainer);

			salvoLayoutContainer.insertAfter(salvoLayoutOwnerContainer);
			salvoLayoutContainer.salvoLayout(options);
			salvoLayoutOwnerContainer.salvoLayoutOwner(options, salvoLayoutContainer);

		});
	}
}(jQuery));
