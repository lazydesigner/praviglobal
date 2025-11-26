"use client";
import { useState, useEffect } from "react";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin, Mail, ChevronRight, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogClient({ blog, relatedBlogs }) {
    const [shareUrl, setShareUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setShareUrl(window.location.href);
        }
    }, []);

    if (!blog) return <div className="flex flex-col items-center justify-center py-20 text-center">
      <FileX className="w-16 h-16 text-red-500 mb-4" />

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Blog Post Not Found
      </h2>

      <p className="text-gray-500 max-w-md mb-6">
        The blog you're trying to access doesn't exist or may have been removed.  
        Please check the URL or browse other articles.
      </p>

      <Link
        href="/blogs"
        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Blogs
      </Link>
    </div>;

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blog.title)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        email: `mailto:?subject=${encodeURIComponent(blog.title)}&body=${encodeURIComponent(shareUrl)}`,
    };

    return (
        <div className="min-h-screen bg-gray-50">

            {/* ---------- Your Entire UI Remains the Same ---------- */}
            {/* Paste your existing JSX from the previous component here */}

            <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                <div className="max-w-7xl container mx-auto px-4">
                    <a href="/blogs" className="inline-flex items-center gap-2 text-white mb-6">
                        <ArrowLeft className="w-5 h-5" /> Back to all articles
                    </a>

                    <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" /> 
                            {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                            month: "short", 
                            year: "numeric",
                            })}
                        </div>

                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            {blog.readingTime} min read
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <article className="flex-1 bg-white rounded-2xl shadow-lg p-8 md:p-12">
                         
                        {/* Featured Image Placeholder */}
                        <div className="relative h-80 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-8 overflow-hidden">
                            <Image
                                src={blog.featuredImage.url}              // Image URL or /public path
                                alt={blog.featuredImage.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        {/* Article Content */}
                        <div
                            className="blog-content prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />


                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-3 flex-wrap">
                                <Tag className="w-5 h-5 text-gray-400" />
                                {blog.keywords.map((tag, index) => (
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
                                <a href="https://praviglobalivf.com/book-appointment" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                                    Book Consultation
                                </a>
                                <a href="https://praviglobalivf.com/contact" className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border-2 border-white">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:w-80 space-y-8">
                        <div className="sticky top-24">
                        {/* Share Section */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 mb-3">
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
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-6 text-white mb-3">
                            <h3 className="font-bold text-xl mb-3">Have Questions?</h3>
                            <p className="text-blue-100 mb-6">Our fertility specialists are here to help you</p>
                            <div className="space-y-3">
                                <a href="tel:+918009150040" className="block w-full px-4 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-center">
                                    📞 Call: +91 8009150040
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
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
