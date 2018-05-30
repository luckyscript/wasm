function instantiate(bytes, imports) {
	return WebAssembly.compile(bytes).then(m => new WebAssembly.instantiate(m, imports));
}

var imoprtObject = { imports: {i: arg => console.log(arg)}};

fetch('./hello.wasm').then(res => res.arrayBuffer()).then(bytes => instantiate(bytes, imoprtObject));