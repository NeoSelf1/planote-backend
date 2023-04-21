import client from '../../client';

export default {
    Mutation : {
    editNote:
      //protectedResolver로 감싸진 구문들은 모두 ourResolver
      async (
        _:any,
        //1. 인자에 token을 포함시킬 필요도 없다.
        {
            id,
          title,
          noteArray
        }:any //모든
      ) => {
        //2. 매 mutation마다 verify를 하는 것은 매우 heavy한 설계이다. -> server.js에서 받은 token(authorization)을 util.js를
        //통해 변환된 user를 resolver에서 사용
        const updatedNote = await client.note.update({
          where: { id},
          //만약 uglyPassword가 존재한다면, 두번째 블록으로 넘어감 == 뒤에 object를 반환함
          data: {
            title,
            noteArray
          },
        });
        if (updatedNote) {
          return {
            ok: true,
          };
        } else {
          return {
            ok: false,
            error: 'Could not update Note',
          };
        }
      },
  },
};
