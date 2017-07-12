/**
 * Created by Feddiyao on 2017/7/4.
 */
$(document).ready(function () {
  $(function() {
    FastClick.attach(document.body);
  });

  $.getJSON("../assets/data/data_gene.json",function(json){
    var geneData = json.test_gene;
    var name = getQueryString('name')
    var content, type;
    $.each(geneData, function (n, value) {
      if (value.name === name) {
        content = value.gene;
        type = value.type;
      }
    })
    var test_gene = new Vue({
      el: '#page__bd',
      data: {
        name: name,
        content: content,
        type: type
      }
    });
  });
})