import { useLocation } from 'react-router-dom';
import { ArticleProps } from '../components/NewsItem';
import { showFormattedDate } from '../helper';

interface CustomProps {
    props: ArticleProps;
}

export default function NewsDetail() {
    const location = useLocation();
    const state = location.state as CustomProps;

    return (
        <div className='flex flex-col flex-wrap w-2/4 mx-auto my-10'>
            <div className='row-span-2 col-span-3 m-5'>
                <h2 className='text-3xl font-bold leading-tight'>
                    {state.props.title}
                </h2>
                <p className='text-slate-400 mt-3 mb-5'>
                    {state.props.author ?? 'unknown'} |{' '}
                    {showFormattedDate(state.props.publishedAt)} |{' '}
                    {state.props.source.name}
                </p>
                <img
                    src={state.props.urlToImage}
                    alt=''
                    className='object-cover rounded w-full h-64 my-3'
                />
            </div>
            <p className='row-span-2 col-span-3 m-5'>{state.props.content}</p>
            <a
                href={state.props.url}
                className='col-span-3 m-5 text-violet-400 hover:text-violet-600 active:text-violet-700 mt-3'
                target='_blank'
                rel='noopener noreferrer'
            >
                Lihat Selengkapnya
            </a>
        </div>
    );
}
