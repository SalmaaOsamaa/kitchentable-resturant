
const Modal = ({ setModalOn, setClose, date }) => {

    const handleOKClick = () => {
        setClose(true)
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setClose(false)
        setModalOn(false)
    }

    return (

        <div className="   bg-zinc-200 opacity-90 fixed inset-0 z-50   ">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col justify-center bg-white  py-12 px-24 border-4 border-zinc-500 rounded-xl ">

                    <div className="flex  text-lg font-bold text-zinc-600  mb-10" >Succesfully reserved</div>
                    <div className="flex justify-center items-center">
                        <button onClick={handleOKClick} className=" rounded px-4 py-2 text-white  bg-zinc-800 ">Close</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Modal

