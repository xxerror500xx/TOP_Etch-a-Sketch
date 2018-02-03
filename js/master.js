var options = {

  defaults: {
    rows: 50, // Number of rows
    columns: 50, // Number of colums
    bgColor: "#ffffff",
    fgColor: "#000000",
    effect: "none"
  },
  settings: {},
  setDefaults: function(){
    options.settings = Object.assign({}, options.defaults);
  },
  changeBG: function() {
    options.settings.bgColor = $("#background").val();
    console.log(options.defaults.bgColor);
  },
  changeFG: function() {
    options.settings.fgColor = $("#foreground").val();
  },
  displayGridResolution: function() {
    $("#resolution-get").text(this.settings.rows + " X " + this.settings.columns);
  },
  displayBG: function() {
    $("#color-bg-get").text(this.settings.bgColor);
    $("#background").val(this.settings.bgColor);
  },
  displayFG: function() {
    $("#color-fg-get").text(this.settings.fgColor);
    $("#foreground").val(this.settings.fgColor);
  },
  displayEffect: function() {
    $("#color-ef-get").text(this.settings.effect);
  },
  clearGrid: function() {
    $("#grid").empty();
  },
  makeGrid: function() {
    var rows = this.settings.rows;
    var columns = this.settings.columns;
    var bgColor = this.settings.bgColor;
    var fgColor = this.settings.fgColor;
    options.clearGrid();
    options.displayGridResolution();
    options.displayBG();
    options.displayFG();
    options.displayEffect();
    for (var i = 0; i < rows; i++) {
      $("#grid").append("<div id='gr-" + i + "' class='row'></div>");
      var height = $('#gr-' + i).width() / columns;
      $("#gr-" + i).css('height', height + 'px');
      for (var j = 0; j < columns; j++) {
        $("#gr-" + i).append("<div id='cell-" + j + "' class='col mh-0 p-0 h-100'></div>");
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
    options.setDefaults();
    $("#background").val(options.defaults.bgColor);
    $("#foreground").val(options.defaults.fgColor);
    options.clearGrid();

  }
};

$("document").ready(function() {
  options.setDefaults();
  options.resetToDefault();
});
$(window).resize(function() {
  options.clearGrid();
  options.makeGrid();
});
