export default async function Blog({ params }) {
     const { blog } = await params;
    
    return (
        <>
        Blog NO. {blog}
        </>
    )
}