import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                // name: "Dummy",
                // location: "Mumbai"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        })
    }

    render() {
        //const {name, location, login, avatar_url} = this.state.userInfo;
        const {name, location} = this.props;
        
        return (
            <div className="user-card">
                {/* <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location} </h3>
                <h3>Contact: @{login}</h3> */}
                <h2 className="text-2xl font-extrabold">Name: {name}</h2>
                <h3 className="text-xl font-bold">Location: {location}</h3>
            </div>
        )
    }
}

export default UserClass;