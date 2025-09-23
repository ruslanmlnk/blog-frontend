import { GraphQLClient } from "graphql-request";


const endpoint =  process.env.NEXT_PUBLIC_BACKEND_URI + '/api/graphql'
export const graphQLClient = new GraphQLClient(endpoint, { cache: 'no-cache' });