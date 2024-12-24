import { defineField, defineType } from "sanity";

export const startup = defineType({
    name: "startup",
    title: 'Startup',
    type: "document",
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Startup Title',
        }),
        defineField({
            name: 'slug',
            type: 'slug', 
            options: {
                source: 'title',
            }
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }], // Ensure this is an array
            title: 'Author',
        }),
        defineField({
            name: 'view',
            type: 'number',
            title: 'View Count',
            validation: (Rule) => Rule.min(0).error("View count must be a non-negative number"),
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'category',
            type: 'string',
            title: 'Category',
            validation: (Rule) => Rule.min(1).max(20).required().error("Please enter a category"), 
        }),
        defineField({
            name: 'image',
            type: 'url', // Consider changing to 'image' if you want to allow uploads
            title: 'Image URL',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'pitch',
            type: 'markdown', // Ensure this type is defined in your schema
            title: 'Pitch',
        }),
    ],
});