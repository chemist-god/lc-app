import type { StructureResolver } from 'sanity/structure'

// Reference to the Sanity Structure Builder documentation
// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('startup').title('Startups'), // Ensure 'startup' is defined in your schema
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author', 'startup'].includes(item.getId()!), // Updated to include 'startup'
      ),
    ])