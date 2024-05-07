import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Axios/interceptor";

export const getInstCourse = createAsyncThunk(
  "/inst/Courses/",
  async (userid) => {
    try {
      const response = await axiosInstance.get(
        `http://localhost:4000/course/instructor/${userid}`
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("error");
      throw error;
    }
  }
);

export const deleteInstCourse = createAsyncThunk(
  "/Courses/delete",
  async (id) => {
    try {
      const response = await axiosInstance.delete(
        `http://localhost:4000/course/${id}`
      );

      console.log(response.data);
      return id; // Return the deleted course ID
    } catch (error) {
      console.log("error");
      throw error;
    }
  }
);

const UserCourseSlice = createSlice({
  name: "UserCourses",
  initialState: {
    instCourse: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInstCourse.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getInstCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.instCourse = action.payload.data;
    });
    builder.addCase(getInstCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteInstCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.instCourse = state.instCourse.filter(
        (course) => course._id !== action.payload
      );
    });
  },
});

export default UserCourseSlice.reducer;
