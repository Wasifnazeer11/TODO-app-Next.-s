import { QueryResult,  sql } from '@vercel/postgres'
import { NextRequest, NextResponse } from "next/server";
import { Todo, NewTodo, db, todoTable,  } from '@/lib/drizzle'; 



export async function GET(request: NextRequest){

    try{
            const res = await db.select().from(todoTable);
            console.log(res)

          return NextResponse.json({data:res})
    }catch(err)
    {
        console.log(err)
        return  NextResponse.json("Something went wrong")
    }
    return NextResponse.json({message: "This is my api you called"});
}



export async function POST(request:NextRequest){
  
    const req = await request.json();
    try {
        if(req.task){
            const res = db.insert(todoTable).values({
                task: req.Task,
            }).returning();
                console.log(res)

            return NextResponse.json({message:"Data added"});
            // client.sql`SELECT * FROM todos`
        }else {
            throw new Error("Task field is req  requird")
        }
        
    } catch (error) {
        return NextResponse.json({message: (error as {message:string}).message})
    }   
}

// // Delete
// const deletedNames /* : { name: string }[] */ = await db.delete(users)
//   .where(eq(users.id, insertedUser.id))
//   .returning({ name: users.fullName });
// Update
// const updateResult /* : { updated: Date }[] */ = await db.update(users)
//   .set({ cityId: insertedCity.id, updatedAt: new Date() })
//   .where(eq(users.id, insertedUser.id))
//   .returning({ updated: users.updatedAt });