"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3 ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return isNaN(myDate.valueOf()) ? false : true;
    };
    console.log(Validations.validateText("Alexander"));
})(Validations || (Validations = {}));
//# sourceMappingURL=main.js.map