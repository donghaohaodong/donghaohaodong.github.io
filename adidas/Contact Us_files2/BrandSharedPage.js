app.define('component/common/BrandSharedPage', [
    'jquery',
    'app.resources',
    'Component'
], function (jQuery, app, Component) {
    'use strict';
    
    function BrandSharedPage (el) {
        Component.call(this, el);
        this.updateHeader();
    }
    
    BrandSharedPage.prototype = jQuery.extend({}, Component.prototype);
    
    BrandSharedPage.prototype.updateHeader = function () {
		jQuery.ajax({
			dataType: "jsonp",
			url		: app.URLs.pageHeaderInfo,
			async   : false,
			success : function(response, textStatus) {
				if(response.basket.itemCount) {
					jQuery("#minicart .minicarttotal strong").html(response.basket.itemCount);
					if (response.basket.itemCount > 0) {
						jQuery(".minicarttotal, .minicart-button").addClass("minicart-notempty");
					}
				}
				if(response.customer.loggedIn) {
					var welcomeMessage = response.customer.message + ' ' + response.customer.firstName;
					var selfServiceContainer = jQuery(".selfservice-item-login").html();
					if(selfServiceContainer) {
						jQuery(".selfservice-item-login").html('<a class="selfservice-link-login" href="' + app.URLs.accountShow + '" title="' + welcomeMessage + '">' + welcomeMessage + '</a>');
						jQuery(".selfservice-item-login").addClass("active");
					}
				}
			}
		});    	
    }
    
    return BrandSharedPage;
});