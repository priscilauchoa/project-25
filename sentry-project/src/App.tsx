
import { useSelector } from "react-redux";
import AdoptionForm from "./components/AdoptionForm/AdoptionForm";
import type { RootState } from "./app/store";



function App() {
  // const profile = useSelector((state: ProfileState) => state);
  const firstName = useSelector((state: RootState) => state.profile.firstName);
  // const handleError = () => {
  //   throw new Error(" 2 - This is your second error!");
  // }
  return (<>
    Profile:{firstName}
    {/* <button onClick={() => { throw new Error(" 1 - This is your first error!"); }}> 1 Break the world</button>
    <button onClick={handleError}>2 Break the world</button> */}
    <AdoptionForm />


  </>)
}

export default App
