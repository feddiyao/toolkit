/**
 * Created by Feddiyao on 2017/7/4.
 */
$(document).ready(function () {
  $(function() {
    FastClick.attach(document.body);
  });

  $.getJSON("../assets/data/data_gene.json",function(data){
    var ctc = new Vue({
      el: '#page__bd',
      data: {
        content: data.ctc
      }
    });

    $(document).on("click", ".show-inform", function() {
      var name = $(this).attr('name');
      $.each(data.remark_info.ctc, function (n, value) {
        if (value.name === name) {
          $.alert(value.info, name);
        }
      })
    });
  });
})