"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this.nom;
        },
        set: function (nom) {
            this.nom = nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this.prix;
        },
        set: function (nom) {
            this.prix = this.prix;
        },
        enumerable: false,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [];
        this._sejours.push(new Sejour("Ibiza", 500));
        this._sejours.push(new Sejour("Mexico", 1000));
        this._sejours.push(new Sejour("SriLanka", 2000));
        this._sejours.push(new Sejour("Corse", 400));
    }
    SejourService.prototype.SejourFindByNom = function (nom) {
        this._sejours.forEach(function (element) {
            if (element.nom == nom) {
                return element;
            }
        });
    };
    return SejourService;
}());
var sejourService = new SejourService();
var SejourFind = sejourService.SejourFindByNom('Ibiza');
console.log(SejourFind);
