/**
 * Created by Feddiyao on 2017/7/4.
 */
$(document).ready(function () {
  $(function() {
    FastClick.attach(document.body);
  });

  $(document).ready(function () {
    $.getJSON("../assets/data/data.json",function(json){
      var targeted_drug = new Vue({
        el: '#page__bd',
        data: {
          content: json.targeted_drug,
          testPeriod: json.test_period.targeted_drug
        }
      });
    });
  })
})