export default async function Page({params}){
        const {ok} = await params
    return (
        <div>
            <h1>Files name : {ok?.join("/")}</h1>
        </div>
    )
}

//[[]] ==>optional catch all routes 

// optional catch all routes  can't be on the  root level of the app directory. It must be nested inside a folder.