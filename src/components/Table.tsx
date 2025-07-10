"use client";

import { useAdvocates } from "@/hooks/useAdvocates";

export default function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">First Name</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Last Name</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">City</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Degree</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Specialties</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Years of Experience</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Phone Number</th>
          </tr>
        </thead>
        <TableBody />
      </table>
    </div>
  );
}

function TableBody() {
  const { loading, filteredAdvocates } = useAdvocates();
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {loading ? (
      <tr className="hover:bg-gray-50 text-center">
        <td colSpan={7} className="p-20">Loading...</td>
      </tr>
      ) : (
        filteredAdvocates.map((advocate, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2 text-sm text-gray-800">{advocate.firstName}</td>
            <td className="px-4 py-2 text-sm text-gray-800">{advocate.lastName}</td>
            <td className="px-4 py-2 text-sm text-gray-800">{advocate.city}</td>
            <td className="px-4 py-2 text-sm text-gray-800">{advocate.degree}</td>
            <td className="px-4 py-2 text-sm text-gray-800">
              {advocate.specialties.map((s, i) => (
                <div key={i}>{s}</div>
              ))}
            </td>
            <td className="px-4 py-2 text-sm text-gray-800">{advocate.yearsOfExperience}</td>
            <td className="px-4 py-2 text-sm text-gray-800">{advocate.phoneNumber}</td>
          </tr>
        ))
      )}
    </tbody>
  );
}
