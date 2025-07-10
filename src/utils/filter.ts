import { Advocate } from "@/types";

export function filterBySearchTerm(advocates: Advocate[], searchTerm: string) {
  return advocates.filter((advocate) => (
    advocate.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    advocate.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    advocate.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    advocate.degree.toLowerCase().includes(searchTerm.toLowerCase()) ||
    advocate.specialties.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
    advocate.yearsOfExperience.toString().includes(searchTerm.toLowerCase())
  ));
}
