"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700" : "text-gray-700";
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button 
        variant="ghost"
        size="icon"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-2 z-50 bg-white/80 backdrop-blur-sm border border-purple-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </Button>

      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transform transition-all duration-300 ease-in-out fixed top-0 left-0 h-full w-64 bg-white/80 backdrop-blur-md border-r border-purple-100 z-40 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-200`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 ml-8 lg:ml-0 border-b border-purple-100">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">YT Ideas</span>
                <span className="text-xs text-gray-500">Spark your creativity</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-2">
            <Link 
              href="/"
              className={`flex items-center gap-2 p-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-200 ${isActive('/')}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              <span className="font-medium">Home</span>
            </Link>
            
            <Link href="/ideas" className={`flex items-center gap-2 p-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 text-gray-700 transition-all duration-200 aria-[current=page]:bg-gradient-to-r aria-[current=page]:from-purple-50 aria-[current=page]:to-pink-50 aria-[current=page]:text-purple-700} ${isActive('/ideas')}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
              </svg>
              <span className="font-medium">My Ideas</span>
            </Link>
            
            <Link href="/trending" className={`flex items-center gap-2 p-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 text-gray-700 transition-all duration-200 aria-[current=page]:bg-gradient-to-r aria-[current=page]:from-purple-50 aria-[current=page]:to-pink-50 aria-[current=page]:text-purple-700 ${isActive('/trending')}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M15.5 2.25a.75.75 0 01.75.75v5.243l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75zm-8.25 4.5a.75.75 0 011.5 0v8.25a.75.75 0 01-1.5 0V6.75zm6 6.75a.75.75 0 011.5 0v1.5a.75.75 0 01-1.5 0v-1.5zm-3-3a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0v-4.5z" />
              </svg>
              <span className="font-medium">Trending</span>
            </Link>
            
            <Link href="/analytics" className={`flex items-center gap-2 p-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 text-gray-700 transition-all duration-200 aria-[current=page]:bg-gradient-to-r aria-[current=page]:from-purple-50 aria-[current=page]:to-pink-50 aria-[current=page]:text-purple-700 ${isActive('/analytics')}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Analytics</span>
            </Link>
            
            <div className="pt-4">
              <p className="text-xs uppercase text-gray-400 font-semibold tracking-wider px-2 mb-2">Tools</p>
              <Link href="/generator" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 text-gray-700 transition-all duration-200 aria-[current=page]:bg-gradient-to-r aria-[current=page]:from-purple-50 aria-[current=page]:to-pink-50 aria-[current=page]:text-purple-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.75 6.75 0 01-.937-.171.75.75 0 11.374-1.453 5.25 5.25 0 002.626 0 .75.75 0 11.374 1.452 6.75 6.75 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                </svg>
                <span className="font-medium">Idea Generator</span>
              </Link>
            </div>
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-purple-100">
            <SignedIn>
              <div className="flex items-center gap-3">
                <UserButton afterSignOutUrl="/" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-700 truncate">Account</p>
                  <p className="text-xs text-gray-500 truncate">Manage your account</p>
                </div>
              </div>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 transition-all duration-300">
        <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 fixed top-0 right-0 left-0 lg:left-64 z-30">
          <div className="flex items-center justify-between px-4 lg:px-8 py-4">
            <h1 className="text-xl lg:text-2xl lg:ml-0 ml-8 font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Welcome</h1>
            <div className="flex items-center gap-2 lg:gap-4">
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search ideas..."
                  className="pl-10 pr-4 py-2 border border-purple-100 rounded-lg w-48 lg:w-64 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 absolute left-3 top-2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-1 text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                <span>Watch tutorial</span>
              </Button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;