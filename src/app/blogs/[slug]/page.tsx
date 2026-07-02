import { BlogDetailPage, BLOG_POSTS  } from '../BlogDetailPage';

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogDetailPage postId={params.slug} />;
}