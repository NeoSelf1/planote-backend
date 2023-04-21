import client from '../../client';

export default {
  Query: {
    seeNote: (_, { offset }) => {
      const notes = client.note.findMany({
        orderBy: { createdAt: 'desc' },
        take: 3,
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
