import { useNavigate } from 'react-router-dom';
import Button from '../components/utils/Button';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#12406e] py-6 sm:py-12'>
            <div className='mx-auto max-w-4xl rounded-3xl bg-[#092540] p-20 text-center'>
                <h2 className='text-5xl font-bold leading-tight text-white'>
                    Hey there, down here 👋 Want to know something cool?
                </h2>
                <p className='mt-5 text-xl leading-8 text-gray-50'>
                    Get the newest information in Indonesia. Updated. Accurate.
                    Trusted.
                </p>
                <div className='mt-6 flex items-center justify-center gap-4'>
                    <Button
                        variety='primary'
                        text='Get Started'
                        onClick={() => navigate('/news')}
                    />
                    <Button variety='secondary' text='About Us' />
                </div>
            </div>
        </div>
    );
}
