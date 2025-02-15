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
export { dummy, totalLikes, favoriteBlog }
