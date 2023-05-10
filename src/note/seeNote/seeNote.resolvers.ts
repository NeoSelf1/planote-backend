import client from '../../client';

export default {
  Query: {
    seeNote: (_:any, { offset }:any) => {
      const notes = client.note.findMany({
        orderBy: { createdAt: 'desc' }
        skip: offset,
      });
      if (!notes) {
        return {
          ok: false,
          error: 'No Notes',
        };
      }
      return {
        ok: true,
        notes,
      };
    },
  },
};
