import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'i48pwtnc', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // find this at manage.sanity.io or in your sanity.json
  useCdn: true, // `false` if you want to ensure fresh data
});