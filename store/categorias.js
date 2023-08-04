export default function useTasks() {
  const buscar = async () => {
    try {
      const response = await useFetch('https://jsonplaceholder.typicode.com/todos')
      return await response.json()
    } catch (err) {
      error.value = err.message
    }
  }

  return { buscar }
}
