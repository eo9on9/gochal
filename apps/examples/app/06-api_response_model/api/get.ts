export const get = <T>(data: T) =>
  new Promise<T>(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 300)
  })
