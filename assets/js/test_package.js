/**
 * Created by Feddiyao on 2017/7/4.
 */
$(document).ready(function () {
  $(function() {
    FastClick.attach(document.body);
  });

  $.getJSON("../assets/data/gene.json",function(data) {
    var test_package = new Vue({
      el: '#page__bd',
      data: {
        content: data.test_package,
        testPeriod: data.test_period.test_package
      }
    })

    $(document).on("click", ".show-inform", function() {
      var name = $(this).attr('name');
      $.each(data.remark_info.test_package, function (n, value) {
        if (value.name === name) {
          $.alert(value.info, name);
        }
      })
    });
  })
})