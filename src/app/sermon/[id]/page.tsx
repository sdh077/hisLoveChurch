import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { supabase } from '@/lib/api'
import VideoPlayer, { Sermon } from '@/components/VideoPlayer';
import { PostgrestSingleResponse } from '@supabase/supabase-js';

export const metadata: Metadata = {
    title: 'Blog',
    description:
        'Stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.',
}
const getData = async (id: string): Promise<PostgrestSingleResponse<Sermon[]>> => {
    return await supabase.from('archive').select().eq('id', id)
}

export default async function SermonDetail({ params: { id } }: { params: { id: string } }) {
    const { data, error } = await getData(id)

    if (!data?.length) return <></>
    return (
        <>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <div className="space-y-24 lg:space-y-32">
                    <VideoPlayer data={data[0]} />
                </div>
            </Container>
            <PageIntro title={data[0].title} ppt={data[0].ppt} paper={data[0].paper}>
                <p>
                    Stay up-to-date with the latest industry news as our marketing teams
                    finds new ways to re-purpose old CSS tricks articles.
                </p>
            </PageIntro>

            <ContactSection />
        </>
    )
}
