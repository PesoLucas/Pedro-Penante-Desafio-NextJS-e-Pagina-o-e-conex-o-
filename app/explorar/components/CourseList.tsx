"use client";

import { useEffect, useState } from "react";
import { Post } from "@/types/course";
import { getAllCourses, deleteCourseFromStorage } from "@/data/courses";
import CourseCard from "./CourseCard";

interface CourseListProps {
  searchQuery: string;
  selectedTag: string;
}

export default function CourseList({ searchQuery, selectedTag }: CourseListProps) {
  const [courses, setCourses] = useState<Post[]>([]);

  useEffect(() => {
    setCourses(getAllCourses());
  }, []);

  const handleDeleteCourse = (id: number) => {
    // 1. Remove do LocalStorage
    deleteCourseFromStorage(id);

    // 2. Remove do estado da tela na hora
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      !searchQuery ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.body.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = !selectedTag || course.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  if (filteredCourses.length === 0) {
    return (
      <div className="text-center py-20 bg-[#18181b] rounded-2xl border border-zinc-800">
        <p className="text-xl font-bold text-zinc-400">
          Nenhum curso encontrado para essa busca.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCourses.map((post) => (
        <CourseCard
          key={post.id}
          post={post}
          onDelete={handleDeleteCourse} // 👈 Passa a ação de exclusão
        />
      ))}
    </div>
  );
}