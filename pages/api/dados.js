import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'senai',
  database: 'papelaria',
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const [rows] = await pool.query('SELECT * FROM produto');
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  } else if (req.method === 'POST') {
    const { nome, descricao, preco, quantidade } = req.body;
    if (!nome || !descricao || !preco || !quantidade) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    try {
      const [result] = await pool.query(
        'INSERT INTO produto (nome, descricao, preco, quantidade) VALUES (?, ?, ?, ?)',
        [nome, descricao, preco, quantidade]
      );
      res.status(201).json({ id: result.insertId, nome, descricao, preco, quantidade });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao cadastrar produto' });
    }
  } else if (req.method === 'PUT') {
    const { id, nome, descricao, preco, quantidade } = req.body;
    if (!id || !nome || !descricao || !preco || !quantidade) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    try {
      const [result] = await pool.query(
        'UPDATE produto SET nome = ?, descricao = ?, preco = ?, quantidade = ? WHERE id = ?',
        [nome, descricao, preco, quantidade, id]
      );
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      res.status(200).json({ id, nome, descricao, preco, quantidade });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}