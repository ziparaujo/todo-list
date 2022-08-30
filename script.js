/* eslint-disable no-console */
class Task {
  constructor() {
    this.btn = document.querySelector('.task-button');
    this.input = document.querySelector('[name="task-input"]');
    this.form = document.querySelector('.form');
    this.taskContainer = document.querySelector('.task-tarefas');

    this.handleTask = this.handleTask.bind(this);
    this.removeError = this.removeError.bind(this);
    // this.removeElements = this.removeElements.bind(this);
  }

  inputValue() {
    return this.input.value;
  }

  preventsError() {
    if (!this.inputValue().length) {
      this.input.classList.add('error');
    }
  }

  removeError() {
    this.input.classList.remove('error');
  }

  addElements() {
    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const taskContent = document.createElement('p');
    taskContent.innerText = this.inputValue();

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-regular');
    deleteIcon.classList.add('fa-trash-can');

    this.taskContainer.appendChild(taskItemContainer);
    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteIcon);

    this.input.value = '';

    deleteIcon.addEventListener('click', () => {
      taskItemContainer.remove();
    });

    taskContent.addEventListener('click', () => {
      taskContent.classList.toggle('completed');
    });
  }

  handleTask(event) {
    event.preventDefault();

    if (this.inputValue().length) {
      this.addElements();
    } else this.preventsError();
  }

  addEvents() {
    this.btn.addEventListener('click', this.handleTask);
    this.input.addEventListener('change', this.removeError);
  }

  init() {
    this.addEvents();
    return this;
  }
}

const task = new Task();
task.init();
