export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      title: 'Approved',
      name: 'approved',
      type: 'boolean',
      initialValue: false,
      description: "Comments won't show on the site without approval",
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'comment',
      type: 'text',
    },
    {
      name: 'post',
      type: 'reference',
      to: [{ type: 'post' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      date: 'approved',
    },
    prepare(selection) {
      const { title, date } = selection;
      return {
        title: title,
        subtitle: `Approved:${date}`,
      };
    },
  },
};
