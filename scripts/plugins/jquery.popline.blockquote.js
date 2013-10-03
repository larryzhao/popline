/*
  jquery.popline.link.js 0.0.1

  Version: 0.0.1
  Updated: May 18th, 2013

  (c) 2013 by kenshin54
*/
;(function($) {

  $.popline.addButton({
    blockquote: {
      iconClass: "icon-quote-left",
      mode: "edit",
      action: function(event, popline) {
        // var selection = window.getSelection();
        
        var selection = $.holySelection.getSelection();
        var node = $.popline.utils.findNodeWithTags(selection.focusNode, 'BLOCKQUOTE');
        // var node = $.popline.utils.findNodeWithTags(selection.focusNode, 'h3');

        if (node) {
          // document.execCommand('formatblock', false, '<h1>');
          document.execCommand('formatblock', false, '<P>');
        } else {
          document.execCommand('formatblock', false, '<BLOCKQUOTE>');
          // document.execCommand('formatblock', false, '<h3>');
        }
      }
    }
  });
})(jQuery);
