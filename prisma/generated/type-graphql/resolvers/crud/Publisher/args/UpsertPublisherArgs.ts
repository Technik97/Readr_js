import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PublisherCreateInput } from "../../../inputs/PublisherCreateInput";
import { PublisherUpdateInput } from "../../../inputs/PublisherUpdateInput";
import { PublisherWhereUniqueInput } from "../../../inputs/PublisherWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPublisherArgs {
  @TypeGraphQL.Field(_type => PublisherWhereUniqueInput, {
    nullable: false
  })
  where!: PublisherWhereUniqueInput;

  @TypeGraphQL.Field(_type => PublisherCreateInput, {
    nullable: false
  })
  create!: PublisherCreateInput;

  @TypeGraphQL.Field(_type => PublisherUpdateInput, {
    nullable: false
  })
  update!: PublisherUpdateInput;
}
