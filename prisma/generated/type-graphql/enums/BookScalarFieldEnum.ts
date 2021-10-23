import * as TypeGraphQL from "type-graphql";

export enum BookScalarFieldEnum {
  id = "id",
  title = "title",
  isbn = "isbn",
  language = "language",
  edition = "edition",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  publisherId = "publisherId"
}
TypeGraphQL.registerEnumType(BookScalarFieldEnum, {
  name: "BookScalarFieldEnum",
  description: undefined,
});
