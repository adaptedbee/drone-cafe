var DroneCafeAppCookPage = function() {
    var self = this;

    var url = 'http://localhost:1337/#!/kitchen';

    var orderedList = element.all(by.repeater('order in orderedDishes'));
    var cookingList = element.all(by.repeater('order in cookingDishes'));

    self.get = function() {
        browser.get(url);
    };

    self.getOrderedList = function() {
        return orderedList;
    };

    self.getCookingList = function() {
        return cookingList;
    };
};

module.exports = DroneCafeAppCookPage;