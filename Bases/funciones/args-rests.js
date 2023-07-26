"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const test = fullName("Clark", "ajskdas", "kent");
    console.log(test);
})();
