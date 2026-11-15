import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'description', type: 'text', rows: 3}),
    defineField({name: 'phone', type: 'string', description: 'e.g. +254700123456'}),
    defineField({name: 'whatsapp', type: 'string', description: 'WhatsApp number, e.g. +254700123456'}),
    defineField({name: 'email', type: 'string'}),
    defineField({name: 'address', type: 'text', rows: 3}),
  ],
  preview: {prepare: () => ({title: 'Site Settings'})},
})
