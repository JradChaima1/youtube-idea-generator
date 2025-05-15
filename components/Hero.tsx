import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pl-64">
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-2 sm:pb-32 lg:flex lg:px-4 lg:py-20">
        <div className="max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <div className="mt-4 sm:mt-6 lg:mt-4">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                What&apos;s new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Just shipped v1.0</span>
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Generate YouTube Ideas with AI
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transform your creative process with AI-powered YouTube video ideas. Get trending topics, engagement predictions, and content strategies tailored to your niche.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500">
              Start Generating
            </Button>
            <Button variant="ghost" size="lg">
              Learn more <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}