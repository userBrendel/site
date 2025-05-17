"use server";

import { createClient } from "../supabase/server";

export async function readAllProduct() {
  try {
    const supabase = await createClient();
    const { data: products, error: productsError } = await supabase
      .from("Product")
      .select("*");
    

    if (productsError) {
      throw new Error(productsError.message);
    }

    return { products };
  } catch (e) {
    const errorMessage = (e as Error).message;
    console.error(errorMessage);
    return { productsError: { message: errorMessage } };
  }
}

export async function readGenderProduct(gender: string) {
  try {
    const supabase = await createClient();
    const { data: products, error: productsError } = await supabase
      .from("Product")
      .select("*")
      .limit(4)
      .eq("gender", gender);
      

    if (productsError) {
      throw new Error(productsError.message);
    }

    return { products };
  } catch (e) {
    const errorMessage = (e as Error).message;
    console.error(errorMessage);
    return { productsError: { message: errorMessage } };
  }
}
