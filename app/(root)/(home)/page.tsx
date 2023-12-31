import Filters from '@/components/Filters';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ResourceCard from '@/components/ResourceCard';
import SearchForm from '@/components/SearchForm';
import { getResources } from '@/sanity/actions';

export const revalidate = 100;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1',
  });

  // console.log(resources);

  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full rounded-xl'>
          <HeroSection title='Discover Your Home, Away from Home' />
        </div>
        <SearchForm />
      </section>
      <Filters />
      <section className='flex-center mt-6 w-full flex-col sm:mt-20'>
        <Header
          query={searchParams?.query || ''}
          category={searchParams?.category || ''}
        />

        <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
          {resources?.length > 0
            ? resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  title={resource.title}
                  description={resource.description}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                />
              ))
            : (searchParams?.query || searchParams?.category) && (
                <p className='body-regular text-white-400'>
                  No Data Found
                </p>
              )}
        </div>
      </section>
    </main>
  );
};

export default Page;
