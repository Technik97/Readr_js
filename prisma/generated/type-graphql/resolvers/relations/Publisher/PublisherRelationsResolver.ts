import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { Publisher } from "../../../models/Publisher";
import { PublisherBooksArgs } from "./args/PublisherBooksArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Publisher)
export class PublisherRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Book], {
    nullable: false
  })
  async books(@TypeGraphQL.Root() publisher: Publisher, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PublisherBooksArgs): Promise<Book[]> {
    return getPrismaFromContext(ctx).publisher.findUnique({
      where: {
        id: publisher.id,
      },
    }).books(args);
  }
}
