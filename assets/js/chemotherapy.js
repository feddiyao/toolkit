/**
 * Created by Feddiyao on 2017/7/4.
 */
$(document).ready(function () {
  $(function() {
    FastClick.attach(document.body);
  });

  $.getJSON("../assets/data/data_gene.json",function(json){
    var gene_chemotherapy = new Vue({
      el: '#page__bd',
      data: {
        content: json.chemotherapy,
        testPeriod: json.test_period.chemotherapy
      }
    });
  });
})