// src/controllers/user.controller.js

const BookService = require('../services/book.service');

const error500Message = 'Algo deu errado, tente novamente mais tarde';

const getAll = async (_req, res) => {
  const books = await BookService.getAll();

  return res.status(200).json(books);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);
  
    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  
  } catch (e) {
    res.status(500).json({ message: error500Message });
  }
};

const createBook = async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const newBook = await BookService.createBook({ title, author, pageQuantity });
    return res.status(201).json(newBook);
};

const updateBook = async (req, res) => {
  try {
    const { bookName, book } = req.body;
    const { id } = req.params;
    const updatedUser = await BookService.updateBook(id, bookName, book);

    if (!updatedUser) return res.status(404).json({ message: 'Book não encontrado' });

    return res.status(200).json({ message: 'Book atualizado com sucesso!' });    
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await BookService.deleteBook(id);

    return res.status(200).json({ message: 'Book excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};