export default async function  comments({ params }){
    console.log(await params)
    const { blog, comments } = await params;
    return (

        <>
        <h1>Comments {comments} on Blog {blog}</h1>
        </>
    )
}