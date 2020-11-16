class Foo{
	*[Symbol.interator](){
		yield 1;
		yield 2;
	}
}

class Another{
	*[Symbol.interator](){
		yield 'a';
		yield 'b';
	}
}
console.log(Array.from(new Foo))

console.log(Array.from(Another))