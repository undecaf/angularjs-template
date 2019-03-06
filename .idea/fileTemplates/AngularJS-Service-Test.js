#if($NAME.matches(".+[.]spec"))
#set($SERVICE_JS = $NAME.replaceAll("[.]spec$", ""))
#set($SERVICE = ${StringUtils.removeAndHump($SERVICE_JS, "-")})
#set($SERVICE_NAME = $SERVICE + "Service")
"use strict";

describe("${SERVICE_NAME}", () => {
    let $SERVICE;

    beforeEach(() => {
        module("???");
        inject($SERVICE_NAME => $SERVICE = $SERVICE_NAME);
    });
});
#else
// Unit-Test-Dateinamen müssen auf .spec enden!
#end