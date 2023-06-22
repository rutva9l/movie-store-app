import Movies from './../components/movies';
import client from "../apollo-client";
import { gql } from '@apollo/client'
import styles from '../styles/Home.module.css'

export default function Home({stuff}) {
  return (
    <Movies data={stuff} />
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`{
            genres {
                id
                name
              }
              movies {
                genre
                id
                rating
                release
                title
              }
          }`,
  });
  console.log('staticprops run')
  console.log('data', data);
  return {
    props: {
      stuff: data,
    },
  };
}