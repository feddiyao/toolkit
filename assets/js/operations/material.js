/**
 * Created by Feddiyao on 2017/7/14.
 */
$(document).ready(function () {
  var type = getQueryString('type');

  if (type == 'consultation') {
    var title = new Vue({
      el: '#header',
      data: {
        title: '会诊需准备的材料'
      }
    });
    $.getJSON("../assets/data/material_consultation.json",function(data){
      var material_consultation = new Vue({
        el: '#page__bd',
        data: {
          steps: data.material_consultation,
          remark: data.remark
        }
      });
    });
  } else if (type == 'gene') {
    var title = new Vue({
      el: '#header',
      data: {
        title: '分子检测需准备的材料'
      }
    });
    $.getJSON("../assets/data/material_gene.json",function(data){
      var material_gene = new Vue({
        el: '#page__bd',
        data: {
          steps: data.material_gene,
          remark: data.remark
        }
      });
    });
  }
 

  $(function() {
    FastClick.attach(document.body);
  });
})