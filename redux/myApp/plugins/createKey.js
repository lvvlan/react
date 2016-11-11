function randomString(n){
    var str = Math.random().toString(36).substring(2, 2+n);

    if(str.length < n){
        str+=randomString(n -str.length)
    }

    return str;
}

export default randomString;