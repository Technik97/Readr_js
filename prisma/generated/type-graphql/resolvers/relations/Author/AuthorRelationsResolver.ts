import * as TypeGraphQL from "type-graphql";
import { Author } from "../../../models/Author";
import { Book } from "../../../models/Book";
import { AuthorBooksArgs } from "./args/AuthorBooksArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Author)
export class AuthorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Book], {
    nullable: false
  })
  async books(@TypeGraphQL.Root() author: Author, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AuthorBooksArgs): Promise<Book[]> {
    return getPrismaFromContext(ctx).author.findUnique({
      where: {
        id: author.id,
      },
    }).books(args);
  }
}
