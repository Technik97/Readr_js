import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PublisherAvgOrderByAggregateInput } from "../inputs/PublisherAvgOrderByAggregateInput";
import { PublisherCountOrderByAggregateInput } from "../inputs/PublisherCountOrderByAggregateInput";
import { PublisherMaxOrderByAggregateInput } from "../inputs/PublisherMaxOrderByAggregateInput";
import { PublisherMinOrderByAggregateInput } from "../inputs/PublisherMinOrderByAggregateInput";
import { PublisherSumOrderByAggregateInput } from "../inputs/PublisherSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PublisherOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PublisherCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PublisherCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PublisherAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PublisherAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PublisherMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PublisherMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PublisherMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PublisherMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PublisherSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PublisherSumOrderByAggregateInput | undefined;
}
