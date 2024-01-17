export interface Subject {
  _id: string;
  name: string;
  tests: Test[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Test {
  _id: string;
  name: string;
  weight: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Grade {
  _id: string;
  test: Test;
  teacher: Teacher;
  value: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Student {
  _id: string;
  firstName: string;
  lastName: string;
  grades: Grade[];
  class?: Class;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Class {
  _id: string;
  name: string;
  students: Student[];
  subjects: Subject[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Teacher {
  _id: string;
  firstName: string;
  lastName: string;
  subjects: Subject[];
  classes: Class[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  _id: string;
  email: string;
  password: string;
  student?: Student;
  teacher?: Teacher;
  admin?: boolean;
  refreshToken?: string;
  refreshTokenExp?: Date;
  createdAt?: Date;
  updatedAt?: Date;
};