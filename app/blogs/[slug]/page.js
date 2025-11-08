'use client';
import { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin, Mail, ChevronRight, Tag } from 'lucide-react';
import { getBlogBySlug, getRelatedBlogs } from '@/lib/blogData';

export default function BlogPostPage({ params }) {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    // In real Next.js, params would be available directly
    // For demo, we'll use the first blog
    const slug = params?.slug || 'understanding-ivf-complete-guide';
    const foundBlog = getBlogBySlug(slug);
    setBlog(foundBlog);
    
    if (foundBlog) {
      setRelatedBlogs(getRelatedBlogs(foundBlog.id));
    }
  }, [params]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Blog post not found</h2>
          <a href="/blogs" className="text-blue-600 hover:underline">← Back to all blogs</a>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blog.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(blog.title)}&body=${encodeURIComponent(shareUrl)}`
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <a href="/blogs" className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors mb-6">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to all articles</span>
          </a>
          
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-medium">{blog.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="flex-1 bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Author Info */}
            <div className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-200">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-semibold">
                {blog.author.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">{blog.author.name}</p>
                <p className="text-gray-600">{blog.author.role}</p>
              </div>
            </div>

            {/* Featured Image Placeholder */}
            <div className="relative h-80 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-8 overflow-hidden">
              <span className="text-9xl">{blog.image}</span>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 flex-wrap">
                <Tag className="w-5 h-5 text-gray-400" />
                {blog.tags.map((tag, index) => (
                  <span key={index} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Ready to Start Your Fertility Journey?</h3>
              <p className="text-blue-100 mb-6">
                Our experienced team at Pravi IVF is here to support you every step of the way
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/book-appointment" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Book Consultation
                </a>
                <a href="/contact" className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border-2 border-white">
                  Contact Us
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-8">
            {/* Share Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share This Article
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  <span className="text-sm font-medium">Twitter</span>
                </a>
                <a
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href={shareLinks.email}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">Email</span>
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="font-bold text-xl mb-3">Have Questions?</h3>
              <p className="text-blue-100 mb-6">Our fertility specialists are here to help you</p>
              <div className="space-y-3">
                <a href="tel:+919301522255" className="block w-full px-4 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-center">
                  📞 Call: +91 9301522255
                </a>
                <a href="mailto:info@praviivf.in" className="block w-full px-4 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors text-center">
                  ✉️ Email Us
                </a>
              </div>
            </div>

            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedBlogs.map((relatedBlog) => (
                    <a
                      key={relatedBlog.id}
                      href={`/blogs/${relatedBlog.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-3xl flex-shrink-0">
                          {relatedBlog.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                            {relatedBlog.title}
                          </h4>
                          <p className="text-xs text-gray-500">{relatedBlog.readTime}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <a href="/blogs" className="mt-6 flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                  View All Articles
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}