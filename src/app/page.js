import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { TaskInput } from "../../components/TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* <div>
        <h4 className="display-4 fst-italic text-center">Todo List Mock Up</h4>
        <p className="text-secondary text-center">
          This lab teach you how to split react component(s)
        </p>
      </div> */}

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />

        {/* <div className="d-flex gap-1">
          <input
            className="form-control"
            placeholder="Insert a task here.."
          ></input>
          <button className="btn btn-primary">Add</button>
        </div> */}
        {/* task */}
        <Task title="Read a book" />
        {/* <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>Read a book</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div> */}
        {/* task */}
        <Task title="Take a shower" />
        {/* <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>Take a shower</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div> */}
        {/* task */}
        <Task title="Sleep" />
        {/* <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>Sleep</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>*/}
      </div>

      {/* //footer section */}
      <Footer
        year="2023"
        fullName="Apichaya Inkhiewsai"
        studentId="650610820"
      />
      {/* <div className="mt-3">
        <p className="text-secondary text-center">
          copyright © 2023 Apichaya Inkhiewsai 650610820
        </p>
      </div> */}
    </div>
  );
}
