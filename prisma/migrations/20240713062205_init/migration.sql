-- CreateTable
CREATE TABLE "Post" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "introduction" STRING NOT NULL,
    "content" STRING NOT NULL,
    "minutes" STRING NOT NULL,
    "username" STRING NOT NULL DEFAULT 'AshuraMajestic',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
