export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About me ',
      type: 'object',
      fields: [
        {
          title: 'Header',
          name: 'header',
          type: 'string',
        },
        {
          title: 'Paragraph One',
          name: 'p1',
          type: 'string',
        },
        {
          title: 'Paragraph Two',
          name: 'p2',
          type: 'string',
        },
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [
        {
          title: 'achievements',
          type: 'object',
          fields: [
            {
              title: 'Image',
              name: 'value',
              type: 'image',
            },
            {
              title: 'Certificate',
              name: 'document',
              type: 'file',
            },
          ],
        },
      ],
    },
    {
      name: 'cv',
      title: 'CV',
      type: 'file',
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
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          title: 'achievements',
          type: 'object',
          fields: [
            {
              name: 'altText',
              title: 'altText',
              type: 'string',
            },
            {
              name: 'imgSrc',
              title: 'imgSrc',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          title: 'GitHub URL',
          name: 'github',
          type: 'string',
        },
        {
          title: 'Linkedin URL',
          name: 'linkedin',
          type: 'string',
        },
        {
          title: 'Instagram URL',
          name: 'instagram',
          type: 'string',
        },
      ],
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
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
};
