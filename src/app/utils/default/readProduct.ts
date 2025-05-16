"use server";

import { createClient } from "../supabase/server";

export async function readProduct() {
  try {
    const supabase = await createClient();

    const { data: products, error: productsError } = await supabase
      .from("Product")
      .select("*");

    if (productsError) {
      throw new Error(productsError.message);
    }

    return {
      products,
    };
  } catch (e) {
    const errorMessage = (e as Error).message;

    console.error(errorMessage);
    return { productsError: { message: errorMessage } };
  }
}
