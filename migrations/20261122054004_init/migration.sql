-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "star" TEXT NOT NULL,
    "discount_prise" INTEGER NOT NULL,
    "original_prise" INTEGER NOT NULL,
    "is_bestselling" BOOLEAN NOT NULL DEFAULT false,
    "delivery_data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);
