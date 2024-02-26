const { ApolloServer, gql } = require("apollo-server");

//GraphQLスキーマの定義
const typeDefs = gql`
  type Query {
    info: String!
  }
`

//リゾルバ関数
const resolver = {
  Query: {
    info: () => "HackerNewsクローン"
  }
}