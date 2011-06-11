try {
  $('body').append('<div style="position:fixed;top:10px;left:10px;width:90px;height:30px;background-color:black;font-size:28px;padding:10px"><a id="censor" href="#" style="color:white">Censor</a></div>')
  $('#censor').click(function() {
    $('.actorName a, .uiAttachmentDetails a, .uiStreamMessage a, .UIImageBlock_Content a').each(function() {
      if (!$(this).text().match(/(status|Wall|others)/)) {
        $(this).css({color: 'black', 'background-color': 'black'})
      }
    })
    $('img.uiProfilePhoto').attr('src', 'http://doki-pen.org/~doki_pen/black26x26.png')
  })
} catch(e) {
  console.log(e)
}
