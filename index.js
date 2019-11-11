//'typeOf null' returns 'object', so how do we check for null?

function assert(expectation, test){
    let testing = test;
    if (typeof testing !== 'function') throw new Error 
    ("'test' must be a function!")

    if(test() === expectation){
        console.log("Pass");
    }
    else{
        console.log("Fail");
    }
}

function isNull(subject){
    if(!subject){
        if(subject === null){
            return true;
        }
    }
    return false;
}

//assert(Nan);
//assert(false, () => false);
assert(false, () => false);
assert(true, () => true);
// assert(typeOf null === 'object');
assert(true, () => typeof null === 'object');
assert(true, () => isNull(null));
assert(false, () => isNull());
assert(false, () => isNull(NaN));