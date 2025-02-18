import React from "react";
import Childcomponent from "./Childcomponent"

// class Mycomponent extends React.Component {
//     render() {
//         return (	
			
//             <div>My first component</div>//chỉ trả về 1 phần tử
		
//         );
//     }
// }
//     // state = {
//     //     Name: 'Eric',
//     //     Age: 28,
//     //     Address: 'HCM'
//     // }
//     // render() {
//     //     return (
//     //         <div>
//     //             My name is: {this.state.Name}
//     //             <br />
//     //             Address: {this.state.Address}
//     //         </div>
//     //     );
//     // }

//     // render() {
//     //     let parent = "this is my parent";
//     //     return (
//     //         <div>
//     //             <Childcomponent myProp={parent}></Childcomponent>
//     //         </div>
//     //     );
//     // }

//     sum = (a, b) => {
//         return a + b;
//     }
//     render() {
//        return (
//           <div>
//             <Childcomponent myProp={parent} sum={this.sum}>

//             </Childcomponent>

//            </div>
//         );
//     }

// }
// export default Mycomponent;

class Mycomponent extends React.Component {
    sum = (a, b) => {
        return a + b;
    }
    render() {
       return (
          <div>
            <Childcomponent myProp={parent} sum={this.sum}>

            </Childcomponent>

           </div>
        );
    }
}
export default Mycomponent;
