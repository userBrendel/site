"use server";

import { createClient } from "../supabase/server";

export async function readProduct({
  filterColumn,
  filterValue,
  orderBy,
  ascending = true,
  limit,
}: {
  filterColumn?: string;
  filterValue?: string;
  orderBy?: string;
  ascending?: boolean;
  limit?: number;
}) {
  try {
    const supabase = await createClient();
    let query = supabase.from("Product").select("*");

    if (filterColumn && filterValue !== undefined) {
      query = query.eq(filterColumn, filterValue);
    }

    if (orderBy) {
      query = query.order(orderBy, { ascending });
    }

    if (limit) {
      query = query.limit(limit);
    }

    const { data: products, error: productsError } = await query;

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
