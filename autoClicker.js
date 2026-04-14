Game.registerMod("AutoClicker", {

    init: function () {

        this.interval = setInterval(() => {
            Game.ClickCookie();
        }, 5);

        Game.Notify(
            "AutoClicker loaded",
            "Big cookie clicking automatically"
        );
    },

    unload: function () {
        clearInterval(this.interval);
    }
});