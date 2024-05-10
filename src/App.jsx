import { useForm } from "react-hook-form";

function App() {
  const { register, getValues, handleSubmit, watch } = useForm();

  watch("name");

  function submit(values) {
    console.log(values);
  }

  console.log(getValues());

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-stone-50">
      <form onSubmit={handleSubmit(submit)}>
        <div className="mb-4 flex flex-col">
          <label className="mb-2" htmlFor="name">
            Name:
          </label>
          <input
            {...register("name")}
            className="rounded border border-stone-300 p-2"
            type="text"
            id="name"
          />
        </div>
        <button
          className="mx-auto block rounded bg-sky-500 px-2 py-1 text-white hover:bg-sky-600"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
