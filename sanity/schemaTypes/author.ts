import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const author = defineType({
    name: "author",
    title: 'Author',
    type: "document",
    icon: UserIcon,
    fields: [
        defineField({
            name: 'id',
            type: 'string', // Consider using 'string' or 'slug' for unique identifiers
        }),
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'username', // Corrected typo
            type: 'string',
        }),
        defineField({
            name: 'email',
            type: 'string',
            validation: (Rule) => Rule.email() // Optional: Add email validation
        }),
        defineField({
            name: 'image',
            type: 'url',
        }),
        defineField({
            name: 'bio',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'name',
        }
    }
});