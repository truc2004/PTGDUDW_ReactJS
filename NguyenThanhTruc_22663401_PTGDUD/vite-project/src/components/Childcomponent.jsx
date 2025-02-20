import React from "react";

class Childcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: 'abc',  // giá trị mặc định
        };

        this.valueInput = ""; //  Biến tạm để lưu dữ liệu nhập vào
    }

    handleInput = (event) => {
        //console.log(event.target.value);
        this.setState({//hiển thị đúng giá trị được nhập vào
            valueInput: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();//ngăn việc tải lại trang
        console.log(this.state)

        this.setState({
            valueInput: this.inputValue // Chỉ cập nhật state khi nhấn Submit
        })
    }

    handleOnchangeInput = (event) => {
        this.setState({
            valueInput: event.target.value
        })
    }


    render() {
        return (
            <div>
                {/* <input value={this.state.valueInput} onChange={(event) => this.handleInput(event)} type="text" /> */}
                <div>
            	    <span>Giá trị hiện tại: {this.state.valueInput}</span>
         	    </div>

                <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" value={this.state.valueInput} onChange={(event) => this.handleOnchangeInput(event)} />
                    <button>Submit</button>
                </form>

            </div>

            


        );
    }
}

export default Childcomponent;

