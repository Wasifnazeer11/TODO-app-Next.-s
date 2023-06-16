import { Todo } from '@/lib/drizzle'



const getData = async () => {

    try {
        const res = await fetch("/api/todo",{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(!res.ok){
            throw new Error("Faild to fetch data")
        };
        const result = await res.json()
        return result
    } catch (error) {
        console.log(error)
    }
    }

const Todolist = async () => {
    const resi :{data: Todo[]} = await getData();
    
    
    return(
        <>
{
    resi.data.map((items) => {
return(

    <div className=' bg-black/20 rounded-lg max-w-sm py-3 px-4 flex items-center gap-x-3 mt-3 p-5  my-5 '>

    <div className=' h-2 w-2 bg-black rounded-full '></div>

    <p className=''>{items.task}</p>

    </div>)
})
}
   
</>
)
}

export default Todolist