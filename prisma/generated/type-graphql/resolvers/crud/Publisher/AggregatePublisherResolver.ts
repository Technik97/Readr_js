import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePublisherArgs } from "./args/AggregatePublisherArgs";
import { Publisher } from "../../../models/Publisher";
import { AggregatePublisher } from "../../outputs/AggregatePublisher";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Publisher)
export class AggregatePublisherResolver {
  @TypeGraphQL.Query(_returns => AggregatePublisher, {
    nullable: false
  })
  async aggregatePublisher(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePublisherArgs): Promise<AggregatePublisher> {
    return getPrismaFromContext(ctx).publisher.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
