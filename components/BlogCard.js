import Image from "next/image";

function calculateReadingTime(content) {
  if (!content) return 0;
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function BlogCard({ blog }) {
  return (
    <a
      href={`/${blog.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Blog Thumbnail */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={blog.featuredImage.url}              // Image URL or /public path
          alt={blog.featuredImage.alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />

        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {blog.categories[0]}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span>
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "short", 
              year: "numeric",
            })}
          </span>
          <span>•</span>
          <span>{calculateReadingTime(blog.content)} min read</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{blog.metaDescription}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {/* AUTHOR SECTION */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/logo2.jpg"    // replace with actual avatar image
                alt="Dr. Deep"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Pravi global ivf</p>
              <p className="text-xs text-gray-500">Author</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
