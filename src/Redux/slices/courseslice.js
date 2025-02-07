import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Axios/interceptor";

export const getCourses = createAsyncThunk(
  "Courses/getAllCourse",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        "http://localhost:4000/course/",
        { params: { page, limit } }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const search = createAsyncThunk("courses/search", async ({ word }) => {
  try {
    const response = await axiosInstance.get(
      `http://localhost:4000/course/search/${word}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

const CourseSlice = createSlice({
  name: "Course",
  initialState: {
    courses: [],
    loading: false,
    error: null,
    totalPages: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload.data;
        state.totalPages = Math.ceil(
          action.payload.total / action.payload.limit
        );
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(search.pending, (state) => {
        state.loading = true;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload.data;
      })
      .addCase(search.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default CourseSlice.reducer;
