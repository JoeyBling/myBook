require([
    "gitbook"
], function(gitbook, $) {
    var mygitalk = {};

    gitbook.events.bind("start", function(e, config) {
        mygitalk = config.mygitalk || {};

        initMygitalk();
    });

    gitbook.events.bind("page.change", initMygitalk);

    function initMygitalk() {
        mygitalk["id"] = window.location.pathname;

        const gitalk = new Gitalk(mygitalk);
        gitalk.render("gitalk-container");
    }
});