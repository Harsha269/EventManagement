export const cookie = {
  get: () => {
    // Assuming token is stored as "token" in cookie
    const value = document.cookie.match('(^|;)\\s*token\\s*=\\s*([^;]+)');
    return value ? value.pop() : null;
  },
  set: (token) => {
    document.cookie = `token=${token}; path=/;`;
  },
  clear: () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  },
};
