
import { defineField, defineType } from "sanity";

export const author = defineType({
    name: "startup",
    title: 'Startup',
    type: "document",
    fields: [
        defineField({
            name: 'title',
            type: 'string',
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
            to: {type: 'author'}
        }),
        defineField({
            name: 'view',
            type: 'number',
        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
        defineField({
            name: 'category',
            type: 'string',
            validation: (Rule) => Rule.min(minNumber: 1).max(maxNumber: 20).required().error("Please enter a category"), 
        }),
        defineField({
            name: 'image',
            type: 'url',
        }),
    ],
    preview: {
        select: {
            title: 'name',
        }
    }
});