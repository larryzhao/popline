;(function($) {
  function HolySelection(text, boundingRect, focusNode) {
    this.text = text;
    this.boundingRect = boundingRect;
    this.focusNode = focusNode
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
      var focusNode = sel.focusNode;
      var rect = { 
        "top": boundingRect.top, 
        "bottom": boundingRect.bottom, 
        "left": boundingRect.left, 
        "right": boundingRect.right, 
        "width": boundingRect.width, 
        "height": boundingRect.height, 
      };

      return new HolySelection(text, rect, focusNode); 
    },

    "_getSelectionIE8": function(){ 
      var sel = document.selection.createRange();
      var text = sel.text;
      var focusNode = sel.parentElement();
      var rect = {
        "top": sel.offsetTop, 
        "bottom": undefined, 
        "left": sel.offsetLeft, 
        "right": undefined, 
        "width": sel.boundingWidth, 
        "height": sel.boundingHeight, 
      };
      return new HolySelection(text, rect, focusNode);
    }
  }
})(jQuery);

$.holySelection.init();
