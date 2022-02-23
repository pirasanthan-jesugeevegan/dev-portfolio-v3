export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'display',
      title: 'Display',
      type: 'boolean',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      type: 'object',
      name: 'card',
      fieldsets: [{ name: 'social' }],
      fields: [
        {
          title: 'Code',
          name: 'code',
          type: 'string',
          fieldset: 'social',
        },
        {
          title: 'Demo',
          name: 'demo',
          type: 'string',
          fieldset: 'social',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'string',
          fieldset: 'social',
        },
        {
          title: 'Dev',
          name: 'dev',
          type: 'boolean',
          fieldset: 'social',
        },
        {
          title: 'Feature',
          name: 'feature',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          title: 'Tech',
          name: 'tech',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
    {
      title: 'Icons',
      name: 'icons',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
