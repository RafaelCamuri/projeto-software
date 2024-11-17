const mysql = require('mysql2');

// Criar o pool de conexões
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'Rafa!123', 
  database: 'projeto_software',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Testar a conexão
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL.');
    connection.release(); // Liberar a conexão de volta para o pool
  }
});

module.exports = pool;
