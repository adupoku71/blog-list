import { log } from "node:console"

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const likes = blogs.reduce((acc, blog) => acc + blog.likes, 0)
  return likes
}

const favoriteBlog = (blogs) => {
  return !blogs.length
    ? null
    : blogs.reduce((prev, current) =>
        prev.likes > current.likes ? prev : current
      )
}

const mostBlogs = (blogs) => {
  const authors = {}

  for (const blog of blogs) {
    let blogAuthor = blog["author"]
    if (blogAuthor in authors) {
      authors[blogAuthor] += 1
    } else {
      authors[blogAuthor] = 1
    }
  }
  let maxAuthor = null
  let maxBlogs = -Infinity

  for (const author in authors) {
    if (authors[author] > maxValue) {
      maxAuthor = author
      maxBlogs = authors[author]
    }
  }
  return {
    author: maxAuthor,
    blogs: maxBlogs,
  }
}

export { dummy, totalLikes, favoriteBlog, mostBlogs }
