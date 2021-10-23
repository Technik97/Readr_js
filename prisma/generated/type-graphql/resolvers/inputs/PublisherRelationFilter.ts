import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PublisherWhereInput } from "../inputs/PublisherWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PublisherRelationFilter {
  @TypeGraphQL.Field(_type => PublisherWhereInput, {
    nullable: true
  })
  is?: PublisherWhereInput | undefined;

  @TypeGraphQL.Field(_type => PublisherWhereInput, {
    nullable: true
  })
  isNot?: PublisherWhereInput | undefined;
}
