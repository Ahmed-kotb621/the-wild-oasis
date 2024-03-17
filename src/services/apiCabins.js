import supabase, { supabaseUrl } from "./supabase";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqYXBreXBydXBkZWF1eXlteHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwMTAzOTYsImV4cCI6MjAyMTU4NjM5Nn0.Ie-eqWAa0ICtV1d0kBc2cb4uJHGXWGhFcBIEAct8yrc";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Error in Loading Cabins data");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabin Could not be deleted");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin?.image?.startsWith?.(supabaseUrl);

  const imageName = hasImagePath
    ? newCabin.image
    : `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;
  // create / Edit
  let query = supabase.from("cabins");
  if (!id)
    query = query
      .insert([{ ...newCabin, image: imagePath }])
      .select()
      .single();

  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query;
  if (error) {
    throw new Error("Cabin could not be inserted");
  }

  // upload image

  const { error: storageError } = await supabase.storage
    .from("cabins-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Error while uploading image and new cabin could not created"
    );
  }
  return data;
}
