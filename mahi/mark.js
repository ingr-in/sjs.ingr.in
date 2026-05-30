fetch("app.xsjsf")
.then(r=>r.text())
.then(code=>{
    eval(compile(code));
});
