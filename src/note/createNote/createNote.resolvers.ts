import client from "../../client";

export default {
    Mutation : {
        createNote : async(_:any,{title,noteArray}:any) => {
            const existingNote = await client.note.findFirst({
                where: {title},
              });
            if (existingNote) {return{
                ok:false,
                error: "같은 이름의 악보가 이미 존재해요!"
            }}
            await client.note.create({data: {
                title,
                noteArray
            }})
            return{
                ok:true
            }
        }
    }
}