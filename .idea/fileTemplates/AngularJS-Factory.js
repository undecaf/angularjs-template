#set($FACTORY = ${StringUtils.removeAndHump($NAME, "-")})
"use strict";

app.factory("${FACTORY}", function() {

    function ${FACTORY}(template, modifier) {
    
        // Properties und ihre Defaultwerte
        let properties = {
        };

        Object.assign(this, properties, template, modifier);

        Object.keys(properties).forEach(k => Object.defineProperty(this, k, { writable: false }));
        
        // Liefert eine neue Instanz dieses Objekts mit den angegebenen Änderungen
        this.variante = modifier => new ${FACTORY}(this, modifier);
    }

    return ${FACTORY};
});
