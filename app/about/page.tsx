const url = "https://jsonplaceholder.typicode.com/todos";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const fetchData = async (): Promise<Todo[]> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500)); 
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; 
  }
};

export default async function AboutPage() { 
  const data: Todo[] = await fetchData();

  return (
    <div>
      <main>
        <header>
          <h1>About us</h1>
        </header>

        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.completed ? "Completed" : "Not Completed"}</p>
            </div>
          ))
        ) : (
          <p>Loading or No Data Available...</p>
        )}
      </main>
    </div>
  );
}
