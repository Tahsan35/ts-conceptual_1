type myArray<T> =Array<T>
const myNumbers:myArray<number> = [1, 2, 3, 4, 5];
const myStrings:myArray<string>= ['a', 'b', 'c', 'd', 'e', 'f'];
const myBooleans:myArray<boolean> = [true, false, true, false, true];
// jinita dynamic hoye gelo and bar bar lekhar proyojon porlo na

//const myNumbers:Array<number> = [1, 2, 3, 4, 5];
//const myStrings:Array<string>= ['a', 'b', 'c', 'd', 'e', 'f'];
//const myBooleans:Array<boolean> = [true, false, true, false, true];


type dataType = {name: string, age: number};
const ourInfo:myArray<dataType> = [
    {name: 'Jonathan',age: 25},
    {name: 'hara',age: 27},
    {name: 'than',age: 21},

]

//tuple in generic type
type myGenType<x,y> = [x,y];

const A:myGenType<string,number> =['helo', 20];
const B:myGenType<number,number> =[10, 20];
const c:myGenType<number,string> =[10,'kodu'];
