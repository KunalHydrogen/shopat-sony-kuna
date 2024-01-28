import {useLoaderData, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export function meta() {
  return [
    {title: 'Hydrogen'},
    {description: 'A custom storefront powered by Hydrogen'},
  ];
}

export async function loader({context}) {
  return await context.storefront.query(COLLECTIONS_QUERY);
}

export default function Index() {
  const {collections} = useLoaderData();
  return (
    <section className="Collection_Image">
      <div className="">
        {collections.nodes.map((collection) => {
          return (
            <Link to={`/collections/${collection.handle}`} key={collection.id}>
              <div className="">
                {collection?.image && (
                  <Image className="Image_Collections"
                    data={collection.image}
                    key={collection.id}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 3, query: "collection_type:smart") {
      nodes {
        id
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;
