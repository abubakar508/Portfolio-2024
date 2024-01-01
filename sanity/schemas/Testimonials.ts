export default {
    name: 'testimonials',
    type: 'document',
    title: 'Testimonial',
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
            name: 'role',
            type: 'string',
            title: 'Role',
          },
        {
          name: 'skillImage',
          type: 'image',
          title: 'Skill Icon',
        },
        {
            name: 'feedback',
            type: 'string',
            title: 'Feedback',
          },
      ],
}