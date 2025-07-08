'use client';
import { useEffect, useState } from 'react';
import api from '../lib/api';
import CourseCard from '../components/CourseCard';

type Course = {
  id: string;
  title: string;
  description: string;
  language: string;
  category: string;
};

export default function CoursesSection() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    api.get('/cursos')
      .then(res => setCourses(res.data.courseList))
      .catch(err => console.error('Erro ao buscar cursos:', err));
  }, []);

  return (
    <section id="cursos" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">Cursos Disponíveis</h2>

      {courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Carregando cursos...</p>
      )}
    </section>
  );
}
