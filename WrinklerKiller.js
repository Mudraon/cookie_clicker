Game.registerMod("WrinklerKiller", {

    init: function () {

        // ===== CONFIG =====
        this.THRESHOLD = 1e6; // kolik cookies musí wrinkler nasát (1 milion)
        this.INTERVAL = 60000; // kontrola každých 60 sekund

        // ===== LOGIC =====
        this.interval = setInterval(() => {

            let popped = 0;

            Game.wrinklers.forEach(w => {
                if (w.phase === 2 && w.sucked >= this.THRESHOLD) {
                    w.hp = 0;
                    popped++;
                }
            });

            if (popped > 0) {
                Game.Notify(
                    "Wrinkler Killer",
                    `Popped ${popped} wrinklers`
                );
            }

        }, this.INTERVAL);

        Game.Notify(
            "Wrinkler Killer loaded",
            `Threshold: ${this.THRESHOLD}`
        );
    },

    unload: function () {
        clearInterval(this.interval);
        Game.Notify("Wrinkler Killer", "Stopped");
    }

});