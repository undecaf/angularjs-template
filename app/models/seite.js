"use strict";

app.factory("Seite", function () {

    function Seite(konstruktor, data) {

        // Schreibgeschützte Properties und ihre Defaultwerte
        let properties = {
            page: {},
            entities: [],
        };

        Object.assign(this, properties, data, { _embedded: undefined });

        // Objekte in den gewünschten Datentyp umwandeln
        this.entities = data._embedded[konstruktor.path]
            .map(obj => new konstruktor(obj));

        // Hilfsvariable erzeugen
        this.vorige = this.page.number - 1;
        this.naechste = this.page.number + 1;
        this.erste = 0;
        this.letzte = this.page.totalPages-1;

        this.istErste = this.page.number <= this.erste;
        this.istLetzte = this.page.number >= this.letzte;

        // Properties schreibschützen
        Object.keys(properties).forEach(k => Object.defineProperty(this, k, {writable: false}));
    }

    return Seite;
});
