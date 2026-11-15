import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-10-01',
  useCdn: false,
})

const builder = imageUrlBuilder(client)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => builder.image(source)

export type Car = {
  id: string
  name: string
  price: string
  year: number
  mileage: string
  condition?: string
  transmission?: string
  fuel?: string
  engine?: string
  description: string
  features: string[]
  image: string
  gallery: string[]
}

export type SiteSettings = {
  title?: string
  description?: string
  phone?: string
  whatsapp?: string
  email?: string
  address?: string
}

const carProjection = `{
  "id": _id,
  name, price, year, mileage, condition, transmission, fuel, engine,
  "description": coalesce(description, ""),
  "features": coalesce(features, []),
  "gallery": images[].asset->url,
  "image": images[0].asset->url
}`

export async function getCars(): Promise<Car[]> {
  return client.fetch(
    `*[_type == "car" && sold != true] | order(_createdAt desc) ${carProjection}`,
    {},
    {next: {revalidate: 60}},
  )
}

export async function getCar(id: string): Promise<Car | null> {
  return client.fetch(`*[_type == "car" && _id == $id][0] ${carProjection}`, {id}, {next: {revalidate: 60}})
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const s = await client.fetch(`*[_id == "siteSettings"][0]`, {}, {next: {revalidate: 60}})
  return s ?? {}
}

export type Contact = {
  phone: string
  tel: string
  whatsapp: string
  wa: string
  email: string
  address: string
}

const digits = (v: string) => v.replace(/\D/g, '')

export async function getContact(): Promise<Contact> {
  const s = await getSiteSettings()
  const phone = s.phone || '+254700123456'
  const whatsapp = s.whatsapp || phone
  return {
    phone,
    tel: `tel:+${digits(phone)}`,
    whatsapp,
    wa: `https://wa.me/${digits(whatsapp)}`,
    email: s.email || 'info@obeleautos.com',
    address: s.address || '123 Business Street, Nairobi',
  }
}
