import React from "react";
import axios from "axios";

const TransferMoney = () => {
    
    const [user,setUser] = React.useState({
      
        from:'',
        to:'',
        cash:''
    })

    const Transfer = () =>{
        axios.put(`https://bank-api1.herokuapp.com/api/bank/transferMoney/${user.from}/${user.to}`, user)
                .then((res) => {
                    console.log(res);
                    alert("TRNSFER  successfully")
                }).catch((err)=>{
                    alert("failed to TRANSFER")
                })
    }

    const TransferHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log("state :", user)
    }

    return(

        <div>
            {console.log(user)}
            From : <input className="inpt" value={user.from} onChange={TransferHandler} type="number" name={'from'}  /><br/>
            To : <input className="inpt" value={user.to} onChange={TransferHandler} type="number" name={'to'}  /><br/>

           
            Transfer Money : <input className="inpt" value={user.cash} type="number" onChange={TransferHandler} name={'cash'} /> 
            <input className="btn"  type={'button'} value={'Transfer Money'} onClick={Transfer}/>


        </div>
    )
}

export default TransferMoney;
