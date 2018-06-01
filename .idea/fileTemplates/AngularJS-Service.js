#if($NAME.matches("[a-z0-9-]+"))
#set($SERVICE = ${StringUtils.removeAndHump($NAME, "-")} + "Service")
"use strict";

app.service("${SERVICE}", function(${DS}log) {

    ${DS}log.debug("${SERVICE}()");

});
#else
// Servicce-Dateinamen dürfen nur Kleinbuchstaben, Ziffern und '-' enthalten
#end