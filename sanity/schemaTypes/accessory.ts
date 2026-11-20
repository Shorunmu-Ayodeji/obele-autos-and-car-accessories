import {defineField, defineType} from 'sanity'

export const accessory = defineType({
  name: 'accessory',
  title: 'Accessory',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'price', type: 'string', description: 'e.g. NGN 25,000'}),
    defineField({name: 'category', type: 'string'}),
    defineField({name: 'image', type: 'image', options: {hotspot: true}}),
  ],
  preview: {select: {title: 'name', subtitle: 'price', media: 'image'}},
})
