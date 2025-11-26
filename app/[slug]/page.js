import dbConnect from "@/lib/dbConnect";
import Post from "@/models/Post";
import BlogClient from "./BlogClient";

// Reading time function
function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content?.replace(/<[^>]*>/g, "").split(/\s+/).length || 0;
  return Math.ceil(words / wordsPerMinute);
}

// 🟦 Generate dynamic SEO metadata
// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   await dbConnect();

//   const post = await Post.findOne({ slug, status: "published" }).lean();
//   if (!post) return {};

//   return {
//     title: post.metaTitle || post.title,
//     description: post.metaDescription || "",
//     alternates: {
//       canonical: `https://praviglobalivf.com/blogs/${post.slug}`,
//     },
//     openGraph: {
//       title: post.metaTitle || post.title,
//       description: post.metaDescription || "",
//       url: `https://praviglobalivf.com/blogs/${post.slug}`,
//       images: [
//         {
//           url: post.featuredImage || "/images/og-image.jpg",
//           width: 1200,
//           height: 630,
//         },
//       ],
//       type: "article",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: post.metaTitle || post.title,
//       description: post.metaDescription || "",
//       images: [post.featuredImage || "/images/og-image.jpg"],
//     },
//   };
// }


export default async function BlogPage({ params }) {
  const { slug } = await params; 

  await dbConnect();

  const post = await Post.findOne({
    slug,
    status: "published",
  }).lean();

  if (!post) {
    return <div className="flex flex-col items-center justify-center py-20 text-center">
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
  }

  const relatedPosts = await Post.find({
    _id: { $ne: post._id },
    status: "published",
    keywords: { $in: post.keywords || [] }
  })
    .select("title slug metaDescription categories featuredImage createdAt")
    .limit(3)
    .sort({ createdAt: -1 })
    .lean();

  const response = {
    id: post._id,
    title: post.title,
    slug: post.slug,
    content: post.content,
    metaTitle: post.metaTitle,
    metaDescription: post.metaDescription,
    canonical: post.canonical,
    keywords: post.keywords || [],
    featuredImage: post.featuredImage,
    publishedAt: post.createdAt,
    updatedAt: post.updatedAt,
    categories: post.categories,
    readingTime: calculateReadingTime(post.content),
    wordCount: post.content?.replace(/<[^>]*>/g, "").split(/\s+/).length || 0,
  };

  return (
    <BlogClient blog={response} relatedBlogs={relatedPosts} />
  );
}
