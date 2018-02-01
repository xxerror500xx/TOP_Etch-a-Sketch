var options = {
  defaults: {
    length: 4, // Number of rows
    width: 4,  // Number of colums
    bgColor: "#ffffff",
    fgColor: "#000000",
    effect: "none"
  },

  displayGridResolution: function (length = this.defaults.length, width = this.defaults.width) {
    $("#resolution-get").text(length + " X " + width);
  },
  displayBG: function (bgColor = this.defaults.bgColor) {
    $("#color-bg-get").text(bgColor);
    $("#background").val(bgColor);
  },
  displayFG: function (fgColor = this.defaults.fgColor) {
    $("#color-fg-get").text(fgColor);
    $("#foreground").val(fgColor);
  },
  displayEffect: function (effect = this.defaults.effect) {
    $("#color-ef-get").text(effect);
  }
  resetToDefault: function () {
    options.displayGridResolution();
    options.displayBG();
    options.displayFG();
    options.displayEffect();
    options.makeGrid();
  }
};

$("document").ready(function () {
  options.resetToDefault();
});
