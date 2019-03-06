#if($NAME.matches(".+[.]spec"))
#set($FILTER_JS = $NAME.replaceAll("[.]spec$", ""))
#set($FILTER = ${StringUtils.removeAndHump($FILTER_JS, "-")})
#set($FILTER_FUNC = $FILTER.substring(0, 1).toLowerCase() + $FILTER.substring(1))
#set($FILTER_NAME = $FILTER_FUNC + "Filter")
"use strict";

describe("${FILTER_NAME}", () => {
    let $FILTER_FUNC;

    beforeEach(() => {
        module("???");
        inject($FILTER_NAME => $FILTER_FUNC = $FILTER_NAME);
    });
});
#else
// Unit-Test-Dateinamen müssen auf .spec enden!
#end