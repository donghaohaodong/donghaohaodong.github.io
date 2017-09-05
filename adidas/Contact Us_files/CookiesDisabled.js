app.define('component/common/CookiesDisabled', [
    'jquery',
    'utils/cookies'
], function ($, cookies) {
    
    function CookiesDisabled (el) {
        if (!cookies.enabled()) {
            $("#cookiesdisabled").show();
        }
    }
    
    return CookiesDisabled;
});