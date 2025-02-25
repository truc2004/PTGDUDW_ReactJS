// import React from "react";

import React, { useState } from "react";

const AddUserInfor = (props) => {
    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');

    const handleOnChangeInput = (event) => {
        setName(event.target.value);
    };

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        
        props.handleAddnewUser({
            id: Math.floor(Math.random() * 100 + 1) + "user",
            Name: Name,
            Age: Age
        });

        setName(""),
        setAge("")
    };

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label>Your name:</label>
                <input type="text" value={Name} onChange={handleOnChangeInput} />
                <br />
                <label>Your Age:</label>
                <input type="text" value={Age} onChange={handleOnChangeAge} />
                <br />
                <button type="submit">Submit</button>
                <button type="submit">Delete all</button>
            </form>
        </div>
    );
};

export default AddUserInfor;


// const AddUserInfor = (props) => {
//     //chuyển sang hook
//     const [Name, setName] = useState('');
//     const [Age, setAge] = useState('');
//     const [Address, setAddress] = useState('IUH');

//     const handleOnchangeInput = (event) => {
//           setName(event.target.value)
//     }
//     const handleOnchangeAge = (event) => {
//           setAge(event.target.value)
//     }
//     const handleOnSubmit = (event) => {
//         event.preventDefault();//ngăn việc tải lại trang
//         props.handleAddnewUser({
//             id: Math.floor((Math.random() * 100) + 1) + "user",
//             Name: Name,
//             Age: Age
//         })
//     }

//     <form action="" onSubmit={(event) => handleOnSubmit(event)}>
//                 <label htmlFor="">Your name:</label>
//                 <input type="text" value={Name}
//                  onChange={(event) => handleOnchangeInput(event)} />
//                 <br />
//                 <label htmlFor="">Your Age:</label>
//                 <input type="text"
//                     onChange={(event) => handleOnchangeAge(event)}
//                     value={Age} />
//                 <button>Submit</button>
//     </form>

//     return (
//         <div>
//             <form onSubmit={this.handleOnSubmit}>
//                 <label>Name:</label>
//                 <input
//                     type="text"
//                     name="Name"
//                     value={this.state.Name}
//                     onChange={(event) => this.setState({ Name: event.target.value })}
//                 />
//                 <br />
//                 <label>Age:</label>
//                 <input
//                     type="number"
//                     name="Age"
//                     value={this.state.Age}
//                     onChange={(event) => this.setState({ Age: event.target.value })}
//                 />
//                 <br />
//                 <button type="submit">Submit</button>
//                 <br />
//                 <br />
//             </form>
//         </div>
//     );

// }





// class AddUserInfor extends React.Component {
//     state = {
//         Name: "",
//         Age: ""
//     };

//     handleOnSubmit = (event) => {
//         event.preventDefault(); // Ngăn việc tải lại trang
//         this.props.handleAddnewUser({
//             id: Math.floor(Math.random() * 100) + 1 + "user",
//             Name: this.state.Name,
//             Age: this.state.Age
//         });

//         this.setState({ Name: "", Age: "" }); // Reset form sau khi submit
//     };

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleOnSubmit}>
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         name="Name"
//                         value={this.state.Name}
//                         onChange={(event) => this.setState({ Name: event.target.value })}
//                     />
//                     <br />
//                     <label>Age:</label>
//                     <input
//                         type="number"
//                         name="Age"
//                         value={this.state.Age}
//                         onChange={(event) => this.setState({ Age: event.target.value })}
//                     />
//                     <br />
//                     <button type="submit">Submit</button>
//                     <br />
//                     <br />
//                 </form>
//             </div>
//         );
//     }
// }

// export default AddUserInfor;
