import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "32MB" } })
    .middleware(async ({ req }) => {
      // get user info
      const user = await currentUser();

      if (!user) throw new UploadThingError("Unauthorized");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);

      return { userId: metadata.userId, file };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

// ----------------------------------->>
// import { metadata } from "@/app/layout";
// import { currentUser } from "@clerk/nextjs/server";
// import { createUploadthing, type FileRouter } from "uploadthing/next";
// import { UploadThingError } from "uploadthing/server";
// import { file } from "zod/v4";

// const f = createUploadthing();

// export const ourFileRouter = {
//   pdfUploader: f({ pdf: { maxFileSize: "32MB" } }).middleware(async ({ req }) => {
//       // get user info
//       const user = await currentUser()

//       if(!user) throw new UploadThingError('Unauthorized')
//       return {userId: user.id}
//     }
//   )
//   .onUploadComplete(async({metadata , file})) =>{
//     console.log("Upload completed for user id", metadata.userId);

//     console.log('file url', file.url)

//     return {userId: metadata.userId, file: file.url}
//   }
// } satisfies FileRouter;

// export type OurFileRouter = typeof ourFileRouter
