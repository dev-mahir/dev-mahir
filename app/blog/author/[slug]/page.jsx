import Head from "next/head";

export default function BlogPostPage({ blog }) {
  if (!blog) return <h1>Blog Not Found</h1>;

  return (
    <>
      <Head>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.metaKeywords.join(", ")} />
      </Head>
      <article>
        <h1>{blog.title}</h1>
        <p>By {blog.author.name}</p>
        <img src={blog.featuredImage} alt={blog.title} />
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        <hr />
        <div>
          <h3>About the Author</h3>
          <img src={blog.author.profileImage} alt={blog.author.name} width="100" />
          <p>{blog.author.bio}</p>
          <p>Follow: 
            <a href={blog.author.socialLinks.twitter} target="_blank">Twitter</a> | 
            <a href={blog.author.socialLinks.linkedin} target="_blank">LinkedIn</a>
          </p>
        </div>
      </article>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/${params.slug}`);
  const blog = await res.json();

  return {
    props: { blog },
  };
}