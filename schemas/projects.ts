import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
    }),
    defineField({
      name: 'display',
      title: 'Display',
      type: 'boolean',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'card',
      title: 'Card',
      type: 'object',
      fieldsets: [{ name: 'social' }],
      fields: [
        defineField({
          name: 'code',
          title: 'Code',
          type: 'string',
          fieldset: 'social',
        }),
        defineField({
          name: 'demo',
          title: 'Demo',
          type: 'string',
          fieldset: 'social',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'string',
          fieldset: 'social',
        }),
        defineField({
          name: 'dev',
          title: 'Dev',
          type: 'boolean',
          fieldset: 'social',
        }),
        defineField({
          name: 'feature',
          title: 'Feature',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'tech',
          title: 'Tech',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    defineField({
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});
