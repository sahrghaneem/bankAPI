import React from "react";
import axios from "axios";
const ListOfUsers = () => {
    const [users, setUsers] = React.useState([]);
   
    React.useEffect(() => {
        
        getData()
    }, [])

    const getData = ()=>{
        axios.get('https://bank-api1.herokuapp.com/api/bank/all')
        .then(res=>{
          console.log(res);
     //     setGetUsersData(res.data)
        })
      }
return(
    <div>
       <h1>Users List</h1>
           {
               users.length >0?
                users.map((u) => {
                return <div key={u.id}>Name : {u.name} <br/> Country : {u.country} <br/> passportId:{u.passportId}<br/>Username : {u.username} <br/> Cash : {u.cash}<br/> Credit : {u.credit}<br/><br/></div>
                })
                :"loading..."
            }
    </div>
    )

    }

    
export default ListOfUsers; 