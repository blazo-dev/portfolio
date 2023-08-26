import {defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'number',
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'number',
    },
    {
      name: 'isCurrentlyWorking',
      title: 'IsCurrentlyWorking',
      type: 'boolean',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'activities',
      title: 'Activities',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
})
