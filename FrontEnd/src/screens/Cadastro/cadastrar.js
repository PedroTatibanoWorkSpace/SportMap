import { ip } from "../../environments/develop";

export const criarUsuario = async (user, email, senha) => {

  const dadosUsuario = {
    user: user,
    email: email,
    senha: senha,
  };

  try {
    const response = await fetch(`http://${ip}:3000/criarUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosUsuario),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};



