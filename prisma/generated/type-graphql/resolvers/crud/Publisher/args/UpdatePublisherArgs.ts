import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PublisherUpdateInput } from "../../../inputs/PublisherUpdateInput";
import { PublisherWhereUniqueInput } from "../../../inputs/PublisherWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePublisherArgs {
  @TypeGraphQL.Field(_type => PublisherUpdateInput, {
    nullable: false
  })
  data!: PublisherUpdateInput;

  @TypeGraphQL.Field(_type => PublisherWhereUniqueInput, {
    nullable: false
  })
  where!: PublisherWhereUniqueInput;
}
