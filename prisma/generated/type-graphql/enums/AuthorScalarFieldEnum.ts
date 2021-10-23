import * as TypeGraphQL from "type-graphql";

export enum AuthorScalarFieldEnum {
  id = "id",
  name = "name",
  bio = "bio"
}
TypeGraphQL.registerEnumType(AuthorScalarFieldEnum, {
  name: "AuthorScalarFieldEnum",
  description: undefined,
});
