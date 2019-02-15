#if($NAME.matches("[a-z0-9-]+"))
#set($FACTORY = ${StringUtils.removeAndHump($NAME, "-")})
"use strict";

app.factory("${FACTORY}", function() {

    function ${FACTORY}(template, modifier) {
    
        // Schreibgeschützte Properties und ihre Defaultwerte
        let properties = {
        };

        Object.assign(this, properties, template, modifier);

        // Properties schreibschützen
        Object.keys(properties).forEach(k => Object.defineProperty(this, k, { writable: false }));
        
        // Liefert eine neue Instanz dieses Objekts mit den angegebenen Änderungen
        this.variante = modifier => new ${FACTORY}(this, modifier);
    }

    // Relativer Pfad im REST-API
    ${FACTORY}.path = "${NAME}s";

    return ${FACTORY};
});
#else
// Factory-Dateinamen dürfen nur Kleinbuchstaben, Ziffern und '-' enthalten
#end