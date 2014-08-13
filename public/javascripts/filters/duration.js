!function(){
  angular.module("vp").filter("duration", function(){
    var fillZero = function(n, len) {
      var num = "" + parseInt(n, 10);
      while(num.length < len) {
        num = "0" + num;
      }
      return num;
    };
    return function(input, format){
      console.log(input)
      var duration = moment.duration(input),
        output = format;

      if(input < 0){
        return "";
      }

      output = output.replace(/mm/, fillZero(duration.asMinutes(), 2));
      output = output.replace(/ss/, fillZero(duration.seconds(), 2));
      return output;
    };
  });
}();