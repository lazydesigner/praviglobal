// 'use client';
// import { useState } from 'react';
import { Search, TrendingUp } from 'lucide-react';
import { BlogCard } from '@/components/BlogCard';
import { BlogCategories } from '@/components/BlogCategories'; 
// import { blogPosts, categories } from '@/lib/blogData';

import Post from '@/models/Post';
import dbConnect from '@/lib/dbConnect';

async function getPosts() {
  await dbConnect()
  const posts = await Post.find({ status: "published" })
    .sort({ createdAt: -1 })
    .limit(3)
    .lean()
  return JSON.parse(JSON.stringify(posts))
}

async function getAllPosts() {
  await dbConnect()
  const posts = await Post.find({ status: "published" })
    .sort({ createdAt: -1 }) 
    .lean()
  return JSON.parse(JSON.stringify(posts))
}


export default async function BlogsPage() {
  
  const featuredPosts = await getPosts() 
  const BLOG_POSTS = await getAllPosts() 

  // const [activeCategory, setActiveCategory] = useState('All Postsw');
  // const [searchQuery, setSearchQuery] = useState('');

  // const BLOG_POSTS = BLOG_POSTS.filter(blog => {
  //   const matchesCategory = activeCategory === 'All Postsw';
  //   const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //                        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //                        blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
  //   return matchesCategory && matchesSearch;
  // });


  // console.log(BLOG_POSTS)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Latest Fertility Insights</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fertility Blog & Resources
            </h1>
            
            <p className="text-xl text-blue-100 mb-8">
              Expert advice, treatment guides, and success stories to support your fertility journey
            </p>
            
            {/* Search Bar */}
            {/* <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or treatments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-xl"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Categories */}
      {/* <section className="container mx-auto px-4 py-12">
        <BlogCategories 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </section> */}

      {/* Blog Grid */}
      <section className="container mx-auto px-4 pb-20">
        {BLOG_POSTS.length > 0 ? (
          <>
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-blue-600">{BLOG_POSTS.length}</span> {BLOG_POSTS.length === 1 ? 'article' : 'articles'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button
              // onClick={() => {
              //   setSearchQuery('');
              //   setActiveCategory('All Postsw');
              // }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

    {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated on Fertility Topics
            </h2>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter for the latest articles, tips, and success stories delivered to your inbox
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-blue-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
