import { gql } from 'apollo-server-express';

export default gql`
  type SeeNoteResult {
    ok: Boolean!
    error: String
    notes: [Note]
  }
  type Query {
    seeNote(offset: Int!): SeeNoteResult!
  }
`;
