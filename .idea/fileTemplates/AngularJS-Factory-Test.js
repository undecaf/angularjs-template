#if($NAME.matches(".+[.]spec"))
#set($FACTORY_JS = $NAME.replaceAll("[.]spec$", ""))
#set($FACTORY = ${StringUtils.removeAndHump($FACTORY_JS, "-")})
#set($FACTORY_UNIT = $FACTORY + "Factory")
"use strict";

describe("${FACTORY_UNIT}", () => {
    let $FACTORY;

    beforeEach(() => {
        module("???");
        inject(_${FACTORY}_ => $FACTORY = _${FACTORY}_);
	});
});
#else
// Unit-Test-Dateinamen müssen auf .spec enden!
#end