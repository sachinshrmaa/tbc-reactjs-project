
const Todo = ({todos}) => {
    return (
      <div>
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    );
}
 
export default Todo;