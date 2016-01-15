(function () {

var UsersSearch = function (el) {
  this.$el = $(el);
  this.$input = this.$el.find("input");
  console.log(this.$input);
  this.$inputVal = this.$input.val();
  this.$ul = this.$el.find("ul");

  this.$input.on("input", this.handleInput.bind(this));
};

UsersSearch.prototype.handleInput = function () {

  var data = { query: this.$el.find("input").val() };

  $.ajax({
    url: "/users/search",
    method: "GET",
    data: data,
    dataType: "json",
    success: function (data, statusText, xhr) {


    },
    error: function (xhr, statusText, error) {

    },
  });
};

UsersSearch.prototype.renderResults = function (data) {
  this.$ul.empty();

  if (data.length > 0) {
    data.forEach(function (el) {
      // this.$ul.html
    });
  }
};


module.exports = UsersSearch;

})();
