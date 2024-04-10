export const parseCookies = (cookies: string) =>
  cookies.split('; ').reduce((result: Record<string, string>, curValue) => {
    const [key, value] = curValue.split('=')
    result[key] = value
    return result
  }, {})
