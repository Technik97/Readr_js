import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PublisherCreateWithoutBooksInput } from "../inputs/PublisherCreateWithoutBooksInput";
import { PublisherUpdateWithoutBooksInput } from "../inputs/PublisherUpdateWithoutBooksInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PublisherUpsertWithoutBooksInput {
  @TypeGraphQL.Field(_type => PublisherUpdateWithoutBooksInput, {
    nullable: false
  })
  update!: PublisherUpdateWithoutBooksInput;

  @TypeGraphQL.Field(_type => PublisherCreateWithoutBooksInput, {
    nullable: false
  })
  create!: PublisherCreateWithoutBooksInput;
}
