import fetchPress from "@/fetch/press.fetch";
export default async function Press(){
    const data = await fetchPress();
    

    return(
        <>
        <h1>{data?.title}</h1>
        <p>{data?.description}</p>
        </>
    )
}