/* BLOG_POSTS was imported here but never used, and BlogDetailPage does not
   re-export it — the import was a type error and a dead reference. */
import { BlogDetailPage } from '../BlogDetailPage';

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogDetailPage postId={params.slug} />;
}