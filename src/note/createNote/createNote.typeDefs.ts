import { gql } from 'apollo-server-express';

export default gql`
  type Mutation {
    createNote(
      title: String!
      noteArray: String!
      imgArray: String!
    ): CreateNoteResponse
  }
  type CreateNoteResponse {
    ok:Boolean!
    id:Int
    error:String
}
`;
