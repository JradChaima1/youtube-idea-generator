import { getVideosForUser } from "@/server/db/queries";

import VideoList from "@/components/VideoList";
export default async function VideosPage() {

    const videos = await getVideosForUser();

    return(
        <main className="p-9">
        <VideoList initialVideos={videos} />
        </main>
    );
}