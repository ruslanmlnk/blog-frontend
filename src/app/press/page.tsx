import fetchPress from "@/fetch/press.fetch";
export default async function Press(){
    const data = await fetchPress();
    console.log(data);
}