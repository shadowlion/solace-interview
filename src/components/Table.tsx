"use client";

import { useAdvocates } from "@/hooks/useAdvocates";

export default function Table() {
  return (
    <table>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>City</th>
        <th>Degree</th>
        <th>Specialties</th>
        <th>Years of Experience</th>
        <th>Phone Number</th>
      </thead>
      <TableBody />
    </table>
  )
}

function TableBody() {
  const { loading, filteredAdvocates } = useAdvocates();
  return (
    <tbody>
      {loading ? (
      <tr>
        <td>Loading...</td>
      </tr>
      ) : (
        filteredAdvocates.map((advocate, index) => (
          <tr key={index}>
            <td>{advocate.firstName}</td>
            <td>{advocate.lastName}</td>
            <td>{advocate.city}</td>
            <td>{advocate.degree}</td>
            <td>
              {advocate.specialties.map((s, i) => (
                <div key={i}>{s}</div>
              ))}
            </td>
            <td>{advocate.yearsOfExperience}</td>
            <td>{advocate.phoneNumber}</td>
          </tr>
        ))
      )}
    </tbody>
  )
}
