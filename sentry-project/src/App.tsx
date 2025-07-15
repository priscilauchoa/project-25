import AdoptionForm from "./components/AdoptionForm/AdoptionForm";


function App() {
  const handleError = () => {
    throw new Error(" 2 - This is your second error!");
  }
  return (<>
    <button onClick={() => { throw new Error(" 1 - This is your first error!"); }}> 1 Break the world</button>
    <button onClick={handleError}>2 Break the world</button>
    <AdoptionForm />


  </>)
}

export default App
