
// import React from "react";
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
import ChildComponent from "./Childcomponent";

const MyComponent = () => {
    const [listUser, setListUser] = useState([
        { id: 1, Name: "Dung", Age: 49 },
        { id: 2, Name: "Hoang", Age: 17 },
        { id: 3, Name: "Chien", Age: 32 },
    ]);

    const handleAddNewUser = (userObject) => {
        setListUser([userObject, ...listUser]);
    };

    const handleDeleteUser = (userID) => {
        setListUser(listUser.filter(user => user.id !== userID));
    };

    const handleClearUsers = () => {
        setListUser([]); // Đặt danh sách về rỗng
    };

    return (
        <div className="user-container">
            <AddUserInfor handleAddnewUser={handleAddNewUser}  listUser={listUser}/>
            <hr />
            <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} handleClearUsers={handleClearUsers}/>
        </div>
    );
};

export default MyComponent;


// const Mycomponent = (props) => {
//     const [listUser, setlistUser] = useState(
//         [
//             { id: 1, Name: "Dung", Age: 49 },
//             { id: 2, Name: "Hoang", Age: 17 },
//             { id: 3, Name: "Chien", Age: 32 },
//         ]
//     )

//    const handleAddnewUser = (userObject) => {
//         setlistUser([userObject, ...listUser])
//    }

//     const handleDeleteUser = (userID) => {
//         let listUserClone = listUser;
//         listUserClone = listUserClone.filter(item => item.id!== userID)
//         setlistUser(listUserClone);
//     }

//     return (
//         <div className="user-container"> 
//             {/* <ChildComponent></ChildComponent> */}
//             {/* <AddUserInfor handleAddnewUser={this.handleAddnewUser} /> */}
//             <AddUserInfor handleAddnewUser={handleAddnewUser} />
//             <hr />
//             {/* <DisplayInfor listUser={this.state.listUser} /> */}
//             {/* <DisplayInfor listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser} ></DisplayInfor> */}
//             <DisplayInfor listUser={state.listUser} handleDeleteUser={handleDeleteUser} ></DisplayInfor>
            
//         </div>
//     );
    
   
//  }






// class Mycomponent extends React.Component {
//     // sum = (a, b) => {
//     //     return a + b;
//     // }

//     // render() {
//     //    return (
//     //       <div>
//     //         {/* <Childcomponent myProp={parent} sum={this.sum}></Childcomponent> */}
//     //         <Childcomponent></Childcomponent>

//     //        </div>
//     //     );
//     // }


//     state = {
//         listUser: [
//             { id: 1, Name: "Dung", Age: 49 },
//             { id: 2, Name: "Hoang", Age: 17 },
//             { id: 3, Name: "Chien", Age: 32 },
//         ],
//     };

//     handleAddnewUser = (userObject) => {
//         this.setState({
//             listUser: [userObject, ...this.state.listUser]
//         });
//     };

//     handleDeleteUser = (userID) => {
//         let listUserClone = this.state.listUser;
//         // let listUserClone=[...this.state.listUser]//có thể viết theo cách này
//         listUserClone = listUserClone.filter(item => item.id !== userID)
//          this.setState({
//             listUser: listUserClone
//         })
//     }


//     render() {
//         return (
//             <div className="user-container"> 
//                 {/* <ChildComponent></ChildComponent> */}
//                 <AddUserInfor handleAddnewUser={this.handleAddnewUser} />
//                 <hr />
//                 {/* <DisplayInfor listUser={this.state.listUser} /> */}
//                 <DisplayInfor listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser} ></DisplayInfor>

                
//             </div>
//         );
//     }
// }

// export default Mycomponent;
