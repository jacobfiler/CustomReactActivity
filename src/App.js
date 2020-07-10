import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TaskRow} from "./TaskRow"


export default class App extends Component{
  constructor()
  {
    super();

    this.state ={
      devStepList: [
        {task: "Create the app", done: false},
        {task: "Upload to GitHub", done: false},
        {task: "Delete everything in it", done: false}
      ]
    } 
  }

  taskTableRow = (isTaskDone) => this.state.devStepList.filter(x => x.done === isTaskDone).map(notCompleted => <TaskRow 
    key = {notCompleted.action}
    item = {notCompleted}
    callback = {this.toggleList}
  />)

  toggleList = (tasks) => this.setState({
    devStepList: this.state.devStepList.map(item => item.task === tasks.task ? {...item, done: !item.done} : item)
  })

  render = ()=>
  <div>
 <div className="col-md-8 offset-md-2">
        <table className="table table-striped table-bordered drop-shadow">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {this.taskTableRow(false)}
          </tbody>
        </table>
  </div>
</div>
};
