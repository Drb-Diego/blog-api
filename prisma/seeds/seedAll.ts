import { PrismaClient } from '@prisma/client';
import seedUsers from './seedUsers';
import seedCategories from './seedCategories';
import seedBlogPosts from './seedBlogPosts';
import seedPostsCategories from './seedPostsCategories';

const prisma = new PrismaClient();

async function seedAll() {
  seedUsers.forEach(async ({
    id, name, email, password, image,
  }) => {
    await prisma.users.create({
      data: {
        id,
        name,
        email,
        image,
        password,
      },
    });
  });

  seedCategories.forEach(async ({ name, id }) => prisma.category.create({ data: { name, id } }));

  seedBlogPosts.forEach(async ({ content, title, id, userId }) => {
    await prisma.blogPost.create({
      data: {
        id,
        content,
        title,
        userId,
      },
    });
  });

  seedPostsCategories.forEach(async ({ postId, categoryId }) => {
    await prisma.postCategory.create({ data: { postId, categoryId } });
  });
}

seedAll()
  .then(() => console.log('database populated'))
  .catch(() => console.log('deu ruim !!'));
