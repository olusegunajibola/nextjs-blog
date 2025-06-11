import { posts } from "../../data/posts";
import Layout from "../../navigation";

export default async function Post({ params }) {
    const resolvedParams = await params;

    const post = posts.find((post) => post.id == resolvedParams.id);

    return (
        <Layout>
            <h1> Post ID: {post.id}</h1>
            <h2> {post.title}</h2>
            <h3>{post.content}</h3>
        </Layout>
    );
}