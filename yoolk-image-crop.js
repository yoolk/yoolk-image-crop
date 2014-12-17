angular.module('yoolkImageCrop', []).directive('yoolkImageCrop', function() {
  return {
    template: "<img id=image-crop-{{rand}} src='{{imageSrc}}'></img>",
    replace: true,
    restrict: 'AE',
    scope: {
      imageSrc: '@',
      startx: '@',
      starty: '@',
      minWidth: '@',
      minHeight: '@',
      boxWidth: '@',
      boxHeight: '@',
      result: '='
    },
    link: function(scope, element, attributes) {
      scope.rand = Math.round(Math.random() * 99999);

      // show coords
      function showCoords(c) {
        scope.result.x = c.x;
        scope.result.y = c.y;
        scope.result.x2 = c.x2;
        scope.result.y2 = c.y2;
        scope.result.w = c.w;
        scope.result.h = c.h;
        scope.$apply();

      };

      // apply Jcrop
      element.Jcrop({
        onChange: showCoords,
        minSize: [scope.minWidth, scope.minHeight],
        boxWidth: scope.boxWidth,
        boxHeight: scope.boxHeight,
        allowSelect: false,
        aspectRatio: scope.minWidth / scope.minHeight
      }, function() {
        var jcrop_api;
        jcrop_api = this;
        jcrop_api.animateTo([0, 0, scope.minWidth, scope.minHeight]);
        return
      });
      return
    }
  };
});
