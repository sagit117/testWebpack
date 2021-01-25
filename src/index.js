import hello from './hello.js'
import './all.css'
import txt from './test.py'

hello()

function TXT() {
    console.log('/' + txt)
    fetch('/' + txt) 
        .then(res => res.text())
        .then(res => console.log(res))
}

TXT()