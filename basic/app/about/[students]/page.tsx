import { notFound } from "next/navigation";

const students = [
  {
    studentId: "STU001",
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    age: 20,
  },
  {
    studentId: "STU002",
    name: "Ananya Singh",
    email: "ananya.singh@example.com",
    age: 21,
  },
  {
    studentId: "STU003",
    name: "Rohan Verma",
    email: "rohan.verma@example.com",
    age: 20,
  },
  {
    studentId: "STU004",
    name: "Priya Gupta",
    email: "priya.gupta@example.com",
    age: 21,
  },
  {
    studentId: "STU005",
    name: "Rahul Mehta",
    email: "rahul.mehta@example.com",
    age: 22,
  },
  {
    studentId: "STU006",
    name: "Simran Kaur",
    email: "simran.kaur@example.com",
    age: 20,
  },
  {
    studentId: "STU007",
    name: "Aditya Kumar",
    email: "aditya.kumar@example.com",
    age: 21,
  },
  {
    studentId: "STU008",
    name: "Neha Kapoor",
    email: "neha.kapoor@example.com",
    age: 20,
  },
  {
    studentId: "STU009",
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    age: 22,
  },
  {
    studentId: "STU010",
    name: "Kavya Sharma",
    email: "kavya.sharma@example.com",
    age: 21,
  },
];

export default async function StudentPage({
  params,
}: {
  params: Promise<{ students: string }>;
}) {
  const { students: studentId } = await params;
  const student = students.find((item) => item.studentId === studentId);

  if (!student) {
    notFound();
  }

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
    </div>
  );
}
