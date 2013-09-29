;(function($) {
  function HolySelection(text, boundingRect) {
    this.text = text;
    this.boundingRect = boundingRect;
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
      var sel = window.getSelection();
      var boundingRect = sel.getRangeAt(0).getBoundingClientRect();
      var text = sel.toString();
      var rect = { 
        "top": boundingRect.top, 
        "bottom": boundingRect.bottom, 
        "left": boundingRect.left, 
        "right": boundingRect.right, 
        "width": boundingRect.width, 
        "height": boundingRect.height, 
      };

      return new HolySelection(text, rect); 
    },

    "_getSelectionIE8": function(){ 
      var sel = document.selection.createRange();
      var text = sel.text;
      var rect = {
        "top": sel.offsetTop, 
        "bottom": undefined, 
        "left": sel.offsetLeft, 
        "right": undefined, 
        "width": sel.boundingWidth, 
        "height": sel.boundingHeight, 
      };
      return new HolySelection(text, rect); 
    }
  }
})(jQuery);

$.holySelection.init();
