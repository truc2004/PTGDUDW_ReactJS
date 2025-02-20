import React from "react";

class AddUserInfor extends React.Component {
    state = {
        Name: "",
        Age: ""
    };

    handleOnSubmit = (event) => {
        event.preventDefault(); // Ngăn việc tải lại trang
        this.props.handleAddnewUser({
            id: Math.floor(Math.random() * 100) + 1 + "user",
            Name: this.state.Name,
            Age: this.state.Age
        });

        this.setState({ Name: "", Age: "" }); // Reset form sau khi submit
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="Name"
                        value={this.state.Name}
                        onChange={(event) => this.setState({ Name: event.target.value })}
                    />
                    <br />
                    <label>Age:</label>
                    <input
                        type="number"
                        name="Age"
                        value={this.state.Age}
                        onChange={(event) => this.setState({ Age: event.target.value })}
                    />
                    <br />
                    <button type="submit">Submit</button>
                    <br />
                    <br />
                </form>
            </div>
        );
    }
}

export default AddUserInfor;
