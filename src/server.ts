import express from "express";


const app = express();

/**
 * GET => BUscar informação 
 * POST => Inserir/Criar informação
 * PUT => Alterar uma informação ( alterar email, dados, endereço)
 * DELETE => Remover um dado
 * PATCH => Alterar uma informação específica
 */
app.get("/test", (request, response) => {
  // Request => Entrando
  // Response => Saindo
  return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW método post")
});

app.listen(3000, () => console.log("Server is running NOW"));