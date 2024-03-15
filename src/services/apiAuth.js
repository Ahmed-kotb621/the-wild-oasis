import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        // info about user
        fullName,
        avatar: "",
      },
    },
  });
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null; // no current user

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function updateUserData({ password, fullName, avatar }) {
  // 1. update user password or fullName
  let updateData;

  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);

  if (!avatar) return data;
  // 2. upload user avater
  let fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { errors } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (errors) throw new Error(errors.message);
  //3. update avatar

  const { data: updatedData, error: updateError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (updateError) throw new Error(updateError.message);
  return updateData;
}
