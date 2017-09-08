/**
 * Created by Feddiyao on 2017/7/4.
 */
$(document).ready(function () {
  $(function() {
    FastClick.attach(document.body);
  });

  $.getJSON("../assets/data/gene.json",function(json) {
    var tumor_prognosis = new Vue({
      el: '#page__bd',
      data: {
        content: json.tumor_prognosis,
        testPeriod: json.test_period.tumor_prognosis
      }
    })
  })
})