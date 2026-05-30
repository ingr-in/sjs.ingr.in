function compile(code){
    return code
    .replace(/print\s+"([^"]+)"/g,
        'console.log("$1");')
    .replace(/div\s+"([^"]+)"/g,
        'document.body.innerHTML+="<div>$1</div>";');
}
