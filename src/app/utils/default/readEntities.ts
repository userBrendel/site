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

export async function readForHerProduct() {
  try {
    const supabase = await createClient();
    const { data: products, error: productsError } = await supabase
      .from("Product")
      .select("*")
      .eq("gender", "Her");

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

export async function readForHimProduct() {
  try {
    const supabase = await createClient();
    const { data: products, error: productsError } = await supabase
      .from("Product")
      .select("*")
      .eq("gender", "Him");

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

export async function readUniSexProduct() {
  try {
    const supabase = await createClient();
    const { data: products, error: productsError } = await supabase
      .from("Product")
      .select("*")
      .eq("gender", "Unisex");

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
