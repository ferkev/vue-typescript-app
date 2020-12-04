import { Component, Vue } from "vue-property-decorator";
import WithRender from "./todo.html";
import TodoForm from "../todoForm/ToDoForm";
import "./todo.css";
import { Task } from "@/models/index";

@WithRender
@Component({
  components: {
    TodoForm
  }
})
export default class Todo extends Vue {
  tasks: Task[] = [
    { id: 1, description: "Make Coffee", completed: false },
    { id: 2, description: "Feed Dragons", completed: false }
  ];

  public addTask(description: string): void {
    this.tasks.push({
      id: this.tasks[this.tasks.length - 1].id + 1,
      description,
      completed: false
    });
  }

  public completeTask(el: Task): Task[] {
    this.tasks = this.tasks.map(task => {
      if (task.id === el.id) {
        task.completed = !task.completed;
      }

      return task;
    });

    return this.tasks;
  }
}
