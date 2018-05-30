// Memory
const memory = new WebAssembly.Memory({initial: 256, maximum: 256});

const importObj = {
    global: {},
    env: {
        abortStackOverflow: () => { throw new Error('overflow')},
        memory: memory,
        table: new WebAssembly.Table({initial: 0, maximum: 0, element: 'anyfunc'}),
        tableBase: 0,
        memoryBase: 0,
        STACKTOP: 0,
        STACK_MAX: memory.buffer.byteLength
    }
}

let CModule;

// Fetch
fetch('./factorial.wasm').then(response => 
    response.arrayBuffer()
).then(bytes =>   {
    console.log(bytes)
    return WebAssembly.instantiate(bytes, importObj)
}
).then(result => {
    console.log(result.instance.exports)
    alert(result.instance.exports._fib(4));
})


