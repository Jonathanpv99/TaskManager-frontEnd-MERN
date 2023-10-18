
const HomePage = () => {
    return (
        <>
            <div className="bg-teal-600 flex justify-around gap-4 items-center">
                <div className=" text-center mx-4">
                    <h2 className=" text-2xl font-bold mb-3 "> Welcom to TaskManager </h2>
                    <h1 className="text-4xl font-bold mb-3"> Your Ultimate Task Management Solution </h1>
                    <h3>Stay organized, boost productivity, and take control of your tasks with TaskManager. 
                        Whether you´re a professional looking to streamline your work or simply want to manage your daily
                        to-do lists, we´ve got you covered. Start managing your tasks efficiently and make every day more productive.
                        </h3>
                </div>
                <div className=" w-full h-96 clasroom-bg">
                </div>
            </div>
            <div className="bg-teal-600 flex justify-around gap-4 items-center mt-8">
                <div className="homework-bg  w-full h-96"></div>
                <div className="mx-40">
                    <p className="text-xl mb-3">The fastest and most effective way to organize your schoolwork so you get good grades.</p>
                    <p className="text-xl mb-3">In your job never forget your pending work again.</p>
                    <p className="text-xl mb-3">In your job never forget your pending work again.</p>
                </div>

            </div>
        </>
    )
}

export default HomePage;