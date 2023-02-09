import Layout from '@/components/layouts/_layout'
import Section404 from '@/components/pages/404/_404-section'
import { RenameUrlShowHandlers } from '@/handlers/pages/rename-url/show'
import { RenameUrl } from '@/handlers/types/rename-url'
import { useQuery } from '@tanstack/react-query'
import Head from 'next/head'
import { useRouter } from 'next/router'

const getOneRenameUrlQuery = (id: string | number | undefined) => ({
  queryKey: ['rnm', id],
  queryFn: async () => {
    try {
      return await RenameUrlShowHandlers.handleGetOneRenameUrl(id as string);
    } catch (e) { }
  },
  enabled: id !== undefined
});

export default function ShowRenameUrl() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useQuery(getOneRenameUrlQuery(id as (string | undefined)));

  if (!data && !isLoading)
    return <Layout>
      <main>
        <Section404 />
      </main>
    </Layout>

  if (data && !isLoading) return <Head>
    <meta http-equiv="refresh" content={`0; url = ${(data as RenameUrl).url}`} />
  </Head>
}
