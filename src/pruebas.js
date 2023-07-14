

function foo() {
    console.log('foo') // => salio con fritas 
    setTimeout(() => {
        faa()
    },0); // => mandar al segundo plano 
    fii() // => sale con fritas
}

function faa() {
    console.log('faa')
}

function fii() {
    console.log('fii')
}


foo()

// foo
// fii 
// faa 