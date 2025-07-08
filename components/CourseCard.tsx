type Course = {
  id: string;
  title: string;
  description: string;
  language: string;
  category: string;
  url?: string;
};

export default function CourseCard({ course }: { course: Course }) {
  const Wrapper = course.url
    ? ({ children }: { children: React.ReactNode }) => (
        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => <>{children}</>;

  return (
    <Wrapper>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100 hover:bg-indigo-50 flex flex-col justify-between min-h-[240px]">
        <div>
          <h3 className="text-xl font-bold text-indigo-700">{course.title}</h3>
          <p className="text-gray-600 mt-2 text-sm">{course.description}</p>
        </div>
        <div className="mt-4 text-sm text-gray-500 flex justify-between">
          <span>🌐 {course.language}</span>
          <span>📚 {course.category}</span>
        </div>
      </div>
    </Wrapper>
  );
}
