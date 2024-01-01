export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
            name: 'stack',
            type: 'string',
            title: 'Stack',
          },
        {
          name: 'projectImage',
          type: 'image',
          title: 'Project Image',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
          },
      ],
}