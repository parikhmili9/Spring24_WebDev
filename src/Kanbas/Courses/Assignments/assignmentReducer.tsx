import { createSlice } from '@reduxjs/toolkit'
import db from '../../Database'

const assignments = db.assignments;

const initialState = {
  assignments: assignments,
  assignment: { 
    title: 'New Assignment title',
    course: 'Course',
    description: "Another assignment",
    points: '100',
    dueDate: '2024-03-21',
    availableFromDate: '2024-02-21',
    availableToDate: '2024-04-21'},
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
            ...state.assignments,
      ];
      console.log(state.assignments[0]);
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    selectAssignment: (state, action) => {
      state.assignment = action.payload
    }
  }
});

export const { addAssignment, deleteAssignment, updateAssignment, selectAssignment} = assignmentsSlice.actions
export default assignmentsSlice.reducer
