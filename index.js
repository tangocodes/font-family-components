var json = $.getJSON(
  'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBwIX97bVWr3-6AIUvGkcNnmFgirefZ6Sw',
  function (data) {
    $.each(data.items, function (index, font) {
      $('.combobox').append(
        $('<option></option>').attr('value', font.family).text(font.family)
      );
      $('.google-fonts').append(
        "'" + font.family + "' => array('title' => '" + font.family + "'),<br>"
      );
    });
  }
);
$(document).ready(function () {
  // Apply selected font to the page
  $('.combobox').change(function () {
    var selectedFont = $(this).val();
    $('body').css('font-family', selectedFont);

    var encodedFont = encodeURIComponent(selectedFont);
    var fontUrl =
      'https://fonts.googleapis.com/css2?family=' +
      encodedFont +
      '&display=swap';

    var styleTag = $('<style>').attr('data-google-font', encodedFont);
    styleTag.text('@import url("' + fontUrl + '");');

    $('head').append(styleTag);
  });
});
