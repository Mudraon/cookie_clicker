Game.registerMod("WrinklerKiller", {

    init: function () {
        // https://orteil.dashnet.org/cookieclicker/img/icons.png
        // ===== CONFIG =====
        this.THRESHOLD = 1e9;
        this.INTERVAL = 60000;

        // ===== STATE =====
        this.totalPopped = 0;
        this.lastNotify = 0;
        this.NOTIFY_INTERVAL = 10000; // notif max 1x za 10s

        // ===== LOGIC =====
        this.interval = setInterval(() => {

            let poppedNow = 0;

            Game.wrinklers.forEach(w => {
                if (w.phase === 2 && w.sucked >= this.THRESHOLD) {
                    w.hp = 0;
                    poppedNow++;
                }
            });

            if (poppedNow > 0) {
                this.totalPopped += poppedNow;

                let now = Date.now();

                // zobraz jen když uplynul interval
                if (now - this.lastNotify > this.NOTIFY_INTERVAL) {
                    this.lastNotify = now;

                    Game.Notify(
                        "Wrinkler Killer",
                        `+${poppedNow} | Total: ${this.totalPopped}`,
                        [31, 32],
                        true,
                        3
                    );
                }
            }

        }, this.INTERVAL);

        Game.Notify(
            "Wrinkler Killer loaded",
            `Threshold: ${this.THRESHOLD}`,
            [31, 32],
            true,
            3
        );
    },

    unload: function () {
        clearInterval(this.interval);
        Game.Notify("Wrinkler Killer", "Stopped", undefined, true, 3);
    }

});

//32x31