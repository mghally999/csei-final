// app/academics/calendar/page.jsx

import React from "react";

const CalendarPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-brown-800 mb-6">
        Academic Calendar
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Stay up to date with important academic dates including semester
        timelines, holidays, exam periods, and deadlines.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border rounded-lg p-6 shadow">
          <h2 className="text-2xl font-semibold text-brown-700 mb-2">
            📅 Semester Dates
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Fall Semester: Sep 1 – Dec 15</li>
            <li>Spring Semester: Jan 5 – Apr 20</li>
            <li>Summer Term: May 15 – Aug 1</li>
          </ul>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow">
          <h2 className="text-2xl font-semibold text-brown-700 mb-2">
            🎓 Exam Periods
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Midterms: Week 7–8 of each semester</li>
            <li>Final Exams: Last 2 weeks of semester</li>
          </ul>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow">
          <h2 className="text-2xl font-semibold text-brown-700 mb-2">
            🏖️ Holidays
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>National Day – Dec 2</li>
            <li>Winter Break – Dec 20 to Jan 3</li>
            <li>Eid Holidays – Variable Dates</li>
          </ul>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow">
          <h2 className="text-2xl font-semibold text-brown-700 mb-2">
            📝 Registration Deadlines
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Fall Enrollment: Aug 15</li>
            <li>Spring Enrollment: Dec 20</li>
            <li>Summer Courses: May 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
