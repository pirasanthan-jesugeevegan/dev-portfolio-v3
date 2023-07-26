import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'about',
      title: 'About me',
      type: 'object',
      fields: [
        defineField({
          name: 'header',
          title: 'Header',
          type: 'string',
        }),
        defineField({
          name: 'p1',
          title: 'Paragraph One',
          type: 'string',
        }),
        defineField({
          name: 'p2',
          title: 'Paragraph Two',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [
        defineField({
          name: 'achievement',
          title: 'Achievement',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'value',
              title: 'Image',
              type: 'image',
            }),
            defineField({
              name: 'document',
              title: 'Certificate',
              type: 'file',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'cv',
      title: 'CV',
      type: 'file',
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
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        defineField({
          name: 'skill',
          title: 'Skill',
          type: 'object',
          fields: [
            defineField({
              name: 'altText',
              title: 'Alt Text',
              type: 'string',
            }),
            defineField({
              name: 'imgSrc',
              title: 'Image Source',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        defineField({
          name: 'github',
          title: 'GitHub URL',
          type: 'string',
        }),
        defineField({
          name: 'linkedin',
          title: 'Linkedin URL',
          type: 'string',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram URL',
          type: 'string',
        }),
      ],
    }),
  ],
  initialValue: {
    isHighlighted: false,
  },
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
