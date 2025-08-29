"use server";
import { currentUser } from "@/features/auth/actions";
import { db } from "@/lib/db";
import { Template } from "@prisma/client";
import { tr } from "date-fns/locale";
import { revalidatePath } from "next/cache";

export const createPlayground = async (data: {
  title: string;
  template: Template;
  description?: string;
  userId: string;
}) => {
  const { template, title, description } = data;

  const user = await currentUser();

  try {
    const playground = await db.playground.create({
      data: {
        title,
        description,
        template,
        userId: user?.id!,
      },
    });
    return playground;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllPlaygroundForUser = async () => {
  const user = await currentUser();
  try {
    const playground = await db.playground.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        user: true,
        starmark: {
          where: {
            userId: user?.id,
          },
          select: {
            isMarked: true,
          },
        },
      },
    });
    return playground;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteProjectById = async (id: string) => {
  try {
    await db.playground.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const editProjectById = async (
  id: string,
  data: { title: string; description: string },
) => {
  try {
    await db.playground.update({
      where: {
        id,
      },
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const duplicateProjectById = async (id: string) => {
  try {
    const originalPlayground = await db.playground.findUnique({
      where: {
        id,
      },
    });
    if (!originalPlayground) {
      throw new Error("playground not found");
    }
    const newPlayground = await db.playground.create({
      data: {
        title: `${originalPlayground.title} (copy)`,
        description: originalPlayground.description,
        template: originalPlayground.template,
        userId: originalPlayground.userId,
      },
    });
    revalidatePath("/dashboard");
    return duplicateProjectById;
  } catch (error) {
    console.log(error);
    return null;
  }
};
