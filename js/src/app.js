(function (angular) {
    'use strict';
    if (!angular) { throw 'Angular no esta definido'; }

    window.appName = "jorge-posada";

    var config = function () {

        $(document).ready(function () {


            setTimeout(function () {
                $('.scrollTo').click(function (event) {
                    event.preventDefault();
                    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 50 }, 500);
                });
            }, 100);

        });


    }
    config.$inject = [];

    angular.module(window.appName, ['ui.router'])
        .config(config);

})(window.angular);
