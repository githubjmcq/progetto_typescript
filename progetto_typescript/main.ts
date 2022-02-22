interface IPerson {
    age: number,
    name: string;
    say(): string;
}

let mike = {
    age: 25,
    name: 'Mike',
    say: function() {
        return 'My name is' + this.name + 'my age is' + this.age;
    }

}
function sayIt(person: IPerson) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.say());

}

type PersonType = {
    age: number;
    name: string;
    say: () => string;
    say2?: () => string;
}

const sayIt2 = ({name, age}:IPerson) => {
    console.log(name);
    console.log(age);
}

const getArray = (): number[]|null => {
    return [1,2,3,4,5];
};

const arr = getArray();

arr?.map(x => x * 2);

sayIt(mike);
sayIt2(mike);