import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PublisherOrderByWithAggregationInput } from "../../../inputs/PublisherOrderByWithAggregationInput";
import { PublisherScalarWhereWithAggregatesInput } from "../../../inputs/PublisherScalarWhereWithAggregatesInput";
import { PublisherWhereInput } from "../../../inputs/PublisherWhereInput";
import { PublisherScalarFieldEnum } from "../../../../enums/PublisherScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPublisherArgs {
  @TypeGraphQL.Field(_type => PublisherWhereInput, {
    nullable: true
  })
  where?: PublisherWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PublisherOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PublisherOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PublisherScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => PublisherScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PublisherScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
