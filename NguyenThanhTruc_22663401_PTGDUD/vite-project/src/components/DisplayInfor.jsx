import React, { useState, useEffect } from "react";

const DisplayInfor = (props) => {
    const { listUser, handleDeleteUser, handleClearUsers } = props;
    const [message, setMessage] = useState("");
  

    useEffect(() => {
        if (listUser.length === 0) {
            setMessage("Danh sách trống! Vui lòng thêm người dùng.");
            
        } 
        else if (listUser.length > 10) {
          setMessage("Danh sách đã đầy! Không thể them nữa.");
        }
        else {
            setMessage("");
        }

      //   if (triggerDeleteAll) {
      //     handleClearUsers(); // Xóa danh sách khi triggerDeleteAll = true
      //     setTriggerDeleteAll(false); // Reset lại trigger
      // }
    }, [listUser, ]); // triggerDeleteAll


    return (
      <div>
        <div className="mesage" >{message}</div>
        {listUser.map((user) => (
          <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
            <div>User name is: {user.Name}</div>
            <div>User Age: {user.Age}</div>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            {/* <button onClick={() => handleClearUsers(user.id)}>Delete all</button> */}
            <hr />
          </div>
        ))}
      </div>
    );

    
  };
export default DisplayInfor;

// import React from "react";

// const DisplayInfor = ({ listUser, handleDeleteUser }) => {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//       if (listUser.length === 0) {
//           setMessage("Danh sách trống! Vui lòng thêm người dùng.");
//       } else {
//           setMessage("");
//       }
//   }, [listUser]); // Chạy lại khi listUser thay đổi


//   return (
//       <div>
//           {listUser.map((user) => (
//               <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
//                   <div>User name is: {user.Name}</div>
//                   <div>User Age: {user.Age}</div>
//                   <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
//                   <hr />
//               </div>
//           ))}
//       </div>
//   );
// };

// export default DisplayInfor;


// class DisplayInfor extends React.Component {
//     render() {
//         const {listUser} = this.props;

//         console.log(listUser);

//         return (
//             <div>
//               {listUser.map((user) => {
//                 return (
//                 <div key={user.id} className={user.Age < 18 ? "red": "blue"}>
//                 <div>User name is: {user.Name}</div>
//                 <div>User Age: {user.Age}</div>
//                 {/* <button onClick={() => handleDeleteUser(user.id)}>Delete</button> */}
//                 <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                 <hr />
//              </div>
//              )
//              })}
//            </div>
//          )         
//     }
// }

// export default DisplayInfor;

