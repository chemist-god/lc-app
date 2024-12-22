import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const author = defineType( schemaDefinition: {
    name: "author",
    title: 'Author',
    type: "document",
    icon: UserIcon
    fields: [
        defineField( schemaField: {
            name: 'id',
            type: 'number',
        })
    ]
})