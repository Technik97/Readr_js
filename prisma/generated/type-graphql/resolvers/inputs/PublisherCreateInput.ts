import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedManyWithoutPublisherInput } from "../inputs/BookCreateNestedManyWithoutPublisherInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PublisherCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => BookCreateNestedManyWithoutPublisherInput, {
    nullable: true
  })
  books?: BookCreateNestedManyWithoutPublisherInput | undefined;
}
