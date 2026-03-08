Game.registerMod("AutoClicker", {

    init: function () {

        this.interval = setInterval(() => {
            Game.ClickCookie();
        }, 20);

        Game.Notify(
            "AutoClicker loaded",
            "Big cookie clicking automatically"
        );
    },

    unload: function () {
        clearInterval(this.interval);
    }
});