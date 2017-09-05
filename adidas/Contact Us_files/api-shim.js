/**
 * Polyfill for old API in order to not break external application which rely on it
 */
(function (app){
    var componentModelReady = new jQuery.Deferred(),
        wait = function () {
            if (app.loadingState === 'READY') {
                componentModelReady.resolve();
            } else {
                setTimeout(wait, 10);
            }
        };
    
    wait();
    
    app.log = function () {
        var args = Array.prototype.slice.call(arguments);
        
        componentModelReady.then(function () {
            var logger = app.require('utils/log');
            logger.log.apply(logger, args);
        });
    };
    
    app.getMobileProductGrid = function(products, options) {
        componentModelReady.then(function () {
            var defaults = {
                productQuantity: 8,
                placement: "standard-grid",
                url: app.URLs.getProductTileList,
            };
            var config = jQuery.extend({}, defaults, options || {});

            jQuery.ajax({
                url: config.url,
                data: {'articleNumbers' : products.join("|")}
            }).done(function(data) {
                var processed = jQuery(data).find(".hockeycard").slice(0,config.productQuantity);
                jQuery("." + config.placement).html(processed);
            });
        });
    };
    
    app.getProductCarousel = function(products, options) {
        componentModelReady.then(function () {
            var defaults = {
                showaddtocart: false,
                productQuantity: 20,
                placement: "carousel-grid",
                url: app.URLs.getProductTileList,
            };
            var config = jQuery.extend({}, defaults, options || {});
            if(config.showaddtocart) jQuery("." + config.placement).addClass("show-addtocart");
    
            jQuery.ajax({
                url: config.url,
                data: {'articleNumbers' : products.join("|"), 'showaddtocart' : config.showaddtocart}
            }).done(function(data) {
                var processed = jQuery(data).find(".hockeycard").slice(0,config.productQuantity);
                jQuery("." + config.placement).html(processed);
                jQuery(document).trigger("certonaproducts.loaded", jQuery("." + config.placement).closest('.jcarousel'));
            });
        });
    };
    
    app.updateComponents = function () {
        componentModelReady.then(function () {
            app.require('ComponentMgr').updateComponents();
        });
    };
    
    app.minicart = jQuery.extend(app.minicart || {}, {
        add : function (progressImageSrc, postdata, callback) {
            componentModelReady.then(function () {
                var notificationBroker = app.require('utils/notification-broker');
                
                notificationBroker.notify((app.isMobile ? 'mobile/' : '') + 'checkout/MiniCart', {
                    method: 'add',
                    params: [progressImageSrc, postdata, callback]
                });
            });
        }
    });
    
    function findCmp (cmp, type) {
        var foundCmp = [];
        
        if (cmp.items) {
            for (var i = 0; i < cmp.items.length; ++i) {
                var cursor = cmp.items[i],
                    found;
                
                if (cursor) {
                    if (cursor.internalType === type) {
                        foundCmp.push(cursor);
                    }
                    
                    found = findCmp(cursor, type);
                    
                    if (found.length) {
                        foundCmp = foundCmp.concat(found);
                    }
                }
            }
        }
        
        return foundCmp;
    }
    
    // API that should be exposed after all dependencies loaded
    componentModelReady.then(function () {
        var cmpMgr = app.require('ComponentMgr'),
            root = cmpMgr.root;
        
        // Reebok specific, be aware wouldn't work on adidas instances
        var customReebok = findCmp(root, 'common/CustomReebok')[0];
        var plp = findCmp(root, 'productlist/Plp')[0];
        
        app.custom = {
            getConfiguratorParams : function () {
                return customReebok.getConfiguratorParams();
            },
            getBodyScrollTop : function () {
                return customReebok.getBodyScrollTop();
            },
            getDWProductId : function () {
                return customReebok.getDWProductId();
            },
            getLocalValue : function () {
                return customReebok.getLocalValue();
            },
            getEditStatus : function () {
                return customReebok.getEditStatus();
            },
            getEditButton : function () {
                return customReebok.getEditButton();
            },
            closeFluidDialog : function () {
                return customReebok.closeFluidDialog();
            },
            triggerAnalytics : function (type, params) {
                return customReebok.triggerCustomAnalytics(type, params);
            }
        };
        
        if (plp) {
            app.custom.plpCloseCallback = function( productId ) {
                plp.showCartOnHockeyCard(productId);
            };
        }
    });
    
    app.componentModelReady = componentModelReady;
}(window.app));