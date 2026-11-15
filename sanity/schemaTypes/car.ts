import {defineArrayMember, defineField, defineType} from 'sanity'

export const car = defineType({
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'price', type: 'string', description: 'e.g. $18,500', validation: (r) => r.required()}),
    defineField({name: 'year', type: 'number', validation: (r) => r.required().integer()}),
    defineField({name: 'mileage', type: 'string', description: 'e.g. 45,000 km'}),
    defineField({name: 'condition', type: 'string', options: {list: ['Excellent', 'Like New', 'Good', 'Fair']}}),
    defineField({name: 'transmission', type: 'string', options: {list: ['Automatic', 'Manual']}}),
    defineField({name: 'fuel', type: 'string', options: {list: ['Petrol', 'Diesel', 'Hybrid', 'Electric']}}),
    defineField({name: 'engine', type: 'string'}),
    defineField({name: 'description', type: 'text', rows: 5}),
    defineField({
      name: 'images',
      title: 'Images',
      description: 'The first image is used as the main image.',
      type: 'array',
      of: [defineArrayMember({type: 'image', options: {hotspot: true}})],
      validation: (r) => r.required().min(1),
    }),
    defineField({name: 'features', type: 'array', of: [defineArrayMember({type: 'string'})]}),
    defineField({name: 'sold', type: 'boolean', initialValue: false}),
  ],
  preview: {select: {title: 'name', subtitle: 'price', media: 'images.0'}},
})
