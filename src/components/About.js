import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// export const About = () => {
//     return (
//         <div>
//             <h1>ABOUT</h1>
//             <h2>This is Namaste React web series</h2>
//             <UserClass name="Surbhi Jyoti" location="Mumbai" />
//         </div>
//     )
// } 

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>ABOUT</h1>
                <h2>This is Namaste React web series</h2>
                <UserClass name="Surbhi Jyoti" location="Mumbai" />
            </div>
        )
    }
}

export default About;