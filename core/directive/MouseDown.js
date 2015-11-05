define(['app'], function(app) {
    'use strict';
    return app.register.directive('mouseDown', ['$swipe',
        function($swipe) {
            return {
                restrict: 'EA',
                link: function(scope, ele, attrs, ctrl) {
                    $swipe.bind(ele, {
                        'start': function() {
                            ele.addClass('mousedown');
                        },
                        'end': function() {
                            ele.removeClass('mousedown');
                        },
                        'cancel': function() {
                            ele.removeClass('mousedown');
                        }
                    });
                }
            }
        }
    ]);
});
