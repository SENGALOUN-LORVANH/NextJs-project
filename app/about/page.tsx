import Link from "next/link";

const url = "https://jsonplaceholder.typicode.com/todos";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const About = async () => {
  const res = await fetch(url);
  const todos: Todo[] = await res.json();

  return (
    <div>
      <h1>About Page</h1>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
