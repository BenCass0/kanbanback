const controller = {
    list:(req:any,res:any)=>{
    req.getConnection((err:any,conn:any)=>{
        conn.query('SELECT * FROM CUSTOMER', (err:any,customers:any)=>{
            if(err){
                res.json(err);
            }
            
            res.render('customers',{
                data:customers
            })
        })
    });
},
    save:(req:any,res:any)=>{
        const data=req.body;
        req.getConnection((err:any,conn:any)=>{
            conn.query('INSERT INTO customer set ?',[data],(err:any,customer:any)=>{
                res.redirect('/');
            })
        })
    },

    delete:(req:any,res:any)=>{
        const {id}=req.params;
        req.getConnection((err:any,conn:any)=>{
            conn.query('DELETE FROM customer WHERE id = ?',[id],(err:any,rows:any)=>{
                res.redirect('/');
            })
        })
    },
    edit:(req:any,res:any)=>{
        const{id}=req.params;
        req.getConnection((err:any,conn:any)=>{
            conn.query('SELECT * FROM customer WHERE id=?',[id],(err:any,customer:any)=>{
                res.render('editcustomer',{
                    data:customer[0]
                })
            })
        })
    },
    update:(req:any,res:any)=>{
        const {id}=req.params;
        const newCustomer=req.body;
        req.getConnection((err:any,conn:any)=>{
            conn.query('UPDATE customer set ? WHERE id = ?',[newCustomer,id],(err:any,rows:any)=>{
                res.redirect('/');
            });
        })
    }
    
};


module.exports=controller;
