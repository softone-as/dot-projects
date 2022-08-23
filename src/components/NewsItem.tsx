import { Link, useNavigate } from 'react-router-dom';

export interface ArticleProps {
    author: string;
    content: string;
    description: string;
    publishedAt: Date;
    source: SourceProps;
    title: string;
    url: string;
    urlToImage: string;
}

export interface SourceProps {
    id: string;
    name: string;
}
const NewsItem = (props: ArticleProps) => {
    const navigate = useNavigate();
    const {
        author,
        content,
        description,
        publishedAt,
        source,
        title,
        url,
        urlToImage,
    } = props;

    return (
        <Link
            className='flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
            to={`/news/${title}`}
            state={{ props }}
        >
            <img
                className='object-cover rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg'
                src={urlToImage}
                alt=''
            />
            <div className='flex flex-col justify-between p-4 leading-normal'>
                <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {title}
                </h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    {description}
                </p>
            </div>
        </Link>
    );
};

export default NewsItem;
