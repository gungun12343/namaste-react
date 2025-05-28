export const Contact = () => {
    return (
        <div className="flex justify-center items-center flex-col p-4">
            <h1 className="font-bold text-3xl p-4 m-4">CONTACT US!</h1>

            <form className="border border-solid border-black flex flex-col p-4 gap-5 w-80">
                <p className="text-xl font-semibold">Send Message</p>
                {/* <h2>HELLO</h2> */}
                <input type="text" placeholder="Full Name" className="outline-none border-b-2 border-gray-700 pb-1" />
                <input type="text" placeholder="Email" className="outline-none border-b-2 border-gray-700 pb-1" />
                <input type="text" placeholder="Type your message..." className="outline-none border-b-2 border-gray-700 pb-1" />
                <button className="bg-blue-200 py-1">Send</button>
            </form>
        </div>
    )
}