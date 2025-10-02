import Hero from '../../components/Hero/Hero';
import wave from '../../assets/wave.svg'

const Home = () => {
    return (
        <div className='relative min-h-[calc(100vh-116px)] flex justify-center items-center flex-col'>
            <Hero></Hero>

            <img className='absolute left-0 bottom-0 w-full' src={wave} alt="" />
        </div>
    );
};

export default Home;