const app = req ("./src/app")

const PORT = process.env.PORT

app.listen (PORT, () => 
    console.log ("Servidor rodando na porta ${PORT}"))