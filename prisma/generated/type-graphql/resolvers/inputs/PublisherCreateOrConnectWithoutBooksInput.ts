import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PublisherCreateWithoutBooksInput } from "../inputs/PublisherCreateWithoutBooksInput";
import { PublisherWhereUniqueInput } from "../inputs/PublisherWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PublisherCreateOrConnectWithoutBooksInput {
  @TypeGraphQL.Field(_type => PublisherWhereUniqueInput, {
    nullable: false
  })
  where!: PublisherWhereUniqueInput;

  @TypeGraphQL.Field(_type => PublisherCreateWithoutBooksInput, {
    nullable: false
  })
  create!: PublisherCreateWithoutBooksInput;
}
