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
            <div className="text-center">
                <h1 className="text-lg my-4 font-bold">ABOUT US!</h1>
                {/* <h2>This is Namaste React web series</h2> */}
                <UserClass name="Gungun Koshta" location="Jabalpur" />
            </div>
        )
    }
}

export default About;