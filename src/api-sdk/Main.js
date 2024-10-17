// src/api-sdk/index.js
import { getUserById, createUser } from './users';
import { getPosts, createPost } from './posts';

const ApiSDK = {
  // User API calls
  getUserById,
  createUser,

  // Post API calls
  getPosts,
  createPost,
};

export default ApiSDK;
