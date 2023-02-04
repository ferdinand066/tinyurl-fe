import Layout from '@/components/layouts/_layout'
import Section404 from '@/components/pages/404/_404-section'
import { TinyUrlShowHandlers } from '@/handlers/pages/tiny-url/show'
import { TinyUrl } from '@/handlers/types/tiny-url'
import { useQuery } from '@tanstack/react-query'
import Head from 'next/head'
import { useRouter } from 'next/router'

const getOneTinyUrlQuery = (id: string | number | undefined) => ({
  queryKey: ['tny', id],
  queryFn: async () => {
    try {
      return await TinyUrlShowHandlers.handleGetOneTinyUrl(id as string);
    } catch (e) { }
  },
  enabled: id !== undefined
});

export default function ShowTinyUrl() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useQuery(getOneTinyUrlQuery(id as (string | undefined)));

  if (!data && !isLoading)
    return <Layout>
      <main>
        <Section404 />
      </main>
    </Layout>

  if (data && !isLoading) return <Head>
    <meta http-equiv="refresh" content={`0; url = ${(data as TinyUrl).url}`} />
  </Head>
}
