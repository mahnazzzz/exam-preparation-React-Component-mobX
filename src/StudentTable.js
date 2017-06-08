/**
 * Created by Bruger on 07-06-2017.
 */
import {observer} from "mobx-react";
import React, {Component} from 'react';
import './App.css';
import info from "./dataModel";


@observer
class StudentTable extends Component {
    calculateAverageGrade (arr){
        var sum =0;
        var count =0;
        arr.forEach(
            (grade) =>{
                if(grade.grade){
                    sum+= Number(grade.grade);
                    count++
                }
            }
        )
        var avg = sum/count;
        return parseFloat(avg).toFixed(2);
    }


    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                <th></th>
                    {info.studentsInfo.headers.map((header, index)=>(
                        <th key ={index}>{header.courseName}</th>
                    ))}
                    <th>Average</th>
                </tr>
                </thead>
                <tbody>
                
                {info.studentsInfo.students.map((student, index)=>(
                    <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.grades[0].grade}</td>
                        <td>{student.grades[1].grade}</td>
                        <td>{student.grades[2].grade}</td>
                        <td><h4>{this.calculateAverageGrade(student.grades)}</h4></td>
                    </tr>
                    ))}
                </tbody>

            </table>

        )
    }
}

export default StudentTable;