import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PublisherAvgAggregate } from "../outputs/PublisherAvgAggregate";
import { PublisherCountAggregate } from "../outputs/PublisherCountAggregate";
import { PublisherMaxAggregate } from "../outputs/PublisherMaxAggregate";
import { PublisherMinAggregate } from "../outputs/PublisherMinAggregate";
import { PublisherSumAggregate } from "../outputs/PublisherSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregatePublisher {
  @TypeGraphQL.Field(_type => PublisherCountAggregate, {
    nullable: true
  })
  _count!: PublisherCountAggregate | null;

  @TypeGraphQL.Field(_type => PublisherAvgAggregate, {
    nullable: true
  })
  _avg!: PublisherAvgAggregate | null;

  @TypeGraphQL.Field(_type => PublisherSumAggregate, {
    nullable: true
  })
  _sum!: PublisherSumAggregate | null;

  @TypeGraphQL.Field(_type => PublisherMinAggregate, {
    nullable: true
  })
  _min!: PublisherMinAggregate | null;

  @TypeGraphQL.Field(_type => PublisherMaxAggregate, {
    nullable: true
  })
  _max!: PublisherMaxAggregate | null;
}
