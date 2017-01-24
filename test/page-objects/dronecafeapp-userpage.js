var DroneCafeAppUserPage = function() {
    var self = this;

    var url = 'http://localhost:1337/#!/';

    var pageTitle = browser.getTitle();

    self.get = function() {
        browser.get(url);
    };

    self.getPageTitle = function() {
        return pageTitle;
    };
};

module.exports = DroneCafeAppUserPage;