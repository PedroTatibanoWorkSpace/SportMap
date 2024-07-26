import { ip } from "../../environments/develop";

export const verificarEmailCadastrado = async (email) => {
  
    try {
      const response = await fetch(`http://${ip}:3000/emails`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      const emailsCadastrados = await response.json();
      return emailsCadastrados.some((emailR) => emailR === email);
    } catch (error) {
      console.error("Erro ao verificar e-mails cadastrados:", error);
      throw error;
    }
  };