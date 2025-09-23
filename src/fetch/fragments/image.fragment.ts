import { gql } from "graphql-request";

const imageFragment = /* GraphQL */ gql`
    url
    alt
    width
    height
`;

export default imageFragment;