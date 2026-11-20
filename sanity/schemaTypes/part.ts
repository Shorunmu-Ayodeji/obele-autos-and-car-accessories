import {defineField, defineType} from 'sanity'

export const part = defineType({
  name: 'part',
  title: 'Part',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'price', type: 'string', description: 'e.g. NGN 25,000'}),
    defineField({name: 'category', type: 'string'}),
    defineField({name: 'brand', type: 'string'}),
    defineField({name: 'warranty', type: 'string'}),
    defineField({name: 'image', type: 'image', options: {hotspot: true}}),
  ],
  preview: {select: {title: 'name', subtitle: 'price', media: 'image'}},
})
