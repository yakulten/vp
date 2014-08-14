!function(){
  angular.module("vp").directive("formPane", function(){
    return {
      restrict: "EC",
      link: function(scope, element){
        var toggle = function(){
          element
            .addClass("active")
            .siblings(".active")
            .removeClass("active");
        };
        element.on("click", toggle);
        element.delegate("*", "focus", toggle);
      }
    }
  });
}();