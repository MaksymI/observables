'use strict'
// ------------------------------------------------
function observe(observable, next, done) {
    for (let letter of observable) {
        next(letter);
    }
    done();
}

observe('Observable', letter => console.log(letter), () => console.log('done'));

// ----------------------------------------------------

class Observable {
    constructor(source) {
        this.source = source.split('');
        this.result = this.source;
    }

    subscribe(next) {
        for (let item of this.result) {
            next(item);
        }
    }

    filter(predicate) {
        this.result = this.result.filter(predicate);
        return this;
    }

    map(callback) {
        this.result = this.result.map(callback);
        return this;
    }
}

new Observable('Observable')
    .map(letter => letter.toUpperCase())
    .filter(letter => letter === 'O')
    .subscribe(letter => console.log(letter));

// -------------------------------------------------------

const Rx = require('rx');

Rx.Observable.from('Observable')
    .map(letter => letter.toUpperCase())
    .filter(letter => letter === 'O')
    .subscribe(letter => console.log(letter));