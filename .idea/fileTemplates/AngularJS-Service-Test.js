#if($NAME.matches(".+[.]spec"))
#set($SERVICE_JS = $NAME.replaceAll("[.]spec$", ""))
#set($SERVICE = ${StringUtils.removeAndHump($SERVICE_JS, "-")})
#set($SERVICE_NAME = $SERVICE + "Service")
"use strict";

describe("${SERVICE_NAME}", () => {
    let $SERVICE_NAME;

    beforeEach(() => {
        module("???");
        inject(_${SERVICE_NAME}_ => $SERVICE_NAME = _${SERVICE_NAME}_);
    });
});
#else
// Unit-Test-Dateinamen müssen auf .spec enden!
#end