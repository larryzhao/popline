;(function($) {
  function HolySelection(htmlText) {
    this.htmlText = htmlText;
  }
  
  HolySelection.prototype.length = function() {
    return this.htmlText.length;
  }

  $.holySelection = {
    "init": function(){
      if (window.getSelection) {
        $.holySelection.getSelection = $.holySelection._getSelectionText;
      } else {
        $.holySelection.getSelection = $.holySelection._getSelectionTextIE8;
      }
    },

    "_getSelectionText": function(){ return new HolySelection(window.getSelection().toString()) },
    "_getSelectionTextIE8": function(){ return new HolySelection(document.selection.createRange().htmlText); }
  }
})(jQuery);

$.holySelection.init();
