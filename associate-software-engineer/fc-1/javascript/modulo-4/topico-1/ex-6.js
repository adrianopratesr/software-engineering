const closeConnection = () => console.log("Fechadno conexão");
const openConnection = () => console.log("Abrindo conexão");

try {
    console.log("Executando operação crítica...");
    throw new Error("Falha na operação!");
} catch (error) {
    console.error("Erro capturado: " + error.message);
} finally {
    closeConnection();
    openConnection();
}
