"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { Video } from "@/server/db/schema";
import { Button } from "@/components/ui/button";
//import { scrapeVideos } from "@/server/youtube-actions";
import { useToast } from "@/hooks/use-toast";
import { formatCount } from "@/lib/utils";
import { Loader2, TvMinimal } from "lucide-react";

export default function VideoList({
  initialVideos,
}: {
  initialVideos: Video[];
}) {
  const [isScraping, setIsScraping] = useState(false);
  const [videos, setVideos] = useState(initialVideos);
  const { toast } = useToast();

  const handleScrape = async () => {
    setIsScraping(true);
    try {
      //const newVideos = await scrapeVideos();
      //setVideos((prevVideos) => [...newVideos, ...prevVideos]);
      toast({
        title: "Scrape Successful",
      });
    } catch (error) {
      console.error("Error scraping videos:", error);
      let errorMessage = "An unknown error occurred";

      if (error instanceof Error) {
        if (error.message.includes("No channels found for the user")) {
          errorMessage =
            "Please add YouTube channels first by clicking settings in the top right.";
        } else {
          errorMessage = error.message;
        }
      }

      console.log("errorMessage", errorMessage);
      toast({
        title: "Scrape Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsScraping(false);
    }
  };

  useEffect(() => {
    setVideos(initialVideos);
  }, [initialVideos]);

  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 bg-white/50">
        <div className="bg-purple-50 rounded-xl p-4 mb-6">
          <TvMinimal className="h-12 w-12 text-purple-600" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">No videos yet</h3>
        <p className="text-gray-600 text-center max-w-md mb-8">
          Please add YouTube channels and then scrape for videos. Video comments
          will be analyzed for content ideas.
        </p>
        <Button
          onClick={handleScrape}
          disabled={isScraping}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg transition-all duration-200 rounded-lg text-md font-medium px-8 py-2.5"
        >
          {isScraping ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Scraping...
            </>
          ) : (
            <>Scrape Videos</>
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white/50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Videos</h1>
        <Button
          onClick={handleScrape}
          disabled={isScraping}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-sm hover:shadow-md transition-all duration-200 rounded-lg text-sm font-medium px-6 py-2"
        >
          {isScraping ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Scraping...
            </>
          ) : (
            <>Scrape Videos</>
          )}
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Link
            key={video.id}
            href={`/video/${video.id}`}
            className="group block"
          >
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-100 transition-all duration-200">
              <div className="aspect-video relative">
                {video.thumbnailUrl ? (
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                    <span className="text-gray-400">No thumbnail</span>
                  </div>
                )}
              </div>
              <div className="p-4 space-y-2">
                <h2 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors duration-200">
                  {video.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {video.channelTitle}
                </p>
                <div className="flex items-center text-xs text-gray-500 pt-1">
                  <span>
                    {video.viewCount ? formatCount(video.viewCount) : "0"} views
                  </span>
                  <span className="mx-2">•</span>
                  <span>
                    {formatDistanceToNow(new Date(video.publishedAt))} ago
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}