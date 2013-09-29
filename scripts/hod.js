;(function($) {
  function HolySelection(text) {
    this.text = text;
  }
  
  // HolySelection.prototype.htmlText = function() {
  //   return this.htmlText;
  // }

  // HolySelection.prototype.text = function() {
  //   return this.text;
  // }

  $.holySelection = {
    "init": function(){
      if (window.getSelection) {
        $.holySelection.getSelection = $.holySelection._getSelection;
      } else {
        $.holySelection.getSelection = $.holySelection._getSelectionIE8;
      }
    },

    "_getSelection": function(){ 
      return new HolySelection(window.getSelection().toString()) 
    },

    "_getSelectionIE8": function(){ 
      return new HolySelection(document.selection.createRange().text); 
    }
  }
})(jQuery);

$.holySelection.init();
