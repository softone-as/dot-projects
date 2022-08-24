import NewsItem, { ArticleProps } from '../components/NewsItem';
import Loading from '../components/shared/Loading';
import { TApiResponse, useApiGet } from '../hooks/useApiGet';

export default function News() {
    const response: TApiResponse = useApiGet(
        'https://newsapi.org/v2/top-headlines?country=id&apiKey=fe1b3029a7f747348deccd26a33f877f'
    );
    const { data, loading } = response;

    if (loading) return <Loading />;

    return (
        <div className='flex flex-wrap justify-center items-center bg-[#12406e] mx-auto'>
            <h3 className='text-3xl font-bold leading-tight text-white text-center py-5'>
                Top headlines
            </h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 justify-center gap-4 m-auto pb-5'>
                {data
                    ? data.map((item: ArticleProps) => (
                          <NewsItem key={item.title} {...item} />
                      ))
                    : null}
            </div>
        </div>
    );
}
