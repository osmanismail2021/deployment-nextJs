export default function Blog({posts}){
    return(
        <>
            <h1>Blog page</h1>
            {console.log(posts)}
            {
                posts.map((post, index)=>(
                    <div key={index}>
                        <p>{post.title}</p>
                    </div>
                ))
            }
        </>
    );
}

export async function getServerSideProps(context) {
    let res = await fetch ("https://jsonplaceholder.typicode.com/posts");
    let posts = await res.json();
    return {
        props: {
            posts,
        },
    };
}