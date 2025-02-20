
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
import ChildComponent from "./Childcomponent";


class Mycomponent extends React.Component {
    // sum = (a, b) => {
    //     return a + b;
    // }

    // render() {
    //    return (
    //       <div>
    //         {/* <Childcomponent myProp={parent} sum={this.sum}></Childcomponent> */}
    //         <Childcomponent></Childcomponent>

    //        </div>
    //     );
    // }


    state = {
        listUser: [
            { id: 1, Name: "Dung", Age: 49 },
            { id: 2, Name: "Hoang", Age: 17 },
            { id: 3, Name: "Chien", Age: 32 },
        ],
    };

    handleAddnewUser = (userObject) => {
        this.setState({
            listUser: [userObject, ...this.state.listUser]
        });
    };

    handleDeleteUser = (userID) => {
        let listUserClone = this.state.listUser;
        // let listUserClone=[...this.state.listUser]//có thể viết theo cách này
        listUserClone = listUserClone.filter(item => item.id !== userID)
         this.setState({
            listUser: listUserClone
        })
    }


    render() {
        return (
            <div className="user-container"> 
                {/* <ChildComponent></ChildComponent> */}
                <AddUserInfor handleAddnewUser={this.handleAddnewUser} />
                <hr />
                {/* <DisplayInfor listUser={this.state.listUser} /> */}
                <DisplayInfor listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser} ></DisplayInfor>

                
            </div>
        );
    }
}

export default Mycomponent;
