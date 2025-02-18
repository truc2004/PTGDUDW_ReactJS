import React from "react";
// class Childcomponent extends React.Component {
//     render() {
//         return (
//             <>
//                 <h1>
//                     I just get from parent value:{this.props.myProp}
//                 </h1>
//             </>
//         );
//     };
// }

//     render() {
//         return (
//             <>
//                 <h1>
//                    call function Sum:6+7={this.props.sum(6, 7)}
			   
//                 </h1>
//             </>
//         );
//     };

   
// }
// export default Childcomponent;

class Childcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: 'abc',  // giá trị mặc định
        };
    }

    handleInput = (event) => {
        //console.log(event.target.value);
        this.setState({//hiển thị đúng giá trị được nhập vào
            valueInput: event.target.value
        })
    }


    render() {
        return (
            <div>
            
                 <input value={this.state.valueInput} onChange={(event) => this.handleInput(event)}
                 type="text" />
                <div>
            	    <span>Giá trị hiện tại: {this.state.valueInput}</span>
         	    </div>

            </div>
            
        );
    }
}

export default Childcomponent;