#set($SERVICE = ${StringUtils.removeAndHump($NAME, "-")} + "Service")
"use strict";

app.service("${SERVICE}", function(${DS}log) {

    ${DS}log.debug("${SERVICE}()");

});
