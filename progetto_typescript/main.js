var mike = {
    age: 25,
    name: 'Mike',
    say: function () {
        return 'My name is' + this.name + 'my age is' + this.age;
    }
};
function sayIt(person) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.say());
}
var sayIt2 = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    console.log(age);
};
var getArray = function () {
    return [1, 2, 3, 4, 5];
};
var arr = getArray();
arr === null || arr === void 0 ? void 0 : arr.map(function (x) { return x * 2; });
sayIt(mike);
sayIt2(mike);
