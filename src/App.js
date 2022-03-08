import './App.css';
import StopWatch from './components/StopWatch';
import PlanAndGoal from './components/PlanAndGoal';

function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '안녕하세요',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '반갑습니다',
  //     checked: false,
  //   },
  //   {
  //     id: 3,
  //     text: '힘내봐요',
  //     checked: false,
  //   },
  // ]);
  // const nextId = useRef(4);
  // const onInsert = useCallback(
  //   (text) => {
  //     const newTodos = {
  //       id: nextId.current,
  //       text,
  //       checked: false,
  //     };
  //     setTodos(todos.concat(newTodos));
  //     nextId.current += 1;
  //   },
  //   [todos],
  // );
  // const onRemove = useCallback(
  //   (id) => {
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   },
  //   [todos],
  // );
  // const onToggle = useCallback(
  //   (id) => {
  //     setTodos(
  //       todos.map((todo) =>
  //         todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //       ),
  //     );
  //   },
  //   [todos],
  // );

  return (
    <>
      <StopWatch />
      <PlanAndGoal />
    </>
  );
}

export default App;
