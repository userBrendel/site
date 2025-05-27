"use server";

import { createClient } from "../../../utils/supabase/server";

export async function readSingleProduct(id: string) {
  try {
    const supabase = await createClient();

    const { data: product, error: productError } = await supabase
      .from("Product")
      .select("*")
      .eq("id", id)
      .single();

    if (productError) {
      throw new Error(productError.message);
    }

    return {
      product,
    };
  } catch (e) {
    const errorMessage = (e as Error).message;

    console.error(errorMessage);
    return { productError: { message: errorMessage } };
  }
}

export async function readSuggestedPerfumes(id: string) {
  try {
    const supabase = await createClient();

    const { data: product, error: productError } = await supabase
      .from("Product")
      .select("concentration, gender")
      .eq("id", id)
      .single();

    if (productError) {
      throw new Error(productError?.message);
    }

    const { concentration, gender } = product;

    const { data: suggested, error: suggestedError } = await supabase
      .from("Product")
      .select("*")
      .neq("id", id)
      .or(`concentration.eq.${concentration},gender.eq.${gender}`)
      .limit(4);

    if (suggestedError) {
      throw new Error(suggestedError.message);
    }

    return {
      suggested,
    };
  } catch (e) {
    const errorMessage = (e as Error).message;

    console.error(errorMessage);
    return { suggestedError: { message: errorMessage } };
  }
}
