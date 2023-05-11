import { gql } from 'apollo-server-express';

export default gql`
  type Note {
    id: Int!
    title: String!
    noteArray: String!
    imgArray: String!
  }
`;

//isFollowing: Boolean #follow여부에 따라 front에서 생기는 변화들을 반영하고, 상황에 맞는 쿠키를 받을 수 있음
//isMe: Boolean! #editProfile 버튼 출력여부 파악기준(내가 보고 있는 프로필에 따라 변경되는 값임)
