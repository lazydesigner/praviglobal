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
    return <div className="p-10 text-center">Blog not found</div>;
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
