var options = {
  defaults: {
    length: 10, // Number of rows
    width: 10, // Number of colums
    bgColor: "#ffffff",
    fgColor: "#000000",
    effect: "none"
  },
  displayGridResolution: function(length = this.defaults.length, width = this.defaults.width) {
    $("#resolution-get").text(length + " X " + width);
  },
  displayBG: function(bgColor = this.defaults.bgColor) {
    $("#color-bg-get").text(bgColor);
    $("#background").val(bgColor);
  },
  displayFG: function(fgColor = this.defaults.fgColor) {
    $("#color-fg-get").text(fgColor);
    $("#foreground").val(fgColor);
  },
  displayEffect: function(effect = this.defaults.effect) {
    $("#color-ef-get").text(effect);
  },
  clearGrid: function() {
    $("#grid").empty();
  },
  makeGrid: function(rows = this.defaults.length, columns = this.defaults.width, bgColor = this.defaults.bgColor, fgColor = this.defaults.fgColor) {
    options.clearGrid()
    for (var i = 0; i < rows; i++) {
      $("#grid").append("<div id='gr-" + i + "' class='row'></div>");
      var height = $('#gr-' + i).width() / columns;
      $("#gr-" + i).css('height', height + 'px')
      for (var j = 0; j < columns; j++) {
        $("#gr-" + i).append("<div id='cell-" + j + "' class='col h-100'></div>");
        var column = $("#gr-" + i + " #cell-" + j);
        column.css('background-color', bgColor);
        column.hover(
          function() {
            $( this ).css('background-color', fgColor);
          }
        );
      }
    }

  },
  resetToDefault: function() {
    options.displayGridResolution();
    options.displayBG();
    options.displayFG();
    options.displayEffect();
    options.makeGrid();
  }
};

$("document").ready(function() {
  // options.resetToDefault();
});
$(window).resize(function() {
  options.clearGrid();
  options.makeGrid();
});
