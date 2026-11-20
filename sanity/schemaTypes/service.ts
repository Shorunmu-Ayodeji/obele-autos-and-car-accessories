import {defineArrayMember, defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'description', type: 'text', rows: 3, validation: (r) => r.required()}),
    defineField({
      name: 'icon',
      type: 'string',
      initialValue: 'wrench',
      options: {
        list: [
          {title: 'Car', value: 'car'},
          {title: 'Wrench', value: 'wrench'},
          {title: 'Battery', value: 'battery'},
          {title: 'Tire', value: 'tire'},
          {title: 'Anchor', value: 'anchor'},
        ],
      },
    }),
    defineField({name: 'href', title: 'Link', type: 'string', description: 'Page to link to, e.g. /cars'}),
    defineField({name: 'features', type: 'array', of: [defineArrayMember({type: 'string'})]}),
    defineField({name: 'order', type: 'number', description: 'Lower numbers show first'}),
  ],
  orderings: [{title: 'Order', name: 'order', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'title', subtitle: 'description'}},
})
