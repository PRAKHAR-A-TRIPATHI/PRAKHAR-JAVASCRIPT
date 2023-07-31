
let q = {
   a: [
     {
        b:[
            {
                c:[
                    {
                        d:[
                            {
                                e:20,
                                f:{
                                    g:[0,2,{
                                        h:{
                                           i: 90
                                        }
                                    }]
                                }
                            }
                        ]
                    }
                ]
            }
        ]
     }
    ]
}

console.log(q.a[0].b[0].c[0].d[0].e);
console.log(q.a[0].b[0].c[0].d[0].f.g[2].h.i);
console.log("3"+"3"-3+ +'4');
