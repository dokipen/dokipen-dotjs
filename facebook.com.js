try {
  $('body').append('<div style="position:fixed;top:30px;left:10px;width:35px;height:10px;background-color:black;font-size:10px;padding:5px;z-index:1000"><a id="censor" href="#" style="color:white">Censor</a></div>')
  $('#censor').click(function() {
    $('.actorName a, .uiAttachmentDetails a, .uiStreamMessage a, .UIImageBlock_Content a').each(function() {
      if ($(this).text().match(/Margaret.Groves.Corsaro/)) {
        $(this).text("Mom on Facebook")
      } else if ($(this).text().match(/Robert.Corsaro/)) {
        $(this).text("Embarrassed Son")
      }
    })
    $('.actorName').each(function() {
      var txt = $(this).text()
      if (!txt.match(/(status|Wall|others|Margaret.Groves.Corsaro|Robert.Corsaro|Bob.Corsaro|Mom.on.Facebook|Embarrassed.Son)/)) {
        $(this).text($(this).text().split(' ')[0])
      }
    })
    $('a.actorPic img').attr('src', 'http://doki-pen.org/~doki_pen/blank26x26.gif')
    $('img.uiProfilePhoto').attr('src', 'http://doki-pen.org/~doki_pen/blank26x26.gif')
  })
} catch(e) {
  console.log(e)
}
