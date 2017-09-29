var $ = jQuery;

(function($){
  $(function(){
  'use strict';

  $('.tabContent').hide();
  $('ul.tabs li:first').addClass('active').show();
  $('.tabContent:first').show();

  $('ul.tabs li').click(function () {
    $('ul.tabs li').removeClass('active');
    $(this).addClass('active');
    $('.tabContent').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });

  $('.login-btn').click(
        function() {
            $('.modal').fadeIn('slow');
        }
    );

   $('html').click(function(e){
     if(!$(e.target).hasClass('login-btn') && $(e.target).hasClass('modal')){
           $('.modal').fadeOut('fast');
     }
    })

  $('.x-icon').click(
        function() {
            $('.modal').fadeOut('fast');
        }
    );


    function fillTable(dataObj){
      var sorted = dataObj.sort(function(a, b) {
        return b.apy - a.apy;
      });
      $('.js-rowdata').html(function(){
        var rowdata = '';
        for(var i = 0; i < dataObj.length; i++) {
          rowdata += '<tr>' +
            '<td class="bank-name">' + dataObj[i].name + '</td>' +
            '<td>' + dataObj[i].apy + '</td>' +
            '<td>' + dataObj[i].earnings + '</td>' +
          '</tr>';
        };
        return rowdata;
      });
      $('.js-rowdata').each(function() {
            $('tr:odd',  this).addClass('odd').removeClass('even');
            $('tr:even', this).addClass('even').removeClass('odd');
        });
    };

    $.ajax({
      type: 'GET',
      dataType: 'json',
      async: false,
      url: 'code-test.json',
      success: function(obj){
        fillTable(obj);
      }
    });

  });
}(jQuery));
