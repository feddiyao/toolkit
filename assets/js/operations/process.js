/**
 * Created by Feddiyao on 2017/7/13.
 */
var galleryHtml = $('#gallery')[0].childNodes[1].nodeValue;
$(document).ready(function () {
  var type = getQueryString('type');
  if (type == 'gene') {
    var title = new Vue({
      el: '#header',
      data: {
        title: '分子检测流程'
      }
    });
    $.getJSON("../assets/data/process_gene.json",function(data) {
      var gene = new Vue({
        el: '#page__bd',
        data: {
          steps: data.process_gene
        }
      });
      galleryRender();
    });
  } else {
    var province = getQueryString('province');
    if (province === 'beijing') {
      var title = new Vue({
        el: '#header',
        data: {
          title: '北京会诊流程'
        }
      });
    } else if(province === 'shanghai') {
      var title = new Vue({
        el: '#header',
        data: {
          title: '上海会诊流程'
        }
      });
    }

    $.getJSON("../assets/data/process_" + province + ".json",function(data){
      if (province === 'beijing') {
        var consultation = new Vue({
          el: '#page__bd',
          data: {
            steps: data.process_beijing
          }
        });
      } else if (province == 'shanghai') {
        var consultation = new Vue({
          el: '#page__bd',
          data: {
            steps: data.process_shanghai
          }
        });
      }
      galleryRender();
    });
  }



  $(function() {
    FastClick.attach(document.body);
  });
});

function galleryRender() {

  $('.show_gallery').click(function () {
    var srcs = $(this).attr("imgName").split(';');
    var newHtml = '';
    for (var i in srcs) {
      newHtml += galleryHtml.replace(/%example.jpg%/g, '../assets/images/' + srcs[i])
    }
    $('#gallery').empty();
    $('#gallery')[0].innerHTML = newHtml
    blueimp.Gallery(
        document.getElementById('gallery').getElementsByTagName('a'),
        {
          container: '#blueimp-gallery-carousel',
          carousel: true
        }
    );
    document.getElementById('gallery').onclick = function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          links = this.getElementsByTagName('a');
      blueimp.Gallery(links, options);
    };

    $('#blueimp-gallery').addClass('blueimp-gallery-controls');

    $('#gallery').find('a:first').click();

  });
}