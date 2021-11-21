import React from "react";
import axios from "axios";
const ListOfUsers = () => {
    const [users, setUsers] = React.useState([]);
   
    React.useEffect(() => {
        
        axios.get('https://bank-api1.herokuapp.com/api/bank').then((res) => {
            console.log(res);
            if(res.status===200)
            {
            setUsers(res.data.data);
            }
        })
    }, [])

return(
    <div>
       <h1>Users List</h1>
           {
                users.map((u) => {
                return <div key={u.id}>Name : {u.name} <br/> Country : {u.country} <br/> passportId:{u.passportId}<br/>Username : {u.username} <br/> Cash : {u.cash}<br/> Credit : {u.credit}<br/><br/></div>
                })
            }
    </div>
    )

    }

    
export default ListOfUsers; 