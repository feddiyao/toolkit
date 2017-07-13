/**
 * Created by Feddiyao on 2017/7/4.
 */
$(document).ready(function () {
  $(function() {
    FastClick.attach(document.body);
  });
  
  $.getJSON("../assets/data/gene_target_drug.json",function(json){
    var targeted_drug = new Vue({
      el: '#page__bd',
      data: {
        content: json.targeted_drug,
        testPeriod: json.test_period
      }
    });
  });
})