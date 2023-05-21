import videoBg from '../assets/bg_image_1.mp4'

const Home = () => {
    return (
        <div className='flex flex-col justify-center h-full items-center w-full '>
            <div className='w-11/12 max-[600px]:h-[250px] xl:w-8/12 bg-white h-[500px] rounded-t-md relative flex justify-center items-center shadow-2xl'>
                <div className='absolute top-0 flex items-center justify-center h-full w-full'>
                    <p className='text-green-500 text-[50px] '>Camping-uz</p>
                </div>
                <video className="h-full object-cover w-full rounded-t-md" src={videoBg} autoPlay muted loop></video>
            </div>
            <div className='w-11/12 xl:w-8/12 text-white bg-green-500 h-[80px] rounded-b-md flex justify-around items-center shadow-2xl'>
                <p>To'g'ri tanlov</p>
                <p>To'g'ri vaqtda</p>
            </div>
        </div>
    )
}

export default Home