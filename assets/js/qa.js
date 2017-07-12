/**
 * Created by Feddiyao on 2017/7/10.
 */
$(document).ready(function () {
  $(function() {
    FastClick.attach(document.body);
  });

  $.getJSON("../assets/data/data_QA.json",function(data){
    var ctc = new Vue({
      el: '#page__bd',
      data: {
        content: data.QA
      }
    });
  });
})