import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const {listUser} = this.props;

        console.log(listUser);

        return (
            <div>
              {listUser.map((user) => {
                return (
                <div key={user.id} className={user.Age < 18 ? "red": "blue"}>
                <div>User name is: {user.Name}</div>
                <div>User Age: {user.Age}</div>
                {/* <button onClick={() => handleDeleteUser(user.id)}>Delete</button> */}
                <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                <hr />
             </div>
             )
             })}
           </div>
         )         
    }
}

export default DisplayInfor;

