// src/services/user.service.js

const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};
// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const createBook = async ({ title, author, pageQuantity }) => {
  const newBook = await Book.create(
    { title, author, pageQuantity });
  return newBook;
};

const updateBook = async (title, author, pageQuantity) => {
  const [updatedBook] = await Book.update(
    { pageQuantity, author, title },
    { where: { title } },
  );

  console.log(updatedBook); // confira o que é retornado quando o book com o id é ou não encontrado;  
  return updatedBook;
};

const deleteBook = async (id) => {
  const book = await Book.destroy(
    { where: { id } },
  );

  console.log(book); // confira o que é retornado quando o book com o id é ou não encontrado;
  return book;
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};