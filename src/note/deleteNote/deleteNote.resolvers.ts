import client from "../../client";

export default {
    Mutation: {
        deleteNote: async(_:any,{id}:any)=> {
            const note = await client.note.findUnique({where:{id}})
            if (!note){
                return {
                    ok:false,
                    error: "Note not found"
                }
            } else {
                await client.note.delete({where:{id}})
            }
            return {
                ok:true
            }
        }
    }
}