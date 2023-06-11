import { publicProcedure, router } from '../trpc';
import { s3 } from '@lib/s3';
import { sleep } from '@tanstack/query-core/build/lib/utils'


export const sleep =(ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const menuRouter = router({
  // Each menu items only contains its AWS key. Extend all items with their actual img url

  getMenuItems: publicProcedure.query(async ({ ctx }) => {
    const menuItems = await ctx.prisma.menuItem.findMany();

    // Each menu items only contains its AWS key. Extend all items with their actual img url
    const withUrls = await Promise.all(
      menuItems.map(async (menuItem) => {
        return {
          ...menuItem,
          url: await s3.getSignedUrlPromise('getObject', {
            Bucket: 'youtube-booking-software',
            Key: menuItem.imageKey
          })
        };
      })
    );

    return withUrls; 
    })


  checkMenuStatus: publicProcedure.mutation(async () => {
    // Handle menu checking logic
    await sleep(1000);

    return { success: true };
  })
})
